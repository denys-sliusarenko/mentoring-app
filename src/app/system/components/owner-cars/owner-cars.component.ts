import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-cars',
  templateUrl: './owner-cars.component.html',
  styleUrls: ['./owner-cars.component.scss']
})
export class OwnerCarsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    if (this.route.snapshot.children[0] == undefined) {
      this.activeLink = ''
    }
    else {
      this.activeLink = this.route.snapshot.children[0].url[0].path
    }
  }

  links = [
    { path: 'all-owner-cars', tabName: 'All owners and cars' },
    { path: 'combain-owner-cars', tabName: 'Combain owner cars' }];

  activeLink =this.links[0].path 
}
