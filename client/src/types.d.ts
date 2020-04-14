type Purchase = {
  name: string;
  quantity: int;
  complete: boolean;
  unit: string;
};

type InputData = {
  name: string;
  quantity: int;
  unit: string;
}

type ToggleComplete = (selectedPurchase: Purchase) => void;

type AddListItem = (newListItem: string, newItemQuantity: number, newItemUnit: string) => void;

type DeleteListItem = (selectedPurchase: Purchase) => void;

type IncreaseNumber = (selectedPurchase: Purchase) => void;

type DecreaseNumber = (selectedPurchase: Purchase) => void;