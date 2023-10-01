import { describe, it, expect } from "vitest";
import { getGifData } from "../../api";

describe("testing the api call ", () => {
  it("should return a corrrect array of type GiftItem", async () => {
    const expectedArraySize = 10;

    const gifs = await getGifData("some");

    expect(gifs.length).toEqual(expectedArraySize);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      url: expect.any(String),
      title: expect.any(String),
    });
  });
});
