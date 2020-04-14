import React from "react";
import "./style.css";

interface ShoppingListItemProps {
  purchase: Purchase;
  toggleComplete: ToggleComplete;
  deleteListItem: DeleteListItem;
  increaseNumber: IncreaseNumber;
  decreaseNumber: DecreaseNumber;
}

export const ShoppingListItem: React.FC<ShoppingListItemProps> = ({
  purchase,
  toggleComplete,
  deleteListItem,
  increaseNumber,
  decreaseNumber
}) => {
  const { unit, name, quantity } = purchase
  let output = ""
  if (unit.trim() !== "") {
    output = `${quantity} ${unit} of ${name}`
  } else {
    if (quantity > 1) {
      output = `${name} (${quantity})`
    }
    else {
      output = name
    }
  }

  return (
    <li>
      <label className={purchase.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          onChange={() => toggleComplete(purchase)}
          checked={purchase.complete}
        />
        {output} <button onClick={() => deleteListItem(purchase)}>Delete</button>
        <button onClick={() => decreaseNumber(purchase)}>-</button>
        <button onClick={() => increaseNumber(purchase)}>+</button>
      </label>
    </li>
  );
};
