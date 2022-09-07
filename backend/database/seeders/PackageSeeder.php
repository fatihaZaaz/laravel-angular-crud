<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Package;

class PackageSeeder extends Seeder
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
				Package::create([
					'name' => $faker->sentence,
					'client' => $faker->name,
					'storage_location_id' => $faker->unique()->numberBetween(1,30),
					'status' => 'Packed',
					'shipping_address' => $faker->address,
				]);
			}
    }
}