import React from "react";
import { useForm } from "react-hook-form";

interface AddListItemFormProps {
  addListItem: AddListItem;
}

export const AddListItemForm: React.FC<AddListItemFormProps> = ({ addListItem }) => {

  const { register, errors, handleSubmit, reset } = useForm<Purchase>();
  // form validation

  const onSubmit = handleSubmit(({ name, quantity, unit }) => {
    console.log("triggered");
    addListItem(name, quantity, unit);
    reset();
  });
  
  return (
    <form>
      <p>
        Item: <input name="name" ref={register({required: true, minLength: 2})} />
        {errors.name && errors.name.type === "required" && (<p>The name of item is required</p>)}
      </p>
      <p>
        Quantity: <input type="number" name="quantity" ref={register({min: 0})} min="1"/>
        {errors.quantity && errors.quantity.type === "min" && (<p>The quantity of item cannot be lower than 0</p>)}
      </p>
      <p>
        Unit (optional): <input name="unit"  ref={register}/>
      </p>
      <button type="submit" onClick={onSubmit}>
        Add New Item to Shopping List
      </button>
    </form>
  );
};