<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      
      User::create([
            'name' => 'Kenneth Calvin',
            'email' => 'ken@gmail.com',
            'password' => '11223344',
  
            'phone_number' => '085108518529',
 
        ]);
        
        User::create([
            'name' => 'seller lucu',
            'email' => 'seller@gmail.com',
            'password' => '11223344',
            'phone_number' => '0851023132',
      
        ]);
        User::create([
          'name' => 'Bryan Anderson',
          'email' => 'user1@gmail.com',
          'password' => 'password1',
          'phone_number' => '0851000001',
      ]);
  
      User::create([
          'name' => 'Mohammad Farhan',
          'email' => 'user2@gmail.com',
          'password' => 'password2',
          'phone_number' => '0851000002',
      ]);
  
      User::create([
          'name' => 'Benyamin Laksana',
          'email' => 'user3@gmail.com',
          'password' => 'password3',
          'phone_number' => '0851000003',
      ]);
  
      User::create([
          'name' => 'Sutrisno Wibowo',
          'email' => 'user4@gmail.com',
          'password' => 'password4',
          'phone_number' => '0851000004',
      ]);
  
      User::create([
          'name' => 'Jerry Yan',
          'email' => 'user5@gmail.com',
          'password' => 'password5',
          'phone_number' => '0851000005',
      ]);
        //
    }
}
