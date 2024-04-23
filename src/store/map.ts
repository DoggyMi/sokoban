import { defineStore } from "pinia";

export enum TileType {
  Floor = 1,
  Wall = 2,
}

export const useMapStore = defineStore("map", () => {
  const map = [
    [2, 2, 2, 2, 2],
    [2, 1, 1, 1, 2],
    [2, 1, 1, 1, 2],
    [2, 1, 1, 1, 2],
    [2, 2, 2, 2, 2],
  ];
  return { map };
});
