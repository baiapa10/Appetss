<?php

namespace Database\Seeders;
use App\Models\Pet;

use Illuminate\Database\Seeder;

class PetSeeder extends Seeder
{
    public function run(): void
    {
    Pet::create([
            'id' => 123,
            'name' => 'Fluffy',
            
            'description' => 'A fluffy, adorable cat.',
            'user_id' => 1,
            'category_id' => 1,
            'location' => 'London',
            'price' => '10000',
            'image' => 'https://www.pexels.com/photo/white-and-grey-kitten-on-brown-and-black-leopard-print-textile-45201/',


    ]);
}
}
