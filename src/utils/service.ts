
import { ProductCreateDto } from "../products/dto/product.create.dto";
import { quickSortByKey } from "./quickSort";
import { ProductDto } from "../products/dto/product.dto";
import { products } from "./dataFake";

export default class Service {

  public create(data: ProductCreateDto) {
    return products.push({...data, deleted_at: null, isActive: true, created_at: new Date(), updated_at: new Date()});
  }

  public findOne(id: number) {
    return products.find((product) => product.id === id);
  }

  public findAll() {
    return products.filter(product => product.deleted_at === null)
  }

  public update(id: number, data: ProductCreateDto) {
    const record = products.find(product => product.id === id);
    if (!record) throw new Error('Product not found')

    return Object.assign(record, data)
  }

  public delete(id: number): boolean {
    const record = products.find(product => product.id === id);
    
    if (!record) throw new Error('Product not found')

    record.isActive = false
    record.deleted_at = new Date()
    return true
  }

  public sort(sortKey: keyof ProductDto, order: 'ASC' | 'DESC' = 'ASC'): ProductDto[] {
    const activeProducts = products.filter(product => product.deleted_at === null);

    return quickSortByKey<any>(activeProducts, sortKey, order)
  }
}
