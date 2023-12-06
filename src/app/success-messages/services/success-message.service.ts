import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SuccessMessageService {

  private successMessagesSubject = new BehaviorSubject<string[]>([]);
  public successMessages$ = this.successMessagesSubject.asObservable();

  updateSuccessMessage(successMessages: string[]) {
    this.successMessagesSubject.next(successMessages);
  }
}
