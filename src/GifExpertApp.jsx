import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GiftGrid from "./components/GiftGrid";
import { getGifts } from "./helpers/GetGifs";

export const GifExpertApp = () => {
  const [categories, setCateories] = useState(["One Punch Man"]);

  const onAddCategory = (newCategory) => {
    //validar que no se repitan
    if (categories.includes(newCategory)) return;

    setCateories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};
