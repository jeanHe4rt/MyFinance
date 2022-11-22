import { Base } from "../base/base";
import { CategoryType } from "../base/enums/categoryType.enum";

export class BillCategory extends Base { 
  name: string; 
  type: CategoryType;
}