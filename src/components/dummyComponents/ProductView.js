import useFetch from "../../customHooks/useFetch";
import { useParams } from "react-router";
import LoadingBars from "../Loading";
import ProductModel from "./ProductModel";
const ProductView = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`http://localhost:8080/api/products/getById/${id.split("-")[0]}`);
  return (
    <section className="product-view">
      {loading && <LoadingBars />}
      {data && <ProductModel item={data} />}
    </section>
  );
};

export default ProductView;
