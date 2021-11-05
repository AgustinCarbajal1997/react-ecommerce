import { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const FilterProductsForm = ({ data, search, filteredData }) => {
  const [brands, setBrands] = useState(null);
  const [checked, setChecked] = useState({});
  const formRef = useRef();
  const history = useHistory();
  const filterFormHandler = () => {
    const formData = new FormData(formRef.current);
    let consult = [];
    for (var value of formData.values()) consult = [...consult, value];
    consult = consult.reduce((a, b, i) => (i === 0 ? a + b : a + "&" + b), "");
    history.push({
      pathname: history.location.pathname,
      search: `?${consult}`,
    });
  };
  useEffect(() => {
    const check = new URLSearchParams(search);
    let checkedItems = {};
    for (const data of check.values())
      checkedItems = { ...checkedItems, [data]: data };
    setChecked(checkedItems);
  }, [search]);

  useEffect(() => {
    const brandsFilter = data
      .map((item) => item.brand.name)
      .reduce(
        (ac, item) =>
          item in ac ? { ...ac, [item]: ac[item] + 1 } : { ...ac, [item]: 1 },
        {}
      );
    setBrands(brandsFilter);
  }, [data]);

  return (
    <aside className="aside-form-container">
      <h3>Filtrá tus productos</h3>
      <h4><span>{filteredData.length}</span> resultados</h4>
      <form onChange={filterFormHandler} ref={formRef}>
        <label>
          ORDENAR POR:
          <select name="select1" defaultValue={"DEFAULT"} className="select">
            <option value="DEFAULT" disabled>
              Aleatorio
            </option>
            <option value="orderBy=asc">Menor precio</option>
            <option value="orderBy=dsc">Mayor precio</option>
          </select>
        </label>
        <label className="brand-label">MARCA:</label>
        {brands &&
          Object.entries(brands).map((item, index) => (
            <label key={index} className="b-contain">
              <input
                type="checkbox"
                id={`check${index}`}
                name={`check${index}`}
                value={`brandType[]=${item[0]}`}
                defaultChecked={item[0] in checked ? true : false}
              />
              <span>{`${item[0]} (${item[1]})`}</span>
              <div className="b-input"></div>
            </label>
          ))}
      </form>
    </aside>
  );
};

export default FilterProductsForm;
