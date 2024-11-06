
import { ProductCreateDto } from "../products/dto/product.create.dto";
import { quickSortByKey } from "./quickSort";
import { ProductDto } from "../products/dto/product.dto";
import { products } from "./dataFake";

export default class Service {
  // constructor(private model: ModelStatic<T>) {}

  public create(data: ProductCreateDto) {
    return products.push(data);
  }

  public findOne(id: number) {
    return products.find((product) => product.id === id);
  }

  public findAll() {
    return products
  }

  public update(id: number, data: ProductCreateDto) {
    const record = products.find(product => product.id === id);
    if (!record) throw new Error('Product not found')

    return Object.assign(record, data)
  }

  public delete(id: number): boolean {
    const record = products.find(product => {product.id === id, product.deleted_at = null});
  
    if (!record) throw new Error('Product not found')

    record.isActive = false
    record.deleted_at = new Date()
    return true
  }
}
