import React, { useState, useEffect } from "react";
import { api, initialPurchases } from "./initialPurchases";
import { ShoppingList } from "./ShoppingList";
import { AddListItemForm } from "./AddListItemForm";
import "./style.css";

const App: React.FC = () => {

  // nothing triggers useEffect so it runs only once to get the shopping list from server
  useEffect(() => {
    api<Purchase[]>('/api/shoppingList')
    .then((item) => {
      console.log(item);
      setPurchases(item);
    })
    .catch(error => {
      return error
    })
  }, []);

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
      <h1>Kong's Shopping List App</h1>
      <div>
        <ShoppingList purchases={purchases} toggleComplete={toggleComplete} deleteListItem={deleteListItem} increaseNumber={increaseNumber} decreaseNumber={decreaseNumber} />
      </div>
      <AddListItemForm addListItem={addListItem} />
    </React.Fragment>
  );
};

export default App;
