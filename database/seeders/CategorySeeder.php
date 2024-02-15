<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('categories')->create([
            'id'=> 1,
            'name' => 'Dog',
            'type' => 'Sell',
        ]);
        DB::table('categories')->create([
            'id'=> 2,
            'name' => 'Dog',
            'type' => 'adopt',
        ]);
        DB::table('categories')->create([
            'id'=> 3,
            'name' => 'Cat',
            'type' => 'Sell',
        ]);
        DB::table('categories')->create([
            'id'=> 4,
            'name' => 'Cat',
            'type' => 'adopt',
        ]);
        DB::table('categories')->create([
            'id'=> 5,
            'name' => 'Fish',
            'type' => 'Sell',
        ]);
        DB::table('categories')->create([
            'id'=> 6,
            'name' => 'Fish',
            'type' => 'adopt',
        ]);
        DB::table('categories')->create([
            'id'=> 7,
            'name' => 'Bird',
            'type' => 'Sell',
        ]);
        DB::table('categories')->create([
            'id'=> 8,
            'name' => 'Bird',
            'type' => 'adopt',
        ]);
        DB::table('categories')->create([
            'id'=> 9,
            'name' => 'Other',
            'type' => 'Sell',
        ]);
        DB::table('categories')->create([
            'id'=> 10,
            'name' => 'Other',
            'type' => 'adopt',
        ]);
    }
}
