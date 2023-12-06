import { Component } from '@angular/core';
import {EquipmentService} from "./services/equipment.service";
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Equipment} from "./models/equipment";
import {EquipmentRequestAdd} from "./models/equipmentRequestAdd";
import {CategoryService} from "../category/services/category.service";
import {Category} from "../category/models/Category";
import {ErrorsService} from "../errors/services/errors.service";

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipment-list.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {

  public equipments: Equipment[] | undefined;

  public categories: Category[] | undefined;

  public showEquipmentList = false;

  public newEquipment: EquipmentRequestAdd = {
    name: '',
    category_Id: 1,
    price_per_day: 100,
    added_by_id: 1 // i should not do this, instead i should use the tocken in the backend
  }

  constructor(private equipmentService: EquipmentService , private categoryService: CategoryService , private errorsService: ErrorsService) { }

  ngOnInit() {
    this.getEquipments();
    this.getCategories();
  }

  getCategories(): void {
  this.categoryService.getCategories().subscribe(
    categories => (this.categories = categories)
  )
  }

  getEquipments(): void {
    this.equipmentService.getEquipments()
      .subscribe(equipments => (this.equipments = equipments.reverse()));
  }

  addEquipment(): void {
    // check if there any errors , if yes print in the console
    this.equipmentService.addEquipment(this.newEquipment)
      .subscribe(
        (equipment) => {

        this.equipments?.unshift(equipment);
        this.newEquipment = {
          name: '',
          category_Id: undefined,
          price_per_day: 100,
          added_by_id: 1
        };
      },
        (HttpErrorResponse) => {
          this.errorsService.updateError(HttpErrorResponse.error);
        }

      );
  }

  toggleVisibility() {
    this.showEquipmentList = !this.showEquipmentList;
  }



}
