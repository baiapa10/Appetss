<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Pet;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function add($id)
    {
        $item = Item::findOrFail($id);

        $pet = Pet::findOrFail(1);

        $transaction = Transaction::create([
            'pet_id' => $pet->id,
            'amount' => $item->price
        ]);

        return redirect('/cart');
    }

    public function cart()
    {
        $data = [
            'carts' => Transaction::where('pet_id', 1)->get()
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
        $transactions = Transaction::where('pet_id', 1)->get();

        foreach ($transactions as $transaction) {
            $transaction->delete();
        }

        return redirect('/success');
    }
}