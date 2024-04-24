<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;
    protected $table = 'items';
    protected $fillable = [
        'user_id',
        'category_id',
        'name',
        'description',
        'location',
        'price',
        'image',
        'stock'
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
    public function transaction()
    {
        return $this->hasMany(Transaction::class, 'item_id', 'id');
    }
    public function cart()
    {
        return $this->hasMany(Cart::class, 'item_id', 'id');
    }
    public function wishlist()
    {
        return $this->hasMany(Wishlist::class, 'item_id', 'id');
    }
}
