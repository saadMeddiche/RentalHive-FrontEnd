import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {StockComponent} from "../../stock.component";
import {StockDeleteComponent} from "../stock-delete/stock-delete.component";
import {Stock} from "../../models/stock";
import {StockService} from "../../services/stock.service";
import {ErrorsService} from "../../../errors/services/errors.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-stock-list',
  standalone: true,
    imports: [
        CurrencyPipe,
        StockComponent,
        StockDeleteComponent,
        NgForOf,
        NgIf,
        RouterLink
    ],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.css'
})
export class StockListComponent {
    public stocks: Stock[] | undefined;

    public showStockList = true;

    constructor(private stockService: StockService , private errorsService: ErrorsService ,private router: Router) { }

    ngOnInit() {
        this.getStocks();
    }
    getStocks(): void {
        this.stockService.getStocks()
            .subscribe(stocks => (this.stocks = stocks.reverse()));
    }

    reload(stock: Stock): void {
        // remove the stock from the list
        this.stocks = this.stocks?.filter(e => e.id !== stock.id);
    }

    toggleVisibility() {
        this.showStockList = !this.showStockList;
    }
}
