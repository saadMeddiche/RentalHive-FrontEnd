import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-demand',
  standalone: true,
  imports: [],
  templateUrl: './demand.component.html',
  styleUrl: './demand.component.css'
})
export class DemandComponent {

  constructor(private router: Router) {
  }

  viewList(): void {
    this.router.navigate(['/demands']);
  }

  addDemand(): void {
    this.router.navigate(['/demands/add']);
  }
}
