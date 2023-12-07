import { Component } from '@angular/core';
import {StockComponent} from "../../stock.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Category} from "../../../category/models/Category";
import {StockRequestUpdate} from "../../../stock/models/stockRequestUpdate";
import {StockService} from "../../../stock/services/stock.service";
import {CategoryService} from "../../../category/services/category.service";
import {ErrorsService} from "../../../errors/services/errors.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SuccessMessageService} from "../../../success-messages/services/success-message.service";
import {Equipment} from "../../../equipment/models/equipment";
import {EquipmentService} from "../../../equipment/services/equipment.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Stock} from "../../models/stock";


@Component({
  selector: 'app-stock-update',
  standalone: true,
    imports: [
        StockComponent,
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './stock-update.component.html',
  styleUrl: './stock-update.component.css'
})
export class StockUpdateComponent {

  public stockId: number = 1;

  public equipment: Equipment | undefined;

  public stock: StockRequestUpdate = {
    registrationNumber : '',
    added_by_id:1,
    equipment_id:undefined
  }

  constructor(private stockService: StockService,private equipmentService : EquipmentService, private categoryService: CategoryService, private errorsService: ErrorsService, private router: Router ,private activatedRoute: ActivatedRoute , private successMessagesService: SuccessMessageService) {
  }


  async ngOnInit() {
    this.getIdOfStockFromUrl();
    this.getStock(this.stockId);
  }

  getEquipment(){

    this.equipmentService.getEquipment(this.stock.equipment_id).subscribe(
      (equipment) => this.equipment = equipment ,
      (HttpErrorResponse) => this.errorsService.updateError(HttpErrorResponse.error)
    )

  }

  getIdOfStockFromUrl(): void {

    this.activatedRoute.params.subscribe(params => {
      this.stockId = params['id'];
    });

  }

  getStock(id : number): void {
    this.stockService.getStock(id).subscribe(
      (stock : Stock) => {
        console.log(stock);
        this.stock.registrationNumber = stock.registrationNumber;
        this.stock.equipment_id = stock.equipment.id;
        this.getEquipment();
      }
    )

  }

  updateStock(): void {
    this.stockService.updateStock(this.stock , this.stockId).subscribe(
      (stock) => {
        this.successMessagesService.updateSuccessMessage(['Stock updated successfully']);
        this.router.navigate(['/stocks']);
      }
      ,
      (httpErrorResponse) => this.errorsService.updateError(httpErrorResponse.error)
    )
  }
}
