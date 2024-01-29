import {StockQuantity} from "./StockQuantity";
import {DemandRequestAdd} from "./DemandRequestAdd";

export interface DemandeStockQuantityRequest{
  DemandRequestAdd: DemandRequestAdd;
  listStockQuantity: StockQuantity[];
}
