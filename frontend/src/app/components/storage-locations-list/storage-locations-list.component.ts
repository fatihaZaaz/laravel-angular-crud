import { Component,HostBinding, OnInit } from '@angular/core';
import { StorageLocationsService } from '../../services/storage-locations.service';

@Component({
  selector: 'app-storage-locations-list',
  templateUrl: './storage-locations-list.component.html',
  styleUrls: ['./storage-locations-list.component.css']
})
export class StorageLocationsListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  storageLocations: any = [];

  constructor(private storageLocationsService: StorageLocationsService) { }

  ngOnInit(): void {
    this.getStorageLocations()
  }

  getStorageLocations(){
    this.storageLocationsService.index().subscribe(
      {
        next: (res) => {
          this.storageLocations = res;
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

  deleteStorageLocations(id: string){
    this.storageLocationsService.destroy(id).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.getStorageLocations();
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

}
