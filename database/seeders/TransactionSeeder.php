<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Transaction;
class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Transaction::create([
           //
            'status' => 1,
           // 'quantity' => 1,
            'total_price' => 100000.00,
            'user_id' => 2, // Ensure this user_id exists in your users table
            //'item_id' => 456, // Ensure this item_id exists in your items table
            'address' => '123 Main St, Anytown, USA',
            // 'item_id' => 1, // Uncomment and ensure this item_id exists in your items table
        ]);
    }
}
