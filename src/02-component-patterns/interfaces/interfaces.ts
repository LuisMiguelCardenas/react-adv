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
  maxCount?:number;
  increaseBy: (value: number) => void;
  product: Product;
}


export interface ProductCardHOCProps {
  ({children, product }: ProductCardProps): JSX.Element
  Title: ( Props: ProductTitleProps) => JSX.Element,
  Image: ( Props: ProductImageProps) => JSX.Element,
  Buttons: (Props:ProductButtonsPorps) => JSX.Element,
}

export interface onChangeArgs {
  product: Product;
  count: number
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached:boolean;
  maxCount?: number;
  product: Product;
  increaseBy: ( value:number ) => void;
  reset: () => void;
}