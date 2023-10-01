import { describe, it, expect } from "vitest";
import { GifItem } from "../../../components";
import { render, screen } from "@testing-library/react";

const testingGif: GiftItem = {
  id: "22",
  url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fscholartree.ca%2Fblog%2Fwp-content%2Fuploads%2F2018%2F09%2Fhomer_simpson_rat_testing.gif&f=1&nofb=1&ipt=39d79f305b2235a683a8c5d7a8c32d88e5c2529e12f028d2352dcfb70011038b&ipo=images",
  title: "testing gif",
};

describe("Testing the GifItem component", () => {
  it("Should be the same as the snapshot", () => {
    const { container } = render(<GifItem gif={testingGif} />);
    expect(container).toMatchSnapshot();
  });

  it("Should shown the correct image alt and url indicated", () => {
    const { url, title } = testingGif;
    render(<GifItem gif={testingGif} />);
    const img = screen.getByRole("img");
    expect(img.getAttribute("src")).toEqual(url);
    expect(img.getAttribute("alt")).toEqual(title);
  });
});
