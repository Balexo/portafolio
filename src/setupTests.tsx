// src/setupTests.tsx
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const customRender = (ui: React.ReactElement, options = {}) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);

export * from "@testing-library/react";
export { customRender as render };
