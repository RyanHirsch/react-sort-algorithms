import { selectionSort, selectionSortAlt } from "../utils";

describe("Utils", () => {
  describe("selection sort", () => {
    it("returns an array", () => {
      const arr: any[] = [];
      const result = selectionSort(arr);
      expect(result).toEqual([]);
    });

    it("sorts the array ascending", () => {
      const arr = [3, 5, 4, 1];
      const result = selectionSort(arr);
      expect(result).toEqual([1, 3, 4, 5]);
    });

    it("sorts the array ascending alt", () => {
      const arr = [3, 5, 4, 1];
      const result = selectionSortAlt(arr);
      expect(result).toEqual([1, 3, 4, 5]);
    });
  });
});

export default undefined;
