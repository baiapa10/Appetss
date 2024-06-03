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
        
        'price' => '5000',
        'image' => 'pet_images/spike.jpg',
        'stock' => 1,
        ]);
        Item::create([
            'name' => 'Chirpy',
            'description' => 'A cheerful little bird.',
            'user_id' => 2,
            'category_id' => 7, // Assuming '7' is the ID for birds for sale
           
            'price' => '15000',
            'image' => 'pet_images/chirpy.jpg',
            'stock' => 1,
        ]);

        Item::create([
            'name' => 'Goldie',
            'description' => 'A beautiful goldfish.',
            'user_id' => 2,
            'category_id' => 5, // Assuming '5' is the ID for fish for sale
         
            'price' => '20000',
            'image' => 'pet_images/goldie.jpg',
            'stock' => 5,
        ]);
        
        Item::create([
            'name' => 'Slithers',
            'description' => 'A friendly snake.',
            'user_id' => 2,
            'category_id' => 9, // Assuming '9' is the ID for other pets for sale
       
            'price' => '30000',
            'image' => 'pet_images/slithers.jpg',
            'stock' => 5,
        ]);

        Item::create([
            'name' => 'wiskas catfood',
            'description' => 'A healthy catfood.',
            'user_id' => 2,
            'category_id' => 13, // Assuming '10' is the ID for other equipment for sale
            
            'price' => '32450',
            'image' => 'pet_images/wiskas.jpg',
            'stock' => 100,
        ]);
        Item::create([
            'name' => 'Cat Cage',
            'description' => 'Brand new Cat cage for medium kitten.',
            'user_id' => 2,
            'category_id' => 13, // Assuming '10' is the ID for other equipment for sale
      
            'price' => '200000',
            'image' => 'pet_images/kandang1.jpg',
            'stock' => 100,
        ]);
        Item::create([
            'name' => 'Bird Cage',
            'description' => 'Brand new bird cage for murai only.',
            'user_id' => 2,
            'category_id' => 13, // Assuming '10' is the ID for other equipment for sale
           
            'price' => '160000',
            'image' => 'pet_images/kandang2.jpg',
            'stock' => 100,
        ]);
        Item::create([
            'name' => 'Bolt dogfood',
            'description' => 'the best dogfood.',
            'user_id' => 2,
            'category_id' => 13, // Assuming '10' is the ID for other equipment for sale
        
            'price' => '26750',
            'image' => 'pet_images/bolt.jpg',
            'stock' => 100,
        ]);
        Item::create([
            'name' => 'Dog food bowl',
            'description' => 'A place to place your dogfood and water for your dog.',
            'user_id' => 2,
            'category_id' => 13, // Assuming '10' is the ID for other equipment for sale
            
            'price' => '40000',
            'image' => 'pet_images/mangkok.jpg',
            'stock' => 100,
        ]);
        
    }
}
