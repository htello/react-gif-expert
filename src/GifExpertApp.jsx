import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      alert("la categoría ya existe");
      return;
    }
    setCategories([newCategory, ...categories]);
    // setCategories((cat) => [...cat, newCategory]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* INPUT */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* Listado de gifs */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* gifItem */}
    </>
  );
};
