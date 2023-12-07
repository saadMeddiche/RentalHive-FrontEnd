import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Category} from "../../../category/models/Category";
import {EquipmentRequestAdd} from "../../models/equipmentRequestAdd";
import {EquipmentService} from "../../services/equipment.service";
import {CategoryService} from "../../../category/services/category.service";
import {ErrorsService} from "../../../errors/services/errors.service";
import {Router} from "@angular/router";
import {SuccessMessageService} from "../../../success-messages/services/success-message.service";
import {EquipmentComponent} from "../../equipment.component";

@Component({
  selector: 'app-equipment-add',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        ReactiveFormsModule,
        EquipmentComponent
    ],
  templateUrl: './equipment-add.component.html',
  styleUrl: './equipment-add.component.css'
})
export class EquipmentAddComponent {

    public categories: Category[] | undefined;

    public newEquipment: EquipmentRequestAdd = {
        name: '',
        category_Id: 1,
        price_per_day: 100,
        added_by_id: 1 // i should not do this, instead i should use the tocken in the backend
    }

    constructor(private equipmentService: EquipmentService , private categoryService: CategoryService , private errorsService: ErrorsService ,private router: Router , private successMessagesService: SuccessMessageService) { }

    ngOnInit() {
        this.getCategories();
    }

    getCategories(): void {
        this.categoryService.getCategories().subscribe(
            categories => (this.categories = categories)
        )
    }

    addEquipment(): void {

        this.equipmentService.addEquipment(this.newEquipment)
            .subscribe(
                (equipment) => {

                    this.newEquipment = {
                        name: '',
                        category_Id: 1,
                        price_per_day: 100,
                        added_by_id: 1
                    };

                    this.successMessagesService.updateSuccessMessage(['Equipment added successfully.']);
                },
                (HttpErrorResponse) => {
                    this.errorsService.updateError(HttpErrorResponse.error);
                }

            );
    }
}
