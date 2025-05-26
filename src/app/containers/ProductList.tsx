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
      <ProductCategorySection title="Cookies" defaultOpen={true}>
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

      <ProductCategorySection title="Breads" defaultOpen={false}>
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

      <ProductCategorySection title="Cake Rings & Bibingka Muffins" defaultOpen={false}>
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
