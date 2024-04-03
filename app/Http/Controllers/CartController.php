<?php

namespace App\Http\Controllers;

use App\Models\Item;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function add($id)
    {
        $item = Item::findOrFail($id);

   

        $transaction = Transaction::create([
            'user_id' => Auth::guard('users')->user()->id,
            'item_id' => $item->id,
            'amount' => $item->price
        ]);

        return redirect('/cart');
 

    }

    public function cart()
    {
        $data = [
            $carts = Transaction::where('user_id', Auth::guard('users')->user()->id)->get()
        ];

        return view('cart', $data);
        
    }

    public function remove($id)
    {
        $transaction = Transaction::findOrFail($id);
        $transaction->delete();

        return redirect('/cart');
    }

    public function order()
    {
        $carts = Transaction::where('user_id', Auth::guard('users')->user()->id)->get();
        foreach ($carts as $cart) {
            $cart->delete();
        }
        return redirect('/success');
    }
}