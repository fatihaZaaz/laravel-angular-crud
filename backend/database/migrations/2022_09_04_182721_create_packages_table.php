<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packages', function (Blueprint $table) {
          $table->id();
					$table->string('name');
					$table->string('client');
					$table->enum('status', ['Packed', 'In Transit', 'Delivered']);
					$table->string('shipping_address');
					$table->foreignId('storage_location_id')
					->nullable()
					->constrained('storage_locations')
					->cascadeOnUpdate()
					->cascadeOnDelete();
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('packages');
    }
};
