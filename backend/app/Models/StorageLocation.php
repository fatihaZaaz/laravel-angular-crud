<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StorageLocation extends Model
{
    use HasFactory;
    protected $fillable = ['location', 'assigned'];

  public function packages()
  {
		// a storage location may have many packages
    return $this->hasMany(Package::class, 'id');
  }
}
