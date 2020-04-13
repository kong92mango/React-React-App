const express = require('express');

const app = express();

app.get('/api/shoppingList', (req, res) => {
  const shoppingList = [
    {
      name: "Milk",
      quantity: 1,
      complete: false,
      unit: "litre"
    },
    {
      name: "Eggs",
      quantity: 11,
      complete: false,
      unit: "dozen"
    }
  ];
  res.json(shoppingList);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);