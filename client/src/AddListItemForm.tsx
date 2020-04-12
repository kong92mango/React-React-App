import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddListItemFormProps {
  addListItem: AddListItem;
}

export const AddListItemForm: React.FC<AddListItemFormProps> = ({ addListItem }) => {
  const [newListItem, setNewListItem] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewListItem(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addListItem(newListItem);
    setNewListItem("");
  };

  return (
    <form>
      <input type="text" value={newListItem} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add New Item to Shopping List
      </button>
    </form>
  );
};
