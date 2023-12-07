import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {
  constructor(private router: Router) {
  }

  viewList(): void {
    this.router.navigate(['/stocks']);
  }

  addStock(): void {
    this.router.navigate(['/stocks/add']);
  }
}
