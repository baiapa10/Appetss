<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $table = 'transactions';
    protected $fillable = [
        'user_id',
        'category_id',
        'pet_id',
        'quantity',
        'price',
    ];
    public function buyer()
{
    return $this->belongsTo(User::class, 'buyer_id', 'id');
}
public function seller()
{
    return $this->belongsTo(User::class, 'seller_id', 'id');
}
    public function pet()
    {
        return $this->belongsTo(Pet::class, 'pet_id', 'id');
    }

}
