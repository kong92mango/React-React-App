type Purchase = {
  text: string;
  complete: boolean;
};

type ToggleComplete = (selectedPurchase: Purchase) => void;

type AddListItem = (newListItem: string) => void;
