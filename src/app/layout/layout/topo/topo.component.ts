import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {

  constructor(private router: Router) { }

  navigate(route: string) {
    this.router.navigate( [route] );
  }

  ngOnInit() {
  }

}
