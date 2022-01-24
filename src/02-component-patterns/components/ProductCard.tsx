import React, { createContext, ReactElement } from "react";
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { Product } from "../interfaces/interfaces";
import { ProductContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  product: Product;
  className?:string;
  style?: React.CSSProperties
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
