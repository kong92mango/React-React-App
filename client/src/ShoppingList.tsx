import React from "react";
import { ShoppingListItem } from "./ShoppingListItem";

interface ShoppingListProps {
  purchases: Array<Purchase>;
  toggleComplete: ToggleComplete;
  deleteListItem: DeleteListItem;
  increaseNumber: IncreaseNumber;
  decreaseNumber: DecreaseNumber;
}

export const ShoppingList: React.FC<ShoppingListProps> = ({
  purchases,
  toggleComplete,
  deleteListItem,
  increaseNumber,
  decreaseNumber
}) => {

  return (
    <ul>
      {purchases.map(purchase => (
        <ShoppingListItem
          key={purchase.name}
          purchase={purchase}
          toggleComplete={toggleComplete}
          deleteListItem={deleteListItem}
          increaseNumber={increaseNumber}
          decreaseNumber={decreaseNumber}
        />
      ))}
    </ul>
  );
};
