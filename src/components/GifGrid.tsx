import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ categoryName }: { categoryName: string }) => {
  const { images, isLoading } = useFetchGifs(categoryName);

  return (
    <div>
      <h3>{categoryName}</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-grid">
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      )}
    </div>
  );
};
