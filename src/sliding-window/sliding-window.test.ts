import { longestBinarySubstring, maxLen, numOfSubarrays } from ".";

describe("longestBinarySubstring", () => {
  it("should work", () => {
    const result = longestBinarySubstring("coco");
    expect(result).toEqual("coco");
  });
});

describe("max-len", () => {
  it("should work", () => {
    const result = maxLen([1, 2, 5, 6, 7], 15);
    expect(result).toEqual(3);

    const result1 = maxLen([1, 2, 3, 4, 5, 6, 7], 181);
    expect(result1).toEqual(5);

    const result3 = maxLen([1, 2, 3, 4, 5, 6, 7], 0);
    expect(result3).toEqual(0);
  });

  it("array contains 0", () => {
    const result = maxLen([0, 1, 2, 3, 4, 5, 6, 7], 5);
    expect(result).toEqual(8);

    const result1 = maxLen([1, 2, 3, 4, 5, 6, 7, 0], 5);
    expect(result1).toEqual(8);

    const result3 = maxLen([1, 2, 3, 4, 0, 6, 7, 5], 5);
    expect(result3).toEqual(8);
  });
});

describe("numOfSubarrays", () => {
  it("should work", () => {
    const result = numOfSubarrays([10, 5, 2, 6], 100);
    expect(result).toEqual(8);

    const result1 = numOfSubarrays([1, 5, 2, 6], 3);
    expect(result1).toEqual(2);
  });

  it("array contains 0", () => {
    const result = numOfSubarrays([1, 5, 2, 6, 0], 3);
    expect(result).toEqual(15);

    const result1 = numOfSubarrays([1, 5, 0, 6, 2], 3);
    expect(result1).toEqual(15);

    const result2 = numOfSubarrays([0, 1, 5, 2, 6], 3);
    expect(result2).toEqual(15);
  });
});
