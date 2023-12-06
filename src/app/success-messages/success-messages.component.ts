import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ErrorsService} from "../errors/services/errors.service";
import {SuccessMessageService} from "./services/success-message.service";

@Component({
  selector: 'app-success-messages',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './success-messages.component.html',
  styleUrl: './success-messages.component.css'
})
export class SuccessMessagesComponent {

    public successMessages: string[] | null = null;

    constructor(private successMessagesService: SuccessMessageService) {

    }

    ngOnInit() {
        this.successMessagesService.successMessages$.subscribe((successMessages) => {
            this.successMessages = successMessages;
        })
    }

    closeError() {
        this.successMessages = null;
    }
}
