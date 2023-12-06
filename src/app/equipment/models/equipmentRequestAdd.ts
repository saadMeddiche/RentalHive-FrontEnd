export interface EquipmentRequestAdd{
  name : string;
  price_per_day : number;
  category_Id :number | undefined;
  added_by_id : number;
}
