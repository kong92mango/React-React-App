import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddListItemFormProps {
  addListItem: AddListItem;
}

export const AddListItemForm: React.FC<AddListItemFormProps> = ({ addListItem }) => {
  const [newListItem, setNewListItem] = useState<string>("");
  const [newListNumber, setNewListNumber] = useState<number>(1);
  const [newListUnit, setNewListUnit] = useState<string>("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewListItem(e.target.value);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewListNumber(parseInt(e.target.value));
  };

  const handleUnitChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewListUnit(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addListItem(newListItem, newListNumber, newListUnit);
    setNewListItem("");
    setNewListNumber(1);
    setNewListUnit("");
  };

  return (
    <form>
      <p>
      Item: <input type="text" value={newListItem} onChange={handleNameChange} />
      </p>
      <p>
      Quantity: <input type="number" min="0" value={newListNumber} onChange={handleAmountChange} />
      </p>
      <p>
      Unit (optional): <input type="text" value={newListUnit} onChange={handleUnitChange} />
      </p>
      <button type="submit" onClick={handleSubmit}>
        Add New Item to Shopping List
      </button>
    </form>
  );
};
