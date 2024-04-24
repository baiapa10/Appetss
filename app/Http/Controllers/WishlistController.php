<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Wishlist;

class WishlistController extends Controller
{
    //
public function index()
{
    $userId = auth()->id();
    $list = Wishlist::where('user_id', $userId)->with('item')->get();
    return Inertia::render('Wishlist', ['list' => $list]);
}


    public function store(Request $request)
{
    $userId = auth()->id();
    $itemId = $request->input('item_id');

    // Check if the item is already in the wishlist
    $exists = Wishlist::where('user_id', $userId)->where('item_id', $itemId)->exists();

    if (!$exists) {
        Wishlist::create([
            'user_id' => $userId,
            'item_id' => $itemId,
        ]);
    }
    else {
        return redirect()->back()->with('message','Item already in wishlist');
    }

    return redirect()->back()->with('message', 'Item added to wishlist successfully.');
}

public function destroy($itemId)
{
    $userId = auth()->id();

    Wishlist::where('user_id', $userId)->where('item_id', $itemId)->delete();

    return redirect()->back()->with('message', 'Item removed from wishlist successfully.');
}


}
