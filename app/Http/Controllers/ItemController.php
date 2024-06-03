<?php

namespace App\Http\Controllers;
use App\Models\Item;
use App\Models\Category;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\User;

class ItemController extends Controller
{
    //
    public function index()
    {
         // Assuming you're using Laravel's default authentication
        $userId = auth()->id(); // Get the ID of the currently authenticated user

        // Fetch only the items that belong to this user
        $pets = Item::where('user_id', $userId)->get();
        $address = User::find($userId)->address;
        return Inertia::render('Item/Index', [
            'pets' => $pets,
            'title' => ' Item Index',
            'address' => $address,
        ]);
    }
    public function create (){
        return Inertia::render('Item/Create' , ['title' => 'Create Item']);
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
            
            'stock' => 'required|numeric',
            'image' => 'required|image',
        ]);

        $user = auth()->user();
        if ($request->file('image')) {
            $imageFile = $request->file('image');
            $imageName = uniqid() . '' . $imageFile->getClientOriginalName();
            $imagePath = $imageFile->storeAs('pet_images', $imageName, 'public');
            $request->image = $imagePath;
        }
        Item::create([
            'user_id' => auth()->id(),

            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'category_id' => $request->category_id,
            //'location' => $request->location,
            'image' => $request->image,
            'stock' => $request->stock,
        ]);
    
        return redirect()->route('item.index')->with('message', 'Item successfuly inserted!');
    }


public function show($item)
{
   // $item = Item::find($item);
    $item = Item::with('user')->find($item);
    if (!$item) {
        // Handle the case where the item is not found
        abort(404);
    }

    return Inertia::render('Item/Show', ['item' => $item, 'title' => 'Item Details']);
}

// ItemController.php


public function update(Request $request, Item $item)
{
    $request->validate([
        'name' => 'required',
        'description' => 'required',
        'price' => 'required|numeric',
        'category_id' => 'required|exists:categories,id',
       
        'stock' => 'required|numeric',
        'image' => 'nullable|image',
    ]);

    $requestData = $request->only(['name', 'description', 'price', 'category_id', 'stock']);
    
    if ($request->file('image')) {
        $imageFile = $request->file('image');
        $imageName = uniqid() . '' . $imageFile->getClientOriginalName();
        $imagePath = $imageFile->storeAs('pet_images', $imageName, 'public');
        $requestData['image'] = $imagePath;
        Storage::delete($item->image);
    } else {
        $requestData['image'] = $item->image;
    }

    $item->update($requestData);

    return redirect()->route('item.index')->with('message', 'Item successfully updated!');
}



public function destroy(Item $item)
{
    if ($item->image) {
        Storage::disk('public')->delete($item->image);
    }
    $item->delete();

    return redirect()->route('item.index')->with('message', 'Item successfully deleted!');
}

public function edit($id)
{
    $item = Item::find($id);

    if (!$item) {
        // Handle the case where the item does not exist
        abort(404);
    }
    //return view('update')->with('item', $item);
    return Inertia::render('Item/Edit', ['item' => $item, 'title' => 'Edit Item']);
}
}


