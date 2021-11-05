import { useLocation } from "react-router";
import useFetch from "../../../customHooks/useFetch";
import ListingProducts from "../ListingProducts";
import Loading from "../../Loading";
const SearchContainer = () => {
  const location = useLocation();
  const { data, loading } = useFetch(
    `http://localhost:3000/generalSearch/${location.search}`
  );
  return (
    <div>
        { data && data.length>0 && <ListingProducts products={data}/> }
        { data && !data.length && <h2>No se encontraron productos</h2> }
        { loading && <Loading/> }
      
    </div>
  );
};

export default SearchContainer;
