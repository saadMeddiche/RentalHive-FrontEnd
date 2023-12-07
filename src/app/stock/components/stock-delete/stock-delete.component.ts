import {Component, Input} from '@angular/core';
import {StockService} from "../../services/stock.service";
import {SuccessMessageService} from "../../../success-messages/services/success-message.service";
import {ErrorsService} from "../../../errors/services/errors.service";

@Component({
  selector: 'app-stock-delete',
  standalone: true,
  imports: [],
  templateUrl: './stock-delete.component.html',
  styleUrl: './stock-delete.component.css'
})
export class StockDeleteComponent {
  @Input() stockId :number | undefined;

  constructor(private stockService: StockService , private successMessagesService: SuccessMessageService , private errorsService: ErrorsService) {
  }
  deleteStock(stockId: number | undefined): void {

    if(stockId == undefined){
      this.errorsService.updateError(['The Id Of Stock can not be undefined']);
      return;
    }

    this.stockService.deleteStock(stockId).subscribe(
        () => this.successMessagesService.updateSuccessMessage(['Stock deleted successfully.'])
        ,
        (httpErrorResponse: any) => this.errorsService.updateError(httpErrorResponse.error)

    );
  }
}
