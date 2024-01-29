import { Component } from '@angular/core';
import {DemandComponent} from "../../demand.component";
import {FormsModule} from "@angular/forms";
import {DemandRequestAdd} from "../../models/DemandRequestAdd";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {EquipmentDeleteComponent} from "../../../equipment/components/equipment-delete/equipment-delete.component";
import {RouterLink} from "@angular/router";
import {Equipment} from "../../../equipment/models/equipment";
import {StockService} from "../../../stock/services/stock.service";
import {EquipmentService} from "../../../equipment/services/equipment.service";

import {async, forkJoin, Observable} from "rxjs";

@Component({
  selector: 'app-demand-add',
  standalone: true,
  imports: [
    DemandComponent,
    FormsModule,
    CurrencyPipe,
    EquipmentDeleteComponent,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './demand-add.component.html',
  styleUrl: './demand-add.component.css'
})
export class DemandAddComponent {

  public demand: DemandRequestAdd = {
    description: '',
    date_reservation: '',
    date_expiration: ''
  };


  public equipmentWithAvailableCount : { availableCount:number; equipment: Equipment }[] = [];

  public lookingFor: string = '';

  constructor(private stockService: StockService ,private equipmentService: EquipmentService) {
  }


  checkAvailability() {
    this.equipmentService.getEquipments().subscribe(

      (equipment) => {

        const observables = equipment.map((equipment) => {
          return this.stockService.getCountOfAvailableStocks(equipment.id, this.demand);
        });


        forkJoin(observables).subscribe((counts: number[]) => {


          this.equipmentWithAvailableCount = equipment.map((equipment, index) => {
            return {
              equipment: equipment,
              availableCount: counts[index]
            };
          });
        });
      }
    );
  }

  addDemand(){

  }


}


