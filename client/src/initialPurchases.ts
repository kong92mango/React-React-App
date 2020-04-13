export const initialPurchases: Array<Purchase> = [
  {
    name: "Milk",
    quantity: 3,
    complete: false,
    unit: "litre"
  },
  {
    name: "Eggs",
    quantity: 3,
    complete: false,
    unit: "dozen"
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