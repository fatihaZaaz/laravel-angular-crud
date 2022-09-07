import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrucksListComponent } from './components/trucks-list/trucks-list.component';
import { TrucksFormComponent } from './components/trucks-form/trucks-form.component';
import { StorageLocationsListComponent } from './components/storage-locations-list/storage-locations-list.component';
import { StorageLocationsFormComponent } from './components/storage-locations-form/storage-locations-form.component';
import { PackagesListComponent } from './components/packages-list/packages-list.component';
import { PackagesFormComponent } from './components/packages-form/packages-form.component';
import { ShipmentsListComponent } from './components/shipments-list/shipments-list.component';
import { ShipmentsFormComponent } from './components/shipments-form/shipments-form.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/packages',
    pathMatch: 'full'
  },
  {
    path: 'trucks',
    component: TrucksListComponent
  },
  {
    path: 'trucks/create',
    component: TrucksFormComponent
  },
  {
    path: 'trucks/edit/:id',
    component: TrucksFormComponent
  },
  {
    path: 'storage-locations',
    component: StorageLocationsListComponent
  },
  {
    path: 'storage-locations/create',
    component: StorageLocationsFormComponent
  },
  {
    path: 'storage-locations/edit/:id',
    component: StorageLocationsFormComponent
  },
  {
    path: 'packages',
    component: PackagesListComponent
  },
  {
    path: 'packages/create',
    component: PackagesFormComponent
  },
  {
    path: 'packages/edit/:id',
    component: PackagesFormComponent
  },
  {
    path: 'shipments',
    component: ShipmentsListComponent
  },
  {
    path: 'shipments/create',
    component: ShipmentsFormComponent
  },
  {
    path: 'shipments/edit/:id',
    component: ShipmentsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
