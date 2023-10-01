/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { getGifData } from "../api";

export const useGetGif = (category: string) => {
  const [data, setData] = useState<GiftItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getGifData(category)
      .then((data) => setData(data))
      .catch((error) => window.alert(error))
      .finally(() => setIsLoading(false));
  }, [category]);

  return { data, isLoading };
};
