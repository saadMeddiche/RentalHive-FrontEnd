import { Component } from '@angular/core';
import {DemandComponent} from "../../demand.component";

@Component({
  selector: 'app-demand-list',
  standalone: true,
    imports: [
        DemandComponent
    ],
  templateUrl: './demand-list.component.html',
  styleUrl: './demand-list.component.css'
})
export class DemandListComponent {

}
