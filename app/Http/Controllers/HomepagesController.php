<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Item;
use Illuminate\Http\Request;


class HomepagesController extends Controller
{
    //
    public function index(){
        $pets= Item::all();


        return inertia::render('Homepages', [
            'pets' => $pets,
            'title' => "halo gesa",
        ]);
    }
}
