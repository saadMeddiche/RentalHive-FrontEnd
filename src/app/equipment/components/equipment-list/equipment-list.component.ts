import { Component } from '@angular/core';
import {Equipment} from "../../models/equipment";
import {EquipmentService} from "../../services/equipment.service";

import {ErrorsService} from "../../../errors/services/errors.service";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-equipment-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
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

  toggleVisibility() {
    this.showEquipmentList = !this.showEquipmentList;
  }
}
