/* eslint-disable no-undef */
import { Calculator } from "./../src/gaCalculator";

describe('gaCalculator', () => {
  let calculator = new Calculator(1985,6,18);

  test('should return the age of the date entered', () => {
    let birthDate = calculator.age();
    expect(birthDate).toEqual(34);
  });
});