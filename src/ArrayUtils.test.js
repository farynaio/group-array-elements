const { groupArrayElements } = require("./ArrayUtils");

describe("ArrayUtils", () => {
  describe("#groupArrayElements", () => {
    it("Should throw error when array is undefined", () => {
      expect(() => groupArrayElements(undefined, 3)).toThrow();
    });

    it("Should throw error when array is null", () => {
      expect(() => groupArrayElements(null, 3)).toThrow();
    });

    it("Should throw error when number is < 0", () => {
      expect(() => groupArrayElements([1, 2, 3, 4, 5], -1)).toThrow();
    });

    it("Should return original array if number is 0", () => {
      const array = [1, 2, 3, 4, 5];
      expect(groupArrayElements(array, 0)).toEqual(array);
    });

    it("Should return proper result for params `[1, 2, 3, 4, 5], 3`", () => {
      expect(groupArrayElements([1, 2, 3, 4, 5], 3)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it("Should return proper result for params `[1, 2, 3, 4, 5], 4`", () => {
      expect(groupArrayElements([1, 2, 3, 4, 5], 4)).toEqual([[1, 2], [3], [4], [5]]);
    });

    it("Should return proper result for params `[1, 2, 3, 4, 5], 5`", () => {
      expect(groupArrayElements([1, 2, 3, 4, 5], 5)).toEqual([[1], [2], [3], [4], [5]]);
    });

    it("Should return proper result for params `[1, 2, 3, 4, 5], 6`", () => {
      expect(groupArrayElements([1, 2, 3, 4, 5], 6)).toEqual([[1], [2], [3], [4], [5]]);
    });

    it("Should return proper result for params `[1, 2, 3, 4, 5], 0`", () => {
      // TODO no sub array created. Is that expected bahaviour?
      expect(groupArrayElements([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5]);
    });

    it("Should return proper result for params `[1, 2, 3, 4, 5], 1`", () => {
      expect(groupArrayElements([1, 2, 3, 4, 5], 1)).toEqual([[1, 2, 3, 4, 5]]);
    });
  });
});
