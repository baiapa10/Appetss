<?php

namespace App\Http\Controllers;
use App\Models\Item;
use Inertia\Inertia;
use Illuminate\Http\Request;


class ItemController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('item/index', [
            'items' => Item::all(),
        ]);
    }
    public function create (){
        return Inertia::render('item/create');
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
    
        return redirect()->route('item.index')->with('success', 'Item successfuly inserted!');
    }
    

public function show($item)
{
    $item = Item::find($item);

    if (!$item) {
        // Handle the case where the item is not found
        abort(404);
    }

    return Inertia::render('Item/Show', ['item' => $item]);
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
