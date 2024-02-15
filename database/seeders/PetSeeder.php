<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PetSeeder extends Seeder
{
    public function run(): void
    {
    DB::table('pets')->create([
            // 'name' => 'Fluffy',
            // 'species' => 'Cat',
            // 'description' => 'A fluffy, adorable cat.',
            // 'user_id' => 1,
            // 'category_id' => 1,
            // 'location' => 'London',
            // 'price' => '10000',
            // 'image_url' => 'https://www.pexels.com/photo/white-and-grey-kitten-on-brown-and-black-leopard-print-textile-45201/',


    ]);
}
}
