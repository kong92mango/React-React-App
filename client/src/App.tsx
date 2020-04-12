import React, { useState } from "react";
import { initialPurchases } from "./initialPurchases";
import { ShoppingList } from "./ShoppingList";
import { AddListItemForm } from "./AddListItemForm";

const App: React.FC = () => {
  const [purchases, setPurchases] = useState<Array<Purchase>>(initialPurchases);

  const toggleComplete: ToggleComplete = selectedPurchase => {
    const updatedPurchases = purchases.map(purchase => {
      if (purchase === selectedPurchase) {
        return { ...purchase, complete: !purchase.complete };
      }
      return purchase;
    });
    setPurchases(updatedPurchases);
  };

  const addListItem: AddListItem = newListItem => {
    newListItem.trim() !== "" &&
      setPurchases([...purchases, { text: newListItem, complete: false }]);
  };

  return (
    <React.Fragment>
      <ShoppingList purchases={purchases} toggleComplete={toggleComplete} />
      <AddListItemForm addListItem={addListItem} />
    </React.Fragment>
  );
};

export default App;
