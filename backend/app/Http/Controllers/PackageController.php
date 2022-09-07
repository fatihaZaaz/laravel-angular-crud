<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Models\StorageLocation;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $packages = Package::with('storage_locations')->get();
			return $packages;

    }

    /**
     * Display a listing of packages not assigned in a shipments.
     *
     * @return \Illuminate\Http\Response
     */
    public function packagesNotAssigned()
    {
      $packages = Package::join('shipments', 'packages.id', '=', 'shipments.package_id', 'left outer')
      ->whereNull('shipments.package_id')
      ->select('packages.id as package_id', 'packages.name as package_name')
      ->get();
			return $packages;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $package = new Package();
			$package->name = $request->name;
			$package->client = $request->client;
			$package->storage_location_id = $request->storage_location_id;
			$package->status = 'Packed';
			$package->shipping_address = $request->shipping_address;
			$package->save();

			$location = StorageLocation::findOrFail($request->storage_location_id);
			$location->assigned = 1;
			$location->save();
      return $package;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
      $package = Package::with('storage_locations')->findOrFail($request->id);
			return $package;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
      $package = Package::findOrFail($request->id);
			$package->name = $request->name;
			$package->client = $request->client;
			$package->storage_location_id = $request->storage_location_id;
			$package->status = $request->status;
			$package->shipping_address = $request->shipping_address;
			$package->save();

      $location = StorageLocation::findOrFail($request->storage_location_id);
			if($package->status === 'In Transit' || $package->status === 'Delivered'){	
				$location->assigned = 0;
			}else{
        $location->assigned = 1;
      }

      $location->save();

			return $package;
	
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
      $package = Package::destroy($request->id);
    	return $package;
    }
}
