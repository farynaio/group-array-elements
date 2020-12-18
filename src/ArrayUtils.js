module.exports = class ArrayUtils {
  static groupArrayElements(array, number) {
    if (!array) {
        throw new Error("'array' is not defined!");
    }

    if (number < 0) {
        throw new Error("'number' must be greater equal 0!");
    }

    if (number === 0) {
      return array;
    }

    return groupArrayElementsInternal(number);

    function groupArrayElementsInternal(number, start=0, result=[]) {
        const subArraySize = Math.ceil((array.length - start) / number);
        result.push(array.slice(start, start + subArraySize));

        if (start + subArraySize < array.length) {
            return groupArrayElementsInternal(number-1, start + subArraySize, result);
        }

        return result;
    }
  }
};
