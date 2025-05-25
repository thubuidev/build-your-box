"use client";
import { ProductType } from "../dataSources/bakeryProducts";
import ProductCard from "./ProductCard";

export type BoxItemListType = {
  id: string;
  name: string;
  price: number;
  quantity_of_set: number;
  image: string;
  type: ProductType;
};

type BakeryProduct = {
  category: string;
  bakeryProducts: BoxItemListType[];
};
const BakeryList = ({ bakeryProducts, category }: BakeryProduct) => {
  return (
    <>
      <h3>{category}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {bakeryProducts.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                quantity_of_set={product.quantity_of_set}
                image={product.image}
                type={product.type}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default BakeryList;
