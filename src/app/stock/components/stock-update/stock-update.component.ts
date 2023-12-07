import { Component } from '@angular/core';
import {StockComponent} from "../../stock.component";

@Component({
  selector: 'app-stock-update',
  standalone: true,
    imports: [
        StockComponent
    ],
  templateUrl: './stock-update.component.html',
  styleUrl: './stock-update.component.css'
})
export class StockUpdateComponent {

}
