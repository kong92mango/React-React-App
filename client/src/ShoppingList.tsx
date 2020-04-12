import React from "react";
import { ShoppingListItem } from "./ShoppingListItem";

interface ShoppingListProps {
  purchases: Array<Purchase>;
  toggleComplete: ToggleComplete;
}

export const ShoppingList: React.FC<ShoppingListProps> = ({
  purchases,
  toggleComplete
}) => {
  return (
    <ul>
      {purchases.map(purchase => (
        <ShoppingListItem
          key={purchase.text}
          purchase={purchase}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};
