import { Component } from '@angular/core';

import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {StockComponent} from "../../stock.component";
import {Category} from "../../../category/models/Category";
import {StockRequestAdd} from "../../models/stockRequestAdd";
import {StockService} from "../../services/stock.service";
import {CategoryService} from "../../../category/services/category.service";
import {ErrorsService} from "../../../errors/services/errors.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SuccessMessageService} from "../../../success-messages/services/success-message.service";
import {Equipment} from "../../../equipment/models/equipment";
import {EquipmentService} from "../../../equipment/services/equipment.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-stock-add',
  standalone: true,
    imports: [
        StockComponent,
        FormsModule,
        NgForOf,
        StockComponent
    ],
  templateUrl: './stock-add.component.html',
  styleUrl: './stock-add.component.css'
})
export class StockAddComponent {

    public categories: Category[] | undefined;

    public equipment: Equipment | undefined;

    public newStock: StockRequestAdd = {
        registrationNumber : '',
        added_by_id : 1,
        equipment_id : undefined
    }

    constructor(private stockService: StockService , private categoryService: CategoryService , private errorsService: ErrorsService ,private router: Router , private successMessagesService: SuccessMessageService , private activatedRoute : ActivatedRoute , private equipmentService: EquipmentService) { }

    ngOnInit() {
        this.getCategories();
        this.getIdEquipmentFromUrl();
        this.getEquipment();
    }

    getIdEquipmentFromUrl(){
      this.activatedRoute.params.subscribe(params => {
        this.newStock.equipment_id = params['id'];
      });
    }

    getEquipment(){
      this.equipmentService.getEquipment(this.newStock.equipment_id).subscribe(
        (equipment) => {
          this.equipment = equipment;
        },
        (HttpErrorResponse)=>{
          this.router.navigate(['/stocks'])
          this.errorsService.updateError(HttpErrorResponse.error);
      }
      )
    }

    getCategories(): void {
        this.categoryService.getCategories().subscribe(
            categories => (this.categories = categories)
        )
    }

    addStock(): void {

        this.stockService.addStock(this.newStock)
            .subscribe(
                (stock) => {
                    this.newStock.registrationNumber = '';
                    this.successMessagesService.updateSuccessMessage(['Stock added successfully.']);
                },
                (HttpErrorResponse) => {
                    this.errorsService.updateError(HttpErrorResponse.error);
                }

            );
    }
}
