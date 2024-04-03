<?php

namespace Database\Seeders;
use App\Models\Pet;
use Illuminate\Support\Facades\Storage;
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
            'category_id' => 3,
            'location' => 'London',
            'price' => '10000',
            'image' => 'pet_images/fluffy.jpg',
            'stock' => 1,

    ]);
    Pet::create([
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
}
}
