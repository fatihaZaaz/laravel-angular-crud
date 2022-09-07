<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
  use HasFactory;
	protected $fillable = ['name', 'client', 'storage_location_id', 'status', 'shipping_address'];

	public function storage_locations(){
    // a package belongs to one storage location
    return $this->belongsTo(StorageLocation::class, 'storage_location_id');
  }

  public function shipment(){
    // a package belongs to one Shipment
    return $this->belongsTo(Shipment::class, 'package_id');
  }

}