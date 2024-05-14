<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Item;
use Illuminate\Http\Request;


class HomepagesController extends Controller
{
    //
   
    public function index(Request $request){
        $searchQuery = $request->input('search', '');
        //dd($searchQuery);
        if (!empty($searchQuery)) {
            // If there is a search query, filter the items based on the query
            $pets = Item::where('name', 'LIKE', "%{$searchQuery}%")
                        ->orWhere('description', 'LIKE', "%{$searchQuery}%")
                        ->get();
        } else {
            // If there is no search query, return all items
            $pets = Item::all();
        }

        return Inertia::render('Homepages', [
            'pets' => $pets,
            'title' => "Search Results",
        ]);
    }
}