import React from "react";
import { render } from "@testing-library/react";
import Counter from "../../components/Counter";

describe("Probando el componente <CounterApp/>", () => {
  test('Deberia incluir el texto "Counter"', () => {
    const text = "Counter";

    const { getByText } = render(<Counter />);

    expect(getByText(text)).toBeInTheDocument();
  });
});
