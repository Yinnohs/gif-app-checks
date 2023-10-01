import { GifItem } from ".";
import { useGetGif } from "../../hooks";

interface Props {
  category: string;
}

const CategoryLoader = () => {
  return <h1> Loading ..... </h1>;
};

const GifGrid: React.FC<Props> = ({ category = "none" }) => {
  const { data, isLoading } = useGetGif(category);
  console.log(data);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {isLoading && <CategoryLoader />}
        {data ? (
          data.map((gif) => {
            return <GifItem key={gif.id} gif={gif} />;
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default GifGrid;
