import React from "react";
import "./ShoppingListItem.css";

interface ShoppingListItemProps {
  purchase: Purchase;
  toggleComplete: ToggleComplete;
}

export const ShoppingListItem: React.FC<ShoppingListItemProps> = ({
  purchase,
  toggleComplete
}) => {
  return (
    <li>
      <label className={purchase.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          onChange={() => toggleComplete(purchase)}
          checked={purchase.complete}
        />
        {purchase.text}
      </label>
    </li>
  );
};
