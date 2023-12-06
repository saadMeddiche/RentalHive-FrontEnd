import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {EquipmentComponent} from "./equipment/equipment.component";
import {ErrorsComponent} from "./errors/errors.component";
import {SuccessMessagesComponent} from "./success-messages/success-messages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EquipmentComponent, ErrorsComponent, SuccessMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rentalhivefront';
}
