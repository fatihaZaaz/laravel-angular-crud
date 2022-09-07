<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipment extends Model
{
	use HasFactory;
	protected $fillable = ['package_id', 'truck_id'];

	public function package()
  {
		// a Shipment may have many packages
    return $this->belongsTo(Package::class, 'package_id');
  }

	public function trucks()
  {
		// a Shipment may have many trucks
    return $this->belongsTo(Truck::class, 'truck_id');
  }
}
