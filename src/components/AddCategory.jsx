import React, { useState } from "react";

function AddCategory({ onNewCategory }) {
  const [inputValue, setinputValue] = useState("One Punch Man");

  const onInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue <= 1) return;

    onNewCategory(inputValue);
    setinputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gif..."
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
}

export default AddCategory;
