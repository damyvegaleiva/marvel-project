import { useEffect, useState } from "react";
import { BASE_URL } from "../config/config";

type Data<T> = T | null;
type ErrorType = Error | null;

type TFetchHookResult<T> = {
  data: Data<T>;
  isLoading: boolean;
  error: ErrorType;
};

const useFetch = <T,>(API_REQUEST: string): TFetchHookResult<T> => {
  const [data, setData] = useState<Data<T>>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    const fetchData = async () => {
      try {
        const request = await fetch(BASE_URL + API_REQUEST, {
          signal: controller.signal,
        });

        if (!request.ok) {
          throw new Error(`Error ${request.status}: ${request.statusText}`);
        }

        const response: T = await request.json();

        setData(response);
        setError(null);
      } catch (error) {
        setError(error as Error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [API_REQUEST]);

  return { data, isLoading, error };
};

export default useFetch;
