<?php

namespace App\Http\Controllers;
use App\Models\Item;
use Illuminate\Http\Request;


class ItemController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Items/Index', [
            'items' => Item::all(),
        ]);
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
            'location' => 'required',
            'image' => 'required|image',
            'stock' => 'required|numeric',
        ]);
    
        $image = $request->file('image')->store('pet_images');
    
        $item = Item::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'location' => $request->location,
            'image' => $image,
            'stock' => $request->stock,
        ]);
    
        return response()->json($item);
    }
    

public function show($id)
{
    $item = Item::find($id);

    return response()->json($item);
}

public function update(Request $request, $id)
{
    $request->validate([
        'name' => 'required',
        'description' => 'required',
        'price' => 'required|numeric',
        'category_id' => 'required|exists:categories,id',
        'location' => 'required',
        'image' => 'required|image',
        'stock' => 'required|numeric',
    ]);

    $item = Item::find($id);
    $item->update($request->all());

    return response()->json($item);
}

public function destroy($id)
{
    $item = Item::find($id);
    $item->delete();

    return response()->json(['message' => 'Item deleted']);
}
}
