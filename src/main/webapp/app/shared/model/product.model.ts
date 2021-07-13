import { IProductCategory } from 'app/shared/model/product-category.model';


export interface IProduct {
  id?: number;
  name?: string;
  description?: string | null;
  price?: number;
  imageContentType?: string | null;
  image?: string | null;
  productCategory?: IProductCategory;
}

export const defaultValue: Readonly<IProduct> = {};
