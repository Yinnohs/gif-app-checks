import { useState } from "react";
import "./App.styles.css";
import { AddCategory, GifItemList } from "./components";

function App() {
  const [categories, setCategories] = useState<string[]>(["One Punch"]);

  const handleCategoryAdd = (category: string) => {
    if (categories.includes(category)) {
      window.alert("Category already exist please add a different one");
      return;
    }

    setCategories([category, ...categories]);
  };

  return (
    <>
      <div>
        <h1>Welcome to he new age of history</h1>
        <AddCategory onNewCategory={handleCategoryAdd} />
        <GifItemList categories={categories} />
      </div>
    </>
  );
}

export default App;
