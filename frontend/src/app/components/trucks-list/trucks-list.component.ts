import { Component, HostBinding, OnInit } from '@angular/core';
import { TrucksService } from '../../services/trucks.service';

@Component({
  selector: 'app-trucks-list',
  templateUrl: './trucks-list.component.html',
  styleUrls: ['./trucks-list.component.css']
})
export class TrucksListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  trucks: any = [];

  constructor(private trucksService: TrucksService) { }

  ngOnInit(): void {
    this.getTrucks()
  }

  getTrucks(){
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

  deleteTruck(id: string){
    this.trucksService.destroy(id).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.getTrucks();
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

}
