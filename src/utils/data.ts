import { MenuItem } from "../interface/Menu.Interface";


export const defaultMenuItems: MenuItem[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Classic Italian pizza with tomato and mozzarella",
    price: 12,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
    available: true,
  },
  {
    id: "2",
    name: "Veg Burger",
    description: "Grilled veggie patty with fresh lettuce and sauce",
    price: 8,
    category: "Burger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    available: true,
  },
  {
    id: "3",
    name: "Pasta Alfredo",
    description: "Creamy alfredo pasta with parmesan cheese",
    price: 10,
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    available: true,
  },
  {
    id: "4",
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with caesar dressing",
    price: 7,
    category: "Salad",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    available: false,
  },
  {
    id: "5",
    name: "Chocolate Cake",
    description: "Rich chocolate dessert with soft sponge",
    price: 6,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    available: true,
  },
];