import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ErrorsService} from "./services/errors.service";

@Component({
  selector: 'app-errors',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './errors.component.html',
  styleUrl: './errors.component.css'
})
export class ErrorsComponent {

    public errorMessages: string[] | null = null;

    constructor(private errorsService: ErrorsService) {

    }

    ngOnInit() {
        this.errorsService.errorMessages$.subscribe((errorMessages) => {
            this.errorMessages = errorMessages;
        })
    }

    closeError() {
        this.errorMessages = null;
    }
}
