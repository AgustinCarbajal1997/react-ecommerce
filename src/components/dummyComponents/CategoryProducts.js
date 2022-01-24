import { useState } from "react";
import useFetchFilters from "../../customHooks/useFetchFilters";
import { useParams, useLocation } from "react-router";
import ListingProducts from "./ListingProducts";
import LoadingBars from "../Loading";
import FilterProductsForm from "./FilterProductsForm";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComparison } from "../../store/actions/comparison.action";
import MobileFilterButton from "./categoryProducts/MobileFilterButton";
const CategoryProducts = () => {
  const [hideFilter, setHideFilter] = useState(true);
  const { category } = useParams();
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.comparison.products);
  const url = `http://localhost:8080/api/products/getByCategory/${category}`;
  const { search } = useLocation();
  const { loading, data, filteredData, filterHandler } = useFetchFilters(url);

  const deleteAllComparison = () => {
    dispatch(deleteComparison());
  };

  useEffect(() => {
    if (!search.length || !data) return;
    filterHandler(search);
  }, [search, filterHandler, data]);

  return (
    <div className="category-products-container">
      {loading && <LoadingBars />}
      {filteredData && <MobileFilterButton setHideFilter={setHideFilter} />}
      {filteredData && (
        <FilterProductsForm
          data={data}
          search={search}
          filteredData={filteredData}
          hideFilter={hideFilter}
          setHideFilter={setHideFilter}
        />
      )}
      {filteredData && (
        <ListingProducts
          products={filteredData}
          productsState={productsState}
          deleteAllComparison={deleteAllComparison}
        />
      )}
    </div>
  );
};

export default CategoryProducts;
