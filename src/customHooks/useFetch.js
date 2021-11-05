import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("Ocurrio un error");
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
