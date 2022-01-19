import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ComparisonFrame from "./ComparisonFrame";
const ComparisonContainer = () => {
  const products = useSelector((state) => state.comparison.products);
  const [fields, setFields] = useState(null);

  useEffect(() => {
    if (!products.length) return;
    console.log(products);
    const query = products.reduce(
      (ac, item, idx) => (!idx ? ac + "?q[]=" + item : ac + "&q[]=" + item),
      ""
    );
    fetch(`http://localhost:8080/api/products/getComparison${query}`)
        .then((res)=> res.json())
        .then((data)=> setFields(data))
        .catch((error)=>console.log(error))
  }, [products]);
  return (
    <>
      {products.length > 0 && fields && (
        <ComparisonFrame products={products} fields={fields} />
      )}
    </>
  );
};

export default ComparisonContainer;
