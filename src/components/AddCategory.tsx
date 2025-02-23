import { useState } from "react";

interface AddCategoryProps {
  handleNewCategory: (category: string) => void;
}

export const AddCategory: React.FC<AddCategoryProps> = ({
  handleNewCategory,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (inputValue.trim().length === 0) return;
    setInputValue("");
    handleNewCategory(inputValue);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
