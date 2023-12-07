import { Routes } from '@angular/router';
import {EquipmentListComponent} from "./equipment/components/equipment-list/equipment-list.component";
import {EquipmentAddComponent} from "./equipment/components/equipment-add/equipment-add.component";
import {EquipmentUpdateComponent} from "./equipment/components/equipment-update/equipment-update.component";
import {StockListComponent} from "./stock/components/stock-list/stock-list.component";
import {StockAddComponent} from "./stock/components/stock-add/stock-add.component";
import {StockUpdateComponent} from "./stock/components/stock-update/stock-update.component";

export const routes: Routes = [

    { path: 'equipments', component: EquipmentListComponent },
    { path: 'equipments/add', component: EquipmentAddComponent },
    { path: 'equipments/update/:id', component: EquipmentUpdateComponent },
    { path: 'stocks', component: StockListComponent},
    { path: 'stocks/equipment/:id/add', component: StockAddComponent},
    { path: 'stocks/update/:id', component: StockUpdateComponent}

];
