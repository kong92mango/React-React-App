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

  const addListItem: AddListItem = (newListItem, newItemQuantity, newItemUnit) => {
    newListItem.trim() !== "" &&
      setPurchases([...purchases, { name: newListItem, quantity: newItemQuantity, unit: newItemUnit, complete: false }]);
  };

  const deleteListItem: DeleteListItem = selectedPurchase => {
    const updatedPurchases = purchases.filter(purchase => {
      if (purchase !== selectedPurchase) {
        return purchase;
      }
    }
    );
    setPurchases(updatedPurchases);
  };

  const increaseNumber: IncreaseNumber = selectedPurchase => {
    const updatedPurchases = purchases.map(purchase => {
      if (purchase === selectedPurchase) {
        return { ...purchase, quantity: purchase.quantity + 1 };
      }
      return purchase;
    });
    setPurchases(updatedPurchases);
  };

  const decreaseNumber: DecreaseNumber = selectedPurchase => {
    if (selectedPurchase.quantity === 1) {
      deleteListItem(selectedPurchase)
    } else {
      const updatedPurchases = purchases.map(purchase => {
        if (purchase === selectedPurchase) {
          return { ...purchase, quantity: purchase.quantity - 1 };
        }
        return purchase;
      });
      setPurchases(updatedPurchases);
    }
  };


  return (
    <React.Fragment>
      <ShoppingList purchases={purchases} toggleComplete={toggleComplete} deleteListItem={deleteListItem} increaseNumber={increaseNumber} decreaseNumber={decreaseNumber} />
      <AddListItemForm addListItem={addListItem} />
    </React.Fragment>
  );
};

export default App;
