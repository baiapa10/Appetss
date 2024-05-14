<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Item;
class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
       Item::create([
            'id' => 123,
            'name' => 'Fluffy',
            'description' => 'A fluffy, adorable cat.',
            'user_id' => 1,
            'category_id' => 3,
            'location' => 'London',
            'price' => '10000',
            'image' => 'pet_images/fluffy.jpg',
            'stock' => '1',

    ]);
    Item::create([
        'id' => 456,
        'name' => 'Spike',
        'description' => 'A spiky, adorable dog.',
        'user_id' => 2,
        'category_id' => 2,
        'location' => 'New York',
        'price' => '5000',
        'image' => 'pet_images/spike.jpg',
        'stock' => 1,
        ]);
        Item::create([
            'name' => 'Chirpy',
            'description' => 'A cheerful little bird.',
            'user_id' => 2,
            'category_id' => 7, // Assuming '7' is the ID for birds for sale
            'location' => 'San Francisco',
            'price' => '15000',
            'image' => 'pet_images/chirpy.jpg',
            'stock' => 1,
        ]);

        Item::create([
            'name' => 'Goldie',
            'description' => 'A beautiful goldfish.',
            'user_id' => 2,
            'category_id' => 5, // Assuming '5' is the ID for fish for sale
            'location' => 'Miami',
            'price' => '20000',
            'image' => 'pet_images/goldie.jpg',
            'stock' => 5,
        ]);
        
        Item::create([
            'name' => 'Slithers',
            'description' => 'A friendly snake.',
            'user_id' => 2,
            'category_id' => 9, // Assuming '9' is the ID for other pets for sale
            'location' => 'Austin',
            'price' => '30000',
            'image' => 'pet_images/slithers.jpg',
            'stock' => 5,
        ]);

        Item::create([
            'name' => 'wiskas catfood',
            'description' => 'A healthy catfood.',
            'user_id' => 2,
            'category_id' => 10, // Assuming '10' is the ID for other equipment for sale
            'location' => 'Surakarta',
            'price' => '32450',
            'image' => 'pet_images/wiskas.jpg',
            'stock' => 1,
        ]);
        
    }
}
