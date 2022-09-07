import { Component,HostBinding, OnInit } from '@angular/core';
import { ShipmentsService } from '../../services/shipments.service';

@Component({
  selector: 'app-shipments-list',
  templateUrl: './shipments-list.component.html',
  styleUrls: ['./shipments-list.component.css']
})
export class ShipmentsListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  shipments: any = [];

  constructor(private shipmentsService: ShipmentsService) { }

  ngOnInit(): void {
    this.getShipments();
  }

  getShipments(){
    this.shipmentsService.index().subscribe(
      {
        next: (res) => {
          this.shipments = res;
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

  deleteShipment(id: string){
    this.shipmentsService.destroy(id).subscribe(
      {
        next: (res) => {
          this.getShipments();
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

}
