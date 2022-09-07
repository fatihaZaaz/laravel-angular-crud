import { Component,HostBinding, OnInit } from '@angular/core';
import { Package } from 'src/app/models/Package';
import { ActivatedRoute, Router } from '@angular/router';

import { PackagesService } from '../../services/packages.service';
import { StorageLocationsService } from '../../services/storage-locations.service'

@Component({
  selector: 'app-packages-form',
  templateUrl: './packages-form.component.html',
  styleUrls: ['./packages-form.component.css']
})
export class PackagesFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  package: Package = {
    'id': 0	,
    'name': '',	
    'client': '',	
    'status': '',	
    'shipping_address': '',	
    'storage_location_id': 0,
  }

  storage_locations: any = [];

  edit: boolean = false;

  constructor(
    private packagesService: PackagesService,
    private storageLocationsService: StorageLocationsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if(params['id']){
      this.packagesService.show(params['id']).subscribe(
        {
          next: (res) => {
            this.package = res;
            this.edit = true
          },
          error: (err) => {
            console.error(err);
          }
        }
      )
    }

    this.storageLocationsService.storageLocationAvailable().subscribe(
      {
        next: (res) => {
          this.storage_locations = res;
        },
        error: (err) => {
          console.error(err);
        }
      }
    )

  }

  saveNewPackage(){
    delete this.package.id;
    this.packagesService.store(this.package).subscribe(
      {
        next: (res) => {
          this.router.navigate(['/packages']);
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

  updatePackage(){
    this.packagesService.update(this.package.id!, this.package).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.router.navigate(['/packages']);
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

}
