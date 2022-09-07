<?php

namespace App\Http\Controllers;

use App\Models\Shipment;
use App\Models\Package;
use App\Models\StorageLocation;
use Illuminate\Http\Request;

class ShipmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $shipments = Shipment::with('package')->with('trucks')->get();;
			return $shipments;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $shipment = new Shipment();
			$shipment->package_id = $request->package_id;
			$shipment->truck_id = $request->truck_id;
			$shipment->save();

			$package = Package::findOrFail($request->package_id);
			$package->status = 'In Transit';
      $package->save();

			if($package->status === 'In Transit' || $package->status === 'Delivered'){
				$location = StorageLocation::findOrFail($package->storage_location_id);
				$location->assigned = 0;
				$location->save();
        return $shipment;
			}
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
      $shipment = Shipment::with('package')->with('trucks')->findOrFail($request->id);
			return $shipment;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Shipment  $shipment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
      $shipment = Shipment::findOrFail($request->id);
			$shipment->package_id = $request->package_id;
			$shipment->truck_id = $request->truck_id;
			$shipment->save();

			$package = Package::findOrFail($request->package_id);
			$package->status = 'In Transit';

			if($package->status === 'In Transit' || $package->status === 'Delivered'){
				$location = StorageLocation::findOrFail($package->storage_location_id);
				$location->assigned = 0;
				$location->save();
			}

			return $shipment;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Shipment  $shipment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
      $shipment = Shipment::destroy($request->id);
    	return $shipment;
    }
}
