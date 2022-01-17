import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Suggestions } from "./Suggestions";

const createQuery = (str) => {
  let queryArray = str
    .split(" ")
    .reduce(
      (ac, item, idx) => (!idx ? ac + "?q[]=" + item : ac + "&q[]=" + item),
      ""
    );
  return queryArray;
};

const GeneralSearch = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [query, setQuery] = useState("");
  const history = useHistory();

  const onChangeText = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length < 2) return setSuggestions(null);
    const queryArray = createQuery(value);
    try {
      const response = await fetch(
        `http://localhost:8080/api/products/generalSearch/${queryArray}&limit=10`
      );
      const data = await response.json();
      setSuggestions(data);
      data.length ? setSuggestions(data) : setSuggestions(null);
      setSuggestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = () => {
    const queryArray = createQuery(query);
    history.push({
      pathname: "/search",
      search: queryArray,
    });
  };
  const onKeyDownEnterHandler = (e) => {
    if (e.keyCode === 13) onSubmitHandler();
  };

  return (
    <div className="search-container">
      <input
        type="text"
        onChange={onChangeText}
        onKeyDown={onKeyDownEnterHandler}
        value={query}
        placeholder="Buscar productos"
      />
      <div onClick={onSubmitHandler} className="search-icon">
        <FiSearch color="#ffffff" size="20px" />
      </div>
      {suggestions && query.length > 1 && (
        <Suggestions
          suggestions={suggestions}
          setSuggestions={setSuggestions}
          setQuery={setQuery}
        />
      )}
    </div>
  );
};

export default GeneralSearch;
