import { Component } from '@angular/core';
import {Equipment} from "../../models/equipment";
import {EquipmentService} from "../../services/equipment.service";

import {ErrorsService} from "../../../errors/services/errors.service";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {EquipmentDeleteComponent} from "../equipment-delete/equipment-delete.component";
import {EquipmentComponent} from "../../equipment.component";

@Component({
  selector: 'app-equipment-list',
  standalone: true,
  imports: [CommonModule, RouterLink, EquipmentDeleteComponent, EquipmentComponent],
  templateUrl: './equipment-list.component.html',
  styleUrl: './equipment-list.component.css'
})
export class EquipmentListComponent {

  public equipments: Equipment[] | undefined;

  public showEquipmentList = true;

  constructor(private equipmentService: EquipmentService , private errorsService: ErrorsService ,private router: Router) { }

  ngOnInit() {
    this.getEquipments();
  }
  getEquipments(): void {
    this.equipmentService.getEquipments()
        .subscribe(equipments => (this.equipments = equipments.reverse()));
  }

  addStockOfEquipment(equipmentId :number):void{

  }

  reload(equipment: Equipment): void {
    // remove the equipment from the list
    this.equipments = this.equipments?.filter(e => e.id !== equipment.id);
  }

  toggleVisibility() {
    this.showEquipmentList = !this.showEquipmentList;
  }
}
