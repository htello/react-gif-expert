import { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (ev) => {
    setInputValue(ev.target.value);
  };

  const onSubmit = (ev) => {
    // console.log("mensaje desde el submit");
    ev.preventDefault();

    if (inputValue.trim().length <= 1) return;
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        onChange={onInputChange}
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
