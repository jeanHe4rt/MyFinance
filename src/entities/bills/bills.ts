import { Base } from "../base/base";
import { BillType } from "../base/enums/billType.enum";
import { CategoryType } from "../base/enums/categoryType.enum";
import { BillCategory } from "../billCategory/billCategory";
import { PaymentMethod } from "../paymentMethod/paymentMethod";

export class Bills extends Base {
  name: string;
  description: string;
  value: number;
  code: number;
  datePaid: Date;
  dateExpired: Date;
  isAdvanced: boolean;
  isPaid: boolean;
  category: BillCategory;
  paymentMethod: PaymentMethod;
  TypeBill: BillType;
  parcela: { currentInstallment: number, quantityInstallment: number}
}