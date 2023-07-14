import { useCallback, useState } from "react";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error>();

  const fetchApi = useCallback((url: string) => {
    setLoading(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((json) => {
        setLoading(false);
        setData(json);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return { fetchApi, loading, data, error };
};

export default useApi;
