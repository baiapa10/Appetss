<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create([
            'id' => 1,
            'name' => 'Dog',
            'type' => 'Sell',
        ]);

        Category::create([
            'id' => 2,
            'name' => 'Dog',
            'type' => 'adopt',
        ]);

        Category::create([
            'id' => 3,
            'name' => 'Cat',
            'type' => 'Sell',
        ]);

        Category::create([
            'id' => 4,
            'name' => 'Cat',
            'type' => 'adopt',
        ]);

        Category::create([
            'id' => 5,
            'name' => 'Fish',
            'type' => 'Sell',
        ]);

        Category::create([
            'id' => 6,
            'name' => 'Fish',
            'type' => 'adopt',
        ]);

        Category::create([
            'id' => 7,
            'name' => 'Bird',
            'type' => 'Sell',
        ]);

        Category::create([
            'id' => 8,
            'name' => 'Bird',
            'type' => 'adopt',
        ]);

        Category::create([
            'id' => 9,
            'name' => 'Other',
            'type' => 'Sell',
        ]);

        Category::create([
            'id' => 10,
            'name' => 'Other',
            'type' => 'adopt',
        ]);

        Category::create([
            'id' => 11,
            'name' => 'equipment',
            'type' => 'sell',
        ]);
        
      
        
    }
}