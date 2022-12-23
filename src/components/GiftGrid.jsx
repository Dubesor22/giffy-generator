import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GiftGrid = ({ category }) => {
  //custom Hook
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <h3>{category}</h3>
      <div className="card-grid">
        {images?.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

export default GiftGrid;
