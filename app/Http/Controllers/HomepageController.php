<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Pet;
use Illuminate\Http\Request;

class HomepageController extends Controller
{
    //
    public function index(){
        $pets= Pet::all();
            
       
        return inertia::render('Homepage', [
            'pets' => $pets,
            'title' => "halo ges",
        ]);
    }   
}
