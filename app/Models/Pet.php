<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    use HasFactory;
    protected $table = 'pets';
    protected $fillable = [
        'user_id',
        'category_id',
        'name',
        'description',
        'location',
        'price',
        'image',
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'pet_id', 'id');
    }
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
    public function transaction()
    {
        return $this->hasMany(Transaction::class, 'pet_id', 'id');
    }
    public function cart()
    {
        return $this->hasMany(Cart::class, 'pet_id', 'id');
    }

}
