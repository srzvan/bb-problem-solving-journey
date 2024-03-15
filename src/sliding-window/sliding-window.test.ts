import { slidingWindow } from ".";

describe("sliding-window", () => {
  it("should work", () => {
    const result = slidingWindow("coco");
    expect(result).toEqual("coco");
  });
});
