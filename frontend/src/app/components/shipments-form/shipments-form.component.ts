import { Component,HostBinding, OnInit } from '@angular/core';
import { Shipment } from 'src/app/models/Shipment';
import { ActivatedRoute, Router } from '@angular/router';

import { ShipmentsService } from '../../services/shipments.service';
import { PackagesService } from '../../services/packages.service';
import { TrucksService } from '../../services/trucks.service';

@Component({
  selector: 'app-shipments-form',
  templateUrl: './shipments-form.component.html',
  styleUrls: ['./shipments-form.component.css']
})
export class ShipmentsFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  shipment: Shipment = {
    'id': 0	,
    'package_id': 0,	
    'truck_id': 0,	
  }

  packages_not_assigned: any = [];
  trucks: any = [];

  edit: boolean = false;

  constructor(
    private shipmentsService: ShipmentsService,
    private packagesService: PackagesService,
    private trucksService: TrucksService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if(params['id']){
      this.shipmentsService.show(params['id']).subscribe(
        {
          next: (res) => {
            this.shipment = res;
            this.edit = true
          },
          error: (err) => {
            console.error(err);
          }
        }
      )
    }

    this.packagesService.packagesNotAssigned().subscribe(
      {
        next: (res) => {
          this.packages_not_assigned = res;
        },
        error: (err) => {
          console.error(err);
        }
      }
    )

    this.trucksService.index().subscribe(
      {
        next: (res) => {
          this.trucks = res;
        },
        error: (err) => {
          console.error(err);
        }
      }
    )

  }

  saveNewShipment(){
    delete this.shipment.id;
    this.shipmentsService.store(this.shipment).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.router.navigate(['/shipments']);
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

  updateShipment(){
    this.shipmentsService.update(this.shipment.id!, this.shipment).subscribe(
      {
        next: (res) => {
          this.router.navigate(['/shipments']);
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

}
