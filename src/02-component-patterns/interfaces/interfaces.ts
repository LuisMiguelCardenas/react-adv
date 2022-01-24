import { Props as ProductCardProps, Props } from '../components/ProductCard';
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductButtonsPorps } from "../components/ProductsButtons";


export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}


export interface ProductCardHOCProps {
  ({children, product }: ProductCardProps): JSX.Element
  Title: ( Props: ProductTitleProps) => JSX.Element,
  Image: ( Props: ProductImageProps) => JSX.Element,
  Buttons: (Props:ProductButtonsPorps) => JSX.Element,
}