import { useCallback, useState } from "react";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error>();

  const fetchApi = useCallback(async (url: string) => {
    try {
      const response = await fetch(url);
      setLoading(false);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setData(data);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  }, []);

  return { fetchApi, loading, data, error };
};

export default useApi;
