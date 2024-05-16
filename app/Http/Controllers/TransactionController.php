<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Item;
use App\Models\Transaction;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

class TransactionController extends Controller
{
    // public function processPayment(Request $request)
    // {
    //     $user = auth()->user();
    //     $cartItems = $request->input('cartItems', []);
    //     $totalPrice = $request->input('totalPrice', 0);

    //     DB::beginTransaction();
    //     try {
    //         foreach ($cartItems as $cartItem) {
    //             if ($cartItem['selected']) {
    //             $cart = Cart::where('user_id', $user->id)->where('id', $cartItem['id'])->first();
    //             if ($cart) {
    //                 Transaction::create([
    //                     'user_id' => $user->id,
    //                     'item_id' => $cart->item_id,
    //                     'quantity' => $cartItem['quantity'],
    //                     'total_price' => $cartItem['quantity'] * $cart->item->price,
    //                     'address' => 'Your default address or from request',
    //                 ]);

    //                 $cart->delete();
    //             }
    //         }
    //         }
    //         DB::commit();
    //         return Redirect::route('myorder');
    //         // return redirect('/success')->with('message', 'Payment successful and order placed.');
    //     } catch (\Exception $e) {
    //         DB::rollBack();
    //         return redirect()->back()->withErrors('Error processing payment. Please try again.');
    //     }
    // }


public function processPayment(Request $request)
{
    $user = auth()->user();
    $cartItems = $request->input('cartItems', []);
    $totalPrice = $request->input('totalPrice', 0);

    DB::beginTransaction();
    try {
        foreach ($cartItems as $cartItem) {
            if ($cartItem['selected']) {
                $cart = Cart::where('user_id', $user->id)->where('id', $cartItem['id'])->first();
                if ($cart) {
                    Transaction::create([
                        'user_id' => $user->id,
                        'item_id' => $cart->item_id,
                        'quantity' => $cartItem['quantity'],
                        'total_price' => $cartItem['quantity'] * $cart->item->price,
                        'address' => 'Your default address or from request',
                    ]);

                    $cart->delete();
                }
            }
        }
        DB::commit();

        // Retrieve the latest transaction data
        $latestTransaction = Transaction::where('user_id', $user->id)
            ->latest()
            ->first();

        // Redirect to the myorder page with the latest transaction data
        return Inertia::render('MyOrder', [
            'latestTransaction' => $latestTransaction,
        ]);
    } catch (\Exception $e) {
        DB::rollBack();
        return redirect()->back()->withErrors('Error processing payment. Please try again.');
    }
}


    // public function showPaymentPage(Request $request)
    // {

    //     $userId = auth()->id();

    //     $cartItems = $request->input('cartItems', []);
    //     $checkedItemIds = array_column($cartItems, 'id');

    //     $carts = Cart::where('user_id', $userId)
    //                  ->whereIn('id', $checkedItemIds)
    //                  ->with('item')
    //                  ->get();

    //     $totalPrice = $request->input('totalPrice');

    //     dd($carts, $totalPrice);
    //     return Inertia::render('PaymentPage', [
    //         'carts' => $carts,
    //         'totalPrice' => $totalPrice,
    //         'auth' => [
    //             'user' => auth()->user(),
    //         ],
    //     ]);

    // }
    // public function showPaymentPage(Request $request)
    // {

    //     $totalPrice = $request->input('totalPrice');
    //   //dd($totalPrice);
    //    // return view('Payment', [ 'totalPrice'=> $totalPrice]);

    //     return Inertia::render('PaymentPage', [

    //         'totalPrice' => $totalPrice,

    //     ]);

    // }

    public function showMyOrder(Request $request)
    {
    $totalPrice = $request->input('totalPrice');

    return Inertia::render('MyOrder', [
        'totalPrice' => $totalPrice,
    ]);
}
    public function showPaymentPage(Request $request)
    {
    $totalPrice = $request->input('totalPrice');

    return Inertia::render('PaymentPage', [
        'totalPrice' => $totalPrice,
    ]);
}

public function index()
{
     // Assuming you're using Laravel's default authentication
    $userId = auth()->id(); // Get the ID of the currently authenticated user

    // Fetch only the items that belong to this user
    $pets = Item::where('user_id', $userId)->get();

    return Inertia::render('Item/Index', [
        'pets' => $pets,
    ]);
}



}
