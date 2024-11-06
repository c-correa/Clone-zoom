import { EntityRead } from "../../utils/entityRead";

export interface ProductDto extends EntityRead {
  name: string;
  description: string;
  price: number;
  stock: number;
}
