import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {

  constructor(private router: Router) {
  }

  viewList(): void {
    this.router.navigate(['/equipments']);
  }

  addEquipment(): void {
    this.router.navigate(['/equipments/add']);
  }

}
