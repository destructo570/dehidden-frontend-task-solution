import axios from "axios";
import { useEffect, useState } from "react";

interface ReturnedData<T> {
  data?: T;
  error?: string;
  loading: boolean;
}

export const useFetch = <FetchedData>(
  url: string
): ReturnedData<FetchedData> => {
  const [fetchedData, setFetchedData] = useState<ReturnedData<FetchedData>>({
    loading: true,
  });

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(url);
        setFetchedData({
          data: response.data,
          loading: false,
          error: undefined,
        });
      } catch (error: any) {
        setFetchedData({
          data: undefined,
          loading: false,
          error: error.message,
        });
      }
    })();
  }, [url]);
  return fetchedData;
};
