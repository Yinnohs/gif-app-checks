import { FC, useCallback, useState } from "react";

interface Props {
  onNewCategory: (value: string) => void;
}

export const AddCategory: FC<Props> = ({ onNewCategory }) => {
  const [categoryValue, setCategoryValue] = useState("");

  const addCategory = useCallback(() => {
    onNewCategory(categoryValue);
    setCategoryValue("");
  }, [categoryValue, onNewCategory]);

  const handleAddCategory = () => {
    if (!categoryValue || categoryValue.trim().length <= 1) {
      window.alert("value cannot be empty");
      return;
    }
    addCategory();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    handleAddCategory();
  };

  return (
    <div>
      <label htmlFor="category-search-input"> Search </label>
      <input
        type="text"
        name="category-search-input"
        id="category-search-input"
        placeholder="search a gif"
        value={categoryValue}
        onChange={(e) => {
          setCategoryValue(e.target.value);
        }}
        onKeyDown={handleKeyPress}
      />
      <button type="button" className="btn" onClick={() => handleAddCategory()}>
        <span>Add a Gif</span>
      </button>
    </div>
  );
};
