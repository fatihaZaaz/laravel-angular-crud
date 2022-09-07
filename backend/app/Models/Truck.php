<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Truck extends Model
{
    use HasFactory;
    protected $fillable = ['driver'];

    public function shipment(){
      // a truck belongs to one Shipment
      return $this->belongsTo(Shipment::class, 'truck_id');
    }
}