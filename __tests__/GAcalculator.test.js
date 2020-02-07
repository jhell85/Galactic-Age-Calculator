/* eslint-disable no-undef */
import { Calculator } from "./../src/gaCalculator";
// These tests will only pass based on a date that is 34 years of age, the date would need to be changed in Calculator() 2 lines down to pass tests if the date is different then 34 years old.  
describe('gaCalculator', () => {
  let calculator = new Calculator(1985,6,18);

  test('should return the age of the date entered', () => {
    let birthDate = calculator.age();
    expect(birthDate).toEqual(34);
  });
  
});