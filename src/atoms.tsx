import { atom, selector } from "recoil";

export interface IDisplay {
  display: string;
}

export const displayState = atom({
  key: "display",
  default: "mobile",
});

export const displaySelector = selector({
  key: "display-selector",
  get: ({ get }) => get(displayState),
  set: ({ set }, newDisplay) => set(displayState, newDisplay),
});

export const productsState = atom({
  key: "products",
  default: [
    {
      id: 1,
      category: "top",
      name: "블랙 티셔츠",
      price: 8000,
      img: "/images/products/blackshirt.jpg",
      likes: 0,
      reviews: 0,
    },
    {
      id: 2,
      category: "top",
      name: "Fresh 티셔츠",
      price: 10000,
      img: "/images/products/freshshirt.jpg",
      likes: 1,
      reviews: 1,
    },
    {
      id: 3,
      category: "top",
      name: "77 티셔츠",
      price: 12000,
      img: "/images/products/sevenshirt.jpg",
      likes: 10,
      reviews: 10,
    },
    {
      id: 4,
      category: "top",
      name: "검정 티셔츠",
      price: 14000,
      img: "/images/products/blackshirt2.jpg",
      likes: 100,
      reviews: 100,
    },
    {
      id: 5,
      category: "top",
      name: "멋쟁이 티셔츠",
      price: 16000,
      img: "/images/products/redshirt.jpg",
      likes: 1000,
      reviews: 1000,
    },
  ],
});
