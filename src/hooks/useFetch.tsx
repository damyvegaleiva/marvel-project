import { useEffect, useState } from "react";
import { MarvelApiResponse } from "../types/types";
import { BASE_URL } from "../config/config";

const useFetch = <T,>(API_REQUEST: string) => {
  const [data, setData] = useState<MarvelApiResponse<T> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async (): Promise<void> => {
      try {
        const request: Response = await fetch(BASE_URL + API_REQUEST);

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
  }, [API_REQUEST]);

  return { data, isLoading, error };
};

export default useFetch;
