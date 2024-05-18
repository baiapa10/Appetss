<?php

namespace App\Http\Controllers;

use App\Models\Cart;


use Illuminate\Http\Request;
use Inertia\Inertia;
class CartController extends Controller
{

public function index ()
{
    $userId = auth()->id();
    $carts = Cart::where('user_id', $userId)->with('item')->get();
    return Inertia::render('Cart', ['carts' => $carts, 'title' => 'Shopping Cart']);
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

    return redirect()->route('cart.index')->with('message', 'Item added to Cart successfully');
}

    public function destroy($id)
    {
        $cart = Cart::find($id);
        if ($cart) {
            $cart->delete();
        }

        return redirect('/cart')->with('message', 'Item removed from Cart');
    }





}
