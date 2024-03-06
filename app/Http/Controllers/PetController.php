<?php

namespace App\Http\Controllers;
use App\Models\Pet;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PetController extends Controller
{
    //
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Pets/Index', [
            'pets' => Pet::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Pets/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'species' => 'required',
            'image' => 'required|image',
        ]);
    
        $image = $request->file('image')->store('pet_images');
    
        $pet = Pet::create([
            'name' => $request->name,
            'species' => $request->species,
            'image' => $image,
        ]);
    
        return redirect()->route('pets.show', $pet);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Inertia\Response
     */
    public function show(Pet $pet)
    {
        return Inertia::render('Pets/Show', [
            'pet' => $pet,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Inertia\Response
     */
    public function edit(Pet $pet)
    {
        return Inertia::render('Pets/Edit', [
            'pet' => $pet,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pet  $pet
     * @return \Inertia\Response
     */
    public function update(Request $request, Pet $pet)
    {
        $pet->update($request->all());

        return redirect()->route('pets.show', $pet);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pet $pet)
    {
        $pet->delete();

        return redirect()->route('pets.index');
    }
}
