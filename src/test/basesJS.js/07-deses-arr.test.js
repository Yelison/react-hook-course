import "@testing-library/jest-dom";
import { retornaArreglo } from "../../basesJS/07-deses-arr";

describe("07-deses-arr", () => {

  test("Deberia regresar un array con un string y un numero", () => {

    const returnArr = retornaArreglo();
    const returnArrTest = ["ABC", 123];
    
    expect(returnArr).toEqual(returnArrTest);
  });
});
