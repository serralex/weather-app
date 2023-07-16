import { useCallback, useState } from "react";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const fetchApi = useCallback(async (url: string) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetchApi, loading, data, error };
};

export default useApi;
