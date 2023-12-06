import { Component } from '@angular/core';
import {EquipmentRequestUpdate} from "../../models/equipmentRequestUpdate";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Category} from "../../../category/models/Category";
import {CategoryService} from "../../../category/services/category.service";
import {ErrorsService} from "../../../errors/services/errors.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EquipmentService} from "../../services/equipment.service";
import {Equipment} from "../../models/equipment";

@Component({
  selector: 'app-equipment-update',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './equipment-update.component.html',
  styleUrl: './equipment-update.component.css'
})
export class EquipmentUpdateComponent {

  public categories: Category[] | undefined;

  public equipmentId: number = 1;

  public equipment: EquipmentRequestUpdate = {
      name: '',
      category_Id: 1,
      price_per_day: 100
  }

  constructor(private equipmentService: EquipmentService, private categoryService: CategoryService, private errorsService: ErrorsService, private router: Router ,private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {

    this.getIdOfEquipmentFromUrl();

    this.getCategories();

    this.getEquipment(this.equipmentId);
  }

  getIdOfEquipmentFromUrl(): void {

    this.activatedRoute.params.subscribe(params => {
      this.equipmentId = params['id'];
    });

  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(
        categories => (this.categories = categories)
    )
  }

  getEquipment(id : number): void {
    this.equipmentService.getEquipment(id).subscribe(
        (equipment) => {
          this.equipment.name = equipment.name;
          this.equipment.category_Id = equipment.category.id;
          this.equipment.price_per_day = equipment.price_per_day;
        }
    )
  }

  updateEquipment(): void {
      this.equipmentService.updateEquipment(this.equipment , this.equipmentId).subscribe(
          (equipment) => this.router.navigate(['/equipments'])
          ,
          (httpErrorResponse) => this.errorsService.updateError(httpErrorResponse.error)
      )
  }
}
