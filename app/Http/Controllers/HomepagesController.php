<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Pet;
use Illuminate\Http\Request;


class HomepagesController extends Controller
{
    //
    public function index(){
        $pets= Pet::all();


        return inertia::render('Homepages', [
            'pets' => $pets,
            'title' => "halo ges",
        ]);
    }
}
