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
            'address' => 'Jl. tanjung duren utara x no 1 jakarta barat',
        ]);
        
        User::create([
            'name' => 'seller lucu',
            'email' => 'seller@gmail.com',
            'password' => '11223344',
            'phone_number' => '0851023132',
            'address' => 'Jl. kebangsaan timur no 1 jakarta timur',
        ]);
        User::create([
          'name' => 'Bryan Anderson',
          'email' => 'user1@gmail.com',
          'password' => 'password1',
          'phone_number' => '0851000001',
          'address' => 'Jl. abcde no 1 jakarta barat',
      ]);
  
      User::create([
          'name' => 'Mohammad Farhan',
          'email' => 'user2@gmail.com',
          'password' => 'password2',
          'phone_number' => '0851000002',
          'address' => 'Jl. mangga besar x no 51 jakarta pusat',
      ]);
  
      User::create([
          'name' => 'Benyamin Laksana',
          'email' => 'user3@gmail.com',
          'password' => 'password3',
          'phone_number' => '0851000003',
            'address' => 'Jl. cikini raya no 20 jakarta pusat',
      ]);
  
      User::create([
          'name' => 'Sutrisno Wibowo',
          'email' => 'user4@gmail.com',
          'password' => 'password4',
          'phone_number' => '0851000004',
            'address' => 'Jl. cipinang jaya no 25 jakarta timur',
      ]);
  
      User::create([
          'name' => 'Jerry Yan',
          'email' => 'user5@gmail.com',
          'password' => 'password5',
          'phone_number' => '0851000005',
            'address' => 'Jl. cempaka putih x no 100 jakarta timur',
      ]);
        //
    }
}
