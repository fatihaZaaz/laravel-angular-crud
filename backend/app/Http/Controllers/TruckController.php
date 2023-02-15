<?php

namespace App\Http\Controllers;

use App\Models\Truck;
use Illuminate\Http\Request;

class TruckController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
			$trucks = Truck::all();
			return $trucks;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $truck = new Truck();
			$truck->driver = $request->driver;
			$truck->name = $request->name;
			$truck->save();
      return $truck;
    }

    /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
    public function show(Request $request)
    {
      $truck = Truck::findOrFail($request->id);
			return $truck;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Truck  $truck
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
      $truck = Truck::findOrFail($request->id);
			$truck->driver = $request->driver;
			$truck->save();
			return $truck;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Truck  $truck
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
      $truck = Truck::destroy($request->id);
    	return $truck;
    }
}
