import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const App = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const handleAddCategory = (newCategory: string): void => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory handleNewCategory={handleAddCategory} />

      {categories.map((category) => {
        return <GifGrid key={category} categoryName={category} />;
      })}
    </>
  );
};
