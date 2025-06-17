import { atom, selector } from "recoil";

export interface IDisplay {
  display: string;
}

export const displayState = atom({
  key: "displayState",
  default: "mobile"
})

export const displaySelector = selector({
  key: "displaySelector",
  get : ({get})=> get(displayState),
  set : ({set},newDisplay)=> set(displayState,newDisplay)
})