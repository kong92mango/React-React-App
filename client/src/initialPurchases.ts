export const initialPurchases: Array<Purchase> = [
  {
    name: "Ham",
    quantity: 3,
    complete: false,
    unit: "kg"
  },
  {
    name: "Bacon",
    quantity: 3,
    complete: false,
    unit: "pack"
  }
];

export function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
}