import { Component, HostBinding, OnInit } from '@angular/core';
import { Truck } from 'src/app/models/Truck';
import { ActivatedRoute, Router } from '@angular/router';

import { TrucksService } from '../../services/trucks.service';

@Component({
  selector: 'app-trucks-form',
  templateUrl: './trucks-form.component.html',
  styleUrls: ['./trucks-form.component.css']
})
export class TrucksFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  truck: Truck = {
    id: 0,
    driver: '',
  }

  edit: boolean = false;

  constructor(
    private trucksService: TrucksService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    
    if(params['id']){
      this.trucksService.show(params['id']).subscribe(
        {
          next: (res) => {
            this.truck = res;
            this.edit = true
          },
          error: (err) => {
            console.error(err);
          }
        }
      )
    }

  }

  saveNewTruck(){
    delete this.truck.id;
    this.trucksService.store(this.truck).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.router.navigate(['/trucks']);
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

  updateTruck(){
    this.trucksService.update(this.truck.id!, this.truck).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.router.navigate(['/trucks']);
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

}
