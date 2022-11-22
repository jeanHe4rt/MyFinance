import { Base } from "../base/base";
import { EntryType } from "../base/enums/entryType.enum";
import { PaymentMethod } from "../paymentMethod/paymentMethod";

export class Entries extends Base {
  name: string;
  description: string;
  entryFather: string;
  code: string;
  createAt: Date;
  paymentMethod: PaymentMethod;
  Bank: string;
  BankId: string;
  isPaid: boolean;
  value: number;
  valuePaid: number;
  type: EntryType;
}