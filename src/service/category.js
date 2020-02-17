export const categories = [
  {
    name: "Herb & Spices"
  },
  {
    name: "Natural Oils"
  },
  {
    name: "Soaps"
  },
  {
    name: "Natural Tea"
  },
  {
    name: "Beauty & MarkUp"
  },
  {
    name: "Vegetable & Fruits"
  },
  {
    name: "Sugar And Salt"
  },
  {
    name: "Food and Nutrition"
  }
];

export function getCategories() {
  return categories.filter(category => category);
}
