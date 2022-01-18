import useFetchFilters from "../../customHooks/useFetchFilters";
import { useParams, useLocation } from "react-router";
import ListingProducts from "./ListingProducts";
import LoadingBars from "../Loading";
import FilterProductsForm from "./FilterProductsForm";
import { useEffect } from "react";
const CategoryProducts = () => {
  const { category } = useParams();
  const url = `http://localhost:8080/api/products/getByCategory/${category}`;
  const { search } = useLocation();
  const { loading, data, filteredData, filterHandler } = useFetchFilters(url);

  useEffect(() => {
    if (!search.length || !data) return;
    console.log(search)
    filterHandler(search);
  }, [search, filterHandler, data]);

  return (
    <div className="category-products-container">
      {loading && <LoadingBars />}
      {filteredData && (
        <FilterProductsForm
          data={data}
          search={search}
          filteredData={filteredData}
        />
      )}
      {filteredData && <ListingProducts products={filteredData} />}
    </div>
  );
};

export default CategoryProducts;
