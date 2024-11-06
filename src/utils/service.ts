
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

  // public async update(where: WhereOptions<T>, data: any) {
  //   return await this.model.update(data, { where });
  // }

  public delete(id: number) {
    const filteredProducts = products.filter((product) => product.id !== id);
    return filteredProducts.pop();
  }
}
