import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {

    if (this.route.snapshot.children[0] == undefined) {
      this.activeLink = ''
    }
    else {
      this.activeLink = this.route.snapshot.children[0].url[0].path
    }
  }

  links = [
    { path: 'owners', tabName: 'Owners' },
    { path: 'cars', tabName: 'Cars' },
    { path: 'owner-cars', tabName: 'Owner cars' }];

  activeLink = ''
}
