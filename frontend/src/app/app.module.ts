import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { TrucksService } from './services/trucks.service';
import { StorageLocationsService } from './services/storage-locations.service';
import { PackagesService } from './services/packages.service'
import { ShipmentsService } from './services/shipments.service'

import { TrucksFormComponent } from './components/trucks-form/trucks-form.component';
import { TrucksListComponent } from './components/trucks-list/trucks-list.component';
import { StorageLocationsFormComponent } from './components/storage-locations-form/storage-locations-form.component';
import { StorageLocationsListComponent } from './components/storage-locations-list/storage-locations-list.component';
import { PackagesFormComponent } from './components/packages-form/packages-form.component';
import { PackagesListComponent } from './components/packages-list/packages-list.component';
import { ShipmentsFormComponent } from './components/shipments-form/shipments-form.component';
import { ShipmentsListComponent } from './components/shipments-list/shipments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TrucksFormComponent,
    TrucksListComponent,
    StorageLocationsFormComponent,
    StorageLocationsListComponent,
    PackagesFormComponent,
    PackagesListComponent,
    ShipmentsFormComponent,
    ShipmentsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TrucksService,
    StorageLocationsService,
    PackagesService,
    ShipmentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
