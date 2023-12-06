import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  private errorMessagesSubject = new BehaviorSubject<string[]>([]);
  public errorMessages$ = this.errorMessagesSubject.asObservable();

  updateError(error: string[]) {
    this.errorMessagesSubject.next(error);
  }
}
