<?php

namespace App\Http\Controllers;

use App\Models\StorageLocation;
use Illuminate\Http\Request;

class StorageLocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
			$locations = StorageLocation::all();
			return $locations;
    }

    /**
     * Display a listing of storage location available to assign to a package.
     *
     * @return \Illuminate\Http\Response
     */
    public function storageLocationAvailable()
    {
			$locations = StorageLocation::where('assigned', false)->get();
			return $locations;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $location = new StorageLocation();
			$location->location = $request->location;
			$location->assigned = false;
			$location->save();
      return $location;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
      $location = StorageLocation::findOrFail($request->id);
			return $location;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StorageLocation  $storageLocation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
      $location = StorageLocation::findOrFail($request->id);
			$location->location = $request->location;
			$location->assigned = $request->assigned;
			$location->save();
			return $location;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StorageLocation  $storageLocation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
      $location = StorageLocation::destroy($request->id);
    	return $location;
    }
}
