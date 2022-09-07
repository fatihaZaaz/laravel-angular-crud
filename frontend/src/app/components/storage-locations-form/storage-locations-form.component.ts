import { Component,HostBinding, OnInit } from '@angular/core';
import { StorageLocation } from 'src/app/models/StorageLocation';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageLocationsService } from '../../services/storage-locations.service';

@Component({
  selector: 'app-storage-locations-form',
  templateUrl: './storage-locations-form.component.html',
  styleUrls: ['./storage-locations-form.component.css']
})
export class StorageLocationsFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  storageLocation: StorageLocation = {
    id: 0,
    location: '',
    assigned: false,
  }

  edit: boolean = false;

  constructor(
    private storageLocationsService: StorageLocationsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    
    if(params['id']){
      this.storageLocationsService.show(params['id']).subscribe(
        {
          next: (res) => {
            this.storageLocation = res;
            this.edit = true
          },
          error: (err) => {
            console.error(err);
          }
        }
      )
    }

  }

  saveNewStorageLocation(){
    delete this.storageLocation.id;
    this.storageLocationsService.store(this.storageLocation).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.router.navigate(['/storage-locations']);
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

  updateStorageLocation(){
    this.storageLocationsService.update(this.storageLocation.id!, this.storageLocation).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.router.navigate(['/storage-locations']);
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

}
