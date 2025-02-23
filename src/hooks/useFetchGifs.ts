import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

interface Gif {
  id: string;
  title: string;
  url: string;
}
export const useFetchGifs = (categoryName: string) => {
  const [images, setImages] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGifs = async () => {
      setIsLoading(true);
      const gifs = await getGifs(categoryName);
      setImages(gifs);
      setIsLoading(false);
    };

    fetchGifs();
  }, [categoryName]);

  return {
    images,
    isLoading,
  };
};
