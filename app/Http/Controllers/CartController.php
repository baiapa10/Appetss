<?php

namespace App\Http\Controllers;

use App\Models\Cart;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class CartController extends Controller
{

public function index ()
{
    $userId = auth()->id();
    $carts = Cart::where('user_id', $userId)->with('item')->get();
    return Inertia::render('Cart', ['carts' => $carts]);
}

public function store(Request $request)
{
    $userId = auth()->id();
    $itemId = $request->input('item_id');
    $quantity = $request->input('quantity');

    // Check if the item is already in the wishlist
    $exists = Cart::where('user_id', $userId)->where('item_id', $itemId)->exists();

    if (!$exists) {
        Cart::create([
            'user_id' => $userId,
            'item_id' => $itemId,
            'quantity' => $quantity
        ]);
    }
    else {
        return redirect()->back()->with('message','Item already in Cart');
    }

    return redirect()->back()->with('message', 'Item added to Cart successfully.');
}

// public function store(Request $request)
// {
//     $userId = auth()->id();
//     $itemId = $request->input('item_id');
//     $quantity = $request->input('quantity');

//     // Check if the item is already in the wishlist
//     $exists = Cart::where('user_id', $userId)->where('item_id', $itemId)->exists();

//     if ($exists) {
//         return response()->json(['message' => 'Item already in Cart'], 422);
//     }

//     Cart::create([
//         'user_id' => $userId,
//         'item_id' => $itemId,
//         'quantity' => $quantity
//     ]);

//     return response()->json(['message' => 'Item added to Cart successfully'], 200);
// }



    public function destroy($id)
    {
        $cart = Cart::find($id);
        $cart->delete();

        return redirect('/cart');
    }

    public function order()
{
    $userId = auth()->id;
    $carts = Cart::where('user_id', $userId)->with('item')->get();

    foreach ($carts as $cart) {
        Transaction::create([
            'user_id' => $userId,
            'item_id' => $cart->item_id,
            'quantity' => $cart->quantity,
            'price' => $cart->item->price,
        ]);

        // Delete the cart item after creating the order
        $cart->delete();
    }

    return redirect('/success')->with('message', 'Order placed successfully.');
}
// public function showPaymentPage()
// {
//     $userId = auth()->id();
//     $carts = Cart::where('user_id', $userId)->with('item')->get();
//     return Inertia::render('PaymentPage', ['carts' => $carts]);
// }

public function showPaymentPage()
{
    $userId = auth()->id();
    $carts = Cart::where('user_id', $userId)->with('item')->get();

    // Hitung total harga di sini
    $totalPrice = 0;
    foreach ($carts as $cart) {
        $totalPrice += $cart->item->price * $cart->quantity;
    }

    return Inertia::render('PaymentPage', ['carts' => $carts, 'totalPrice' => $totalPrice]);
}

}
