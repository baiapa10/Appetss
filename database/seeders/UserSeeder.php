<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      
       DB::table('users')->create([
            'name' => 'Kenneth Calvin',
            'email' => 'ken@gmail.com',
            'password' => '11223344',
            'is_seller' => 0,
            'phone_number' => '085108518529',
          'seller_rating' => 0,
           'rating_count' => 0,
        ]);
        
        DB::table('users')->create([
            'name' => 'seller lucu',
            'email' => 'seller@gmail.com',
            'password' => '11223344',
            'is_seller' => 1,
            'phone_number' => '0851023132',
          'seller_rating' => 4,
           'rating_count' => 20,
        ]);
        
        //
    }
}
