import { EntityRead } from "../../utils/entityRead";
import { ProductDto } from "./product.dto";

export interface ProductReadDto extends ProductDto, EntityRead {}