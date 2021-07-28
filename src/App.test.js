import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = 2 + 2;
  expect(linkElement).toBe(4);
});
