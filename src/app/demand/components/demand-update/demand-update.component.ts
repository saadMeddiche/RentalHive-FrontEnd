import { Component } from '@angular/core';
import {DemandComponent} from "../../demand.component";

@Component({
  selector: 'app-demand-update',
  standalone: true,
    imports: [
        DemandComponent
    ],
  templateUrl: './demand-update.component.html',
  styleUrl: './demand-update.component.css'
})
export class DemandUpdateComponent {

}
