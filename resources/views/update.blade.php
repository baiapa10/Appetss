<!-- item_edit.blade.php -->

<form method="POST" action="{{ route('item.update', ['item' => $item->id]) }}" enctype="multipart/form-data">
    @csrf
    @method('PUT')

    <label for="name">Name:</label>
    <input type="text" name="name" value="{{ old('name', $item->name) }}" required>

    <label for="description">Description:</label>
    <textarea name="description" required>{{ old('description', $item->description) }}</textarea>

    <label for="price">Price:</label>
    <input type="number" name="price" value="{{ old('price', $item->price) }}" required>

    <label for="category_id">Category:</label>
    <select name="category_id" required>
        <option value="">Pilih kategori</option>
        <option value="1" {{ old('category_id', $item->category_id) == 1 ? 'selected' : '' }}>Dog - Sell</option>
        <option value="2" {{ old('category_id', $item->category_id) == 2 ? 'selected' : '' }}>Dog - Adopt</option>
        <option value="3" {{ old('category_id', $item->category_id) == 3 ? 'selected' : '' }}>Cat - Sell</option>
        <option value="4" {{ old('category_id', $item->category_id) == 4 ? 'selected' : '' }}>Cat - Adopt</option>
        <option value="5" {{ old('category_id', $item->category_id) == 5 ? 'selected' : '' }}>Fish - Sell</option>
        <option value="6" {{ old('category_id', $item->category_id) == 6 ? 'selected' : '' }}>Fish - Adopt</option>
        <option value="7" {{ old('category_id', $item->category_id) == 7 ? 'selected' : '' }}>Bird - Sell</option>
        <option value="8" {{ old('category_id', $item->category_id) == 8 ? 'selected' : '' }}>Bird - Adopt</option>
        <option value="9" {{ old('category_id', $item->category_id) == 9 ? 'selected' : '' }}>Other - Sell</option>
        <option value="10" {{ old('category_id', $item->category_id) == 10 ? 'selected' : '' }}>Other - Adopt</option>
        <option value="11" {{ old('category_id', $item->category_id) == 11 ? 'selected' : '' }}>Equipment - Sell</option>
    </select>

    <label for="location">Location:</label>
    <input type="text" name="location" value="{{ old('location', $item->location) }}" required>

    <label for="stock">Stock:</label>
    <input type="number" name="stock" value="{{ old('stock', $item->stock) }}" required>

    <label for="image">Image:</label>
    <input type="file" name="image">

    <button type="submit">Submit</button>
</form>
