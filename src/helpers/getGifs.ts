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
  const url = `https://api.giphy.com/v1/gifs/search?api_key=MTv2RTfwUo2B0kZkPh6H2Y8u27tPvxYA&q=${categoryName}&limit=10`;
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
