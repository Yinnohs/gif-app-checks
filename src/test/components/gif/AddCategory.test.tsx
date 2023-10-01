import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../../components";
describe("testing Add category component", () => {
  it("should be the same as the snapshot", () => {
    const { container } = render(<AddCategory onNewCategory={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it("should change the input value", () => {
    const changedValue = "GOKU";
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: changedValue } });

    expect(input.getAttribute("value")).toEqual(changedValue);
  });

  it("should change input value when fired button event", () => {
    const inputValue = "GOKU";
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.click(button);

    expect(input.getAttribute("value")?.length).toBe(0);
  });

  it("should change be called handler method with the input value", () => {
    const inputValue = "GOKU";
    const mockedFunction = vi.fn();

    render(<AddCategory onNewCategory={mockedFunction} />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.click(button);

    expect(mockedFunction).toHaveBeenCalledTimes(1);
    expect(mockedFunction).toHaveBeenCalledWith(inputValue);
  });

  it("should not  calle handler method with the input value in blank", () => {
    const inputValue = "";
    const mockedFunction = vi.fn();

    render(<AddCategory onNewCategory={mockedFunction} />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.click(button);

    expect(mockedFunction).toHaveBeenCalledTimes(0);
  });
});
