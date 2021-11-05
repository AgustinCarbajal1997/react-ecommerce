import useFetch from "../customHooks/useFetch";
import WeDeliverItToYou from "../components/home/WeDeliverItToYou";
import BannerContainer from "../components/home/BannerContainer";
import CarouselList from "../components/home/BannerHomeImgs";
import OptionsContainer from "../components/home/options/OptionsContainer";
import optionsListHome from "../components/home/options/OptionsListHome";
import CarouselSalesOffContainer from "../components/dummyComponents/carouselSalesOff/CarouselSalesOffContainer";
import salesOffQueries from "../components/dummyComponents/carouselSalesOff/SalesOffQueries";
import CarouselHighlightsContainer from "../components/dummyComponents/carouselHighlights/CarouselHighlightsContainer";
const Home = () => {
  const { data: salesoff } = useFetch(
    "http://localhost:3000/discountSearch/saleoff"
  );
  const { data: highlighted } = useFetch(
    "http://localhost:3000/discountSearch/highlighted"
  );
  return (
    <div className="main">
      <BannerContainer carouselList={CarouselList} />
      <OptionsContainer listOptions={optionsListHome} />

      {salesoff && (
        <CarouselSalesOffContainer
          DataSaleOff={salesoff}
          salesOffQueries={salesOffQueries}
        />
      )}
      <WeDeliverItToYou />

      {highlighted && (
        <CarouselHighlightsContainer
          productList={highlighted}
          title="Aprovechá las ofertas destacadas"
        />
      )}
    </div>
  );
};

export default Home;
