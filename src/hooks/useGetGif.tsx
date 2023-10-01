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
      .then((data) => {
        const parsedData = data.map((element) => {
          return {
            id: element?.id,
            url: element?.images?.downsized_medium.url,
            title: element?.title,
          };
        });
        setData(parsedData);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  return { data, isLoading };
};
