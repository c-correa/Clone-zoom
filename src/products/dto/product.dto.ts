export interface ProductDto {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
}
