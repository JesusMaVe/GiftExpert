interface Gif {
  id: string;
  title: string;
  images: { downsized_medium: { url: string } };
}
type GifData = {
  id: string;
  title: string;
  url: string;
};

export const getGifs = async (categoryName: string): Promise<GifData[]> => {
  const VITE_GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_GIPHY_API_KEY}&q=${categoryName}&limit=10`;
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const { data }: { data: Gif[] } = await resp.json();

    return data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    }));
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    return [];
  }
};
