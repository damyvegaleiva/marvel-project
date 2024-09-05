import { useEffect, useState } from "react";
import { MarvelApiResponse } from "../types/types";

type TFetchReturn<T> = {
  data: MarvelApiResponse<T> | null;
  isLoading: boolean;
  error: Error | null;
};

const useFetch = <T,>(url: string): TFetchReturn<T> => {
  const [data, setData] = useState<MarvelApiResponse<T> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async (): Promise<void> => {
      try {
        const request: Response = await fetch(url);

        if (!request.ok) {
          throw new Error(`Error ${request.status}: ${request.statusText}`);
        }

        const response: MarvelApiResponse<T> = await request.json();

        setData(response);
      } catch (error) {
        setError(error as Error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
