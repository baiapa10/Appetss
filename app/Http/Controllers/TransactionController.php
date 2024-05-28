<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Item;
use App\Models\Transaction;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\TransactionItem;

class TransactionController extends Controller
{


public function processPayment(Request $request)
{
    
    $userId = Auth::id();
    $totalPrice = $request->input('totalPrice');
    $cartItems = $request->input('cartItems');
    $address = $request->input('address');
    //dd($cartItems, $totalPrice, $address);
    // Create a new transaction
    $transaction = Transaction::create([
        'user_id' => $userId,
        'total_price' => $totalPrice,
        'status' => 1,
        'address' => $address,
    ]);

    // Loop through the cart items and create a new TransactionItem for each one
    for ($i = 0; $i < count($cartItems); $i += 2) {
        $itemId = $cartItems[$i]['id'];
        $quantity = $cartItems[$i + 1]['quantity'];

        $cartItem = Cart::find($itemId);
        $item = Item::find($cartItem->item_id);
        // Reduce the quantity of the item
        $item->stock -= $quantity;
        $item->save();

        TransactionItem::create([
            'transaction_id' => $transaction->id,
            'item_id' => $item->id,
            'quantity' => $quantity,
        ]);
        $cartItem->delete();
    }

    return redirect()->route('myorder')->with('message', 'Order has been placed successfully.');
}



    public function showMyOrder(Request $request)
    {
        $userId = Auth::id();

        // Fetch the transactions for the current user
        $transactions = Transaction::with('transactionItems.item')
            ->where('user_id', $userId)
            ->get();
    
        // Format the transactions for the response
        $formattedTransactions = $transactions->map(function ($transaction) {
            return [
                'id' => $transaction->id,
                'total_price' => $transaction->total_price,
                'status' => $transaction->status,
                'items' => $transaction->transactionItems->map(function ($transactionItem) {
                    return [
                        'id' => $transactionItem->item->id,
                        'name' => $transactionItem->item->name,
                        'quantity' => $transactionItem->quantity,
                    ];
                }),
            ];
        });
    
        return Inertia::render('MyOrder', [
            'transactions' => $formattedTransactions,
            'title' => 'My Orders',
        ]);
}
    public function showPaymentPage(Request $request)
    {
    
    $totalPrice = $request->input('totalPrice');
    $carts = $request->input('checkedItems');
    if (empty($carts)) {
        return redirect()->route('cart.index') ->with('message', 'Please select items to checkout.');
    }
    return Inertia::render('PaymentPage', [
        'totalPrice' => $totalPrice,
        'cartItems' => $carts,
        'title' => 'Payment Page',
    ]);
}

public function updateStatus($id, Request $request)
{
    $transaction = Transaction::find($id);

    if (!$transaction) {
        return redirect()->back()->with('error', 'Transaction not found.');
    }

    $transaction->status = $request->input('status');
    $transaction->save();

    return redirect()->route('myorder')->with('message', 'Transaction status updated successfully.');
}
}
