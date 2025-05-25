import ProductCard from "../components/ProductCard";
import ProductCategorySection from "../components/ProductCategoySection";
import {
  bakeryProducts,
  cookiesProducts,
  ProductType,
} from "../dataSources/bakeryProducts";

const ProductList = () => {
  return (
    <>
      <ProductCategorySection title="Cookies">
        {cookiesProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            quantity_of_set={product.quantity_of_set}
            image={product.image}
            type={product.type}
          />
        ))}
      </ProductCategorySection>

      <ProductCategorySection title="Breads">
        {bakeryProducts
          ?.filter(({ type }) => type === ProductType.BREADS)
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              quantity_of_set={product.quantity_of_set}
              image={product.image}
              type={product.type}
            />
          ))}
      </ProductCategorySection>

      <ProductCategorySection title="Cake Rings & Bibingka Muffins">
        {bakeryProducts
          ?.filter(({ type }) => type === ProductType.CAKES)
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              quantity_of_set={product.quantity_of_set}
              image={product.image}
              type={product.type}
            />
          ))}
      </ProductCategorySection>
    </>
  );
};

export default ProductList;
