import { Button } from "../../../shared/components/Button";
import { ProductCard } from "../../../shared/components/ProductCard";
import { PRODUCTS } from "../data.example";

export const SelectedSection = () => {
  return (
    <section className="section selected-section">
      <div className="container">
        <div className="flex flex-col">
          <div className="selected-header flex justify-between items-center">
            <h3 className="section-title selected-title">
              Selected just for you
            </h3>
            <a href="/" className="selected-button">
              <Button outlined rounded>
                SHOW MORE
              </Button>
            </a>
          </div>
          <ul id="selected-list" className="row">
            {PRODUCTS?.map((product, index: number) => {
              return (
                <ProductCard
                  key={index}
                  name={product?.name}
                  discountValue={product?.discountValue}
                  price={product?.price}
                  thumbnail={product?.thumbnail}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
