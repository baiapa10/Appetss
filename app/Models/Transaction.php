<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $table = 'transactions';
    protected $fillable = ['user_id', 'total_price', 'status', 'address'];
    public function user()
{
    return $this->belongsTo(User::class, 'user_id', 'id');
}

    public function item()
    {
        return $this->hasMany(Item::class, 'item_id', 'id');
    }
    public function transactionItems()
{
    return $this->hasMany(TransactionItem::class);
}

}
