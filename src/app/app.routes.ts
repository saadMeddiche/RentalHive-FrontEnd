import { Routes } from '@angular/router';
import {EquipmentListComponent} from "./equipment/components/equipment-list/equipment-list.component";
import {EquipmentAddComponent} from "./equipment/components/equipment-add/equipment-add.component";

export const routes: Routes = [

    { path: 'equipments', component: EquipmentListComponent },
    { path: 'equipments/add', component: EquipmentAddComponent },
    // { path: '', redirectTo: '/equipments', pathMatch: 'full' },
];
