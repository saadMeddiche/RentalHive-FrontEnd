import {Component, Input} from '@angular/core';
import {EquipmentService} from "../../services/equipment.service";
import {SuccessMessageService} from "../../../success-messages/services/success-message.service";
import {ErrorsService} from "../../../errors/services/errors.service";

@Component({
  selector: 'app-equipment-delete',
  standalone: true,
  imports: [],
  templateUrl: './equipment-delete.component.html',
  styleUrl: './equipment-delete.component.css'
})
export class EquipmentDeleteComponent {

  @Input() equipmentId :number | undefined;

  constructor(private equipmentService: EquipmentService , private successMessagesService: SuccessMessageService , private errorsService: ErrorsService) {
  }
    deleteEquipment(equipmentId: number | undefined): void {

        if(equipmentId == undefined){
          this.errorsService.updateError(['The Id Of Equipment can not be undefined']);
          return;
        }

        this.equipmentService.deleteEquipment(equipmentId).subscribe(
            () => this.successMessagesService.updateSuccessMessage(['Equipment deleted successfully.'])
            ,
      (httpErrorResponse: any) => this.errorsService.updateError(httpErrorResponse.error)

        );
    }
}
