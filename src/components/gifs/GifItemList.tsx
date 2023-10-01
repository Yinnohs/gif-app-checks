import GifGrid from "./GifGrid";

interface Props {
  categories: string[];
}

const CategoryLoader = () => {
  return <h1> Loading ..... </h1>;
};

export const GifItemList: React.FC<Props> = ({ categories = [] }) => {
  return (
    <>
      {categories.length > 0 ? (
        categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })
      ) : (
        <CategoryLoader />
      )}
    </>
  );
};
