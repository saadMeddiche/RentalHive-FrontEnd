import { Routes } from '@angular/router';
import {EquipmentListComponent} from "./equipment/components/equipment-list/equipment-list.component";
import {EquipmentAddComponent} from "./equipment/components/equipment-add/equipment-add.component";
import {EquipmentUpdateComponent} from "./equipment/components/equipment-update/equipment-update.component";

export const routes: Routes = [

    { path: 'equipments', component: EquipmentListComponent },
    { path: 'equipments/add', component: EquipmentAddComponent },
    { path: 'equipments/update/:id', component: EquipmentUpdateComponent },
    // { path: '', redirectTo: '/equipments', pathMatch: 'full' },
];
