<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TruckController;
use App\Http\Controllers\StorageLocationController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\ShipmentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/* *** Trucks *** */
// create new register
Route::post('/trucks', [TruckController::class, 'store']);
// show all register
Route::get('/trucks', [TruckController::class, 'index']);
// show a register
Route::get('/trucks/{id}', [TruckController::class, 'show']);
// update a register
Route::put('/trucks/{id}', [TruckController::class, 'update']);
// delete a register
Route::delete('/trucks/{id}', [TruckController::class, 'destroy']);
/* ************* */

/* *** Storage Location *** */
// create new register
Route::post('/locations', [StorageLocationController::class, 'store']);
// show all register
Route::get('/locations', [StorageLocationController::class, 'index']);
// show all register assigned is false
Route::get('/locations-available', [StorageLocationController::class, 'storageLocationAvailable']);
// show a register
Route::get('/locations/{id}', [StorageLocationController::class, 'show']);
// update a register
Route::put('/locations/{id}', [StorageLocationController::class, 'update']);
// delete a register
Route::delete('/locations/{id}', [StorageLocationController::class, 'destroy']);
/* ************* */

/* *** Package *** */
// create new register
Route::post('/packages', [PackageController::class, 'store']);
// show all register
Route::get('/packages', [PackageController::class, 'index']);
// show all packages not assigned
Route::get('/packages/not-assigned', [PackageController::class, 'packagesNotAssigned']);
// show a register
Route::get('/packages/{id}', [PackageController::class, 'show']);
// update a register
Route::put('/packages/{id}', [PackageController::class, 'update']);
// delete a register
Route::delete('/packages/{id}', [PackageController::class, 'destroy']);
/* ************* */

/* *** Shipment *** */
// create new register
Route::post('/shipments', [ShipmentController::class, 'store']);
// show all register
Route::get('/shipments', [ShipmentController::class, 'index']);
// show a register
Route::get('/shipments/{id}', [ShipmentController::class, 'show']);
// update a register
Route::put('/shipments/{id}', [ShipmentController::class, 'update']);
// delete a register
Route::delete('/shipments/{id}', [ShipmentController::class, 'destroy']);
/* ************* */