import shipping from "../../../assets/highlightedOffers/freeshipping.webp";
import fee from "../../../assets/highlightedOffers/6cuotas.webp";
import { Link } from "react-router-dom";

const CarouselHighlightsItem = ({ item, width, carouselHighlightsQueries }) => {
  
  return (
    <Link
      style={{
        width: `${carouselHighlightsQueries[width]}%`,
      }}
      key={item.id}
      className="carousel-five-products-view-item"
      to={`${item.article}/${item.id}-${item.title.split(" ").join("-")}`}
    >
      <div className="carousel-five-products-view-item__img">
        <img
          className="carousel-five-products-productImg"
          src={item.images[0]}
          alt={item.title}
        />
        <img
          className="carousel-five-products-shippingImg"
          src={shipping}
          alt={item.title}
        />
        <img
          className="carousel-five-products-paymentImg"
          src={fee}
          alt={item.title}
        />
      </div>

      <h3 className="carousel-five-products-view-item__content-product">
        {item.title}
      </h3>
      <div className="carousel-five-products__discountContainer">
        <h5>$ {item.price}</h5>
        <h5>{item.highlighted}% OFF</h5>
      </div>
      <h4 className="carousel-five-products-view-item__content-price">{`$ ${(item.price -((item.highlighted*item.price)/100)).toFixed(0)}`}</h4>
    </Link>
  );
};

export default CarouselHighlightsItem;
