<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\StorageLocation;

class StorageLocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
			$faker = \Faker\Factory::create();
			for ($i=0; $i < 30; $i++) { 
				StorageLocation::create([
					'location' => $faker->address,
					'assigned' => false,
				]);
			}
    }
}
