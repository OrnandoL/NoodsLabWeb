export type MenuCategory = "Ramen" | "Rice Bowl" | "Side Dish" | "Beverage";

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
  tags: string[];
  isBestSeller: boolean;
  image: string;
};
