import React, { useState, ChangeEvent, FormEvent } from "react";
import { useForm } from "react-hook-form";

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

  const { register, errors, handleSubmit } = useForm<Purchase>();
  // form validation

  const onSubmit = handleSubmit(({ name, quantity, unit }) => {
    console.log("triggered")
    addListItem(name, quantity, unit);
    setNewListItem("");
    setNewListNumber(1);
    setNewListUnit("");
  });

  
  return (
    <form>
      <p>
        Item: <input name="name" ref={register({required: true, minLength: 2})} value={newListItem} onChange={handleNameChange} />
      </p>
      {errors.name && errors.name.type === "required" && (<p>The name of item is required</p>)}
      <p>
        Quantity: <input type="number" name="quantity" ref={register} min="0" value={newListNumber} onChange={handleAmountChange} />
      </p>
      <p>
        Unit (optional): <input name="unit"  ref={register} value={newListUnit} onChange={handleUnitChange} />
      </p>
      <button type="submit" onClick={onSubmit}>
        Add New Item to Shopping List
      </button>
    </form>
  );
};


// Note, I found that it's hacky to use both react-hook-form and traditional onChange handlers. For the purpose of just validating the first element, I will just use this library.