import { getUser, getUserActive } from "../../basesJS/05-funciones";

describe("Funciones", () => {
  test("Probando la funcion de getUSer", () => {
    const userTest = { uid: "ABC123", username: "El_Papi15sda" };
    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("Probando la funcion de getUserActive", () => {
    const name = "Yelisson";
    const userTest = { uid: "ABC567", username: name };
    const user = getUserActive(name);

    expect(user).toEqual(userTest);
  });
});
