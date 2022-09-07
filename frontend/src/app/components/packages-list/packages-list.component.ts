import { Component,HostBinding, OnInit } from '@angular/core';
import { PackagesService } from '../../services/packages.service';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  packages: any = [];

  constructor(private packagesService: PackagesService) { }

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages(){
    this.packagesService.index().subscribe(
      {
        next: (res) => {
          this.packages = res;
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

  deletePackage(id: string){
    this.packagesService.destroy(id).subscribe(
      {
        next: (res) => {
          this.getPackages();
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

}
