/* eslint-disable no-undef */
import { Calculator } from "./../src/gaCalculator";
// These tests written to pass based on a date that is 35 years of age as of today, the date would need to be changed in Calculator() 2 lines down to todays date 35 years ago to pass the tests.  
describe('gaCalculator', () => {
  let calculator = new Calculator(1985,2,7);

  test('should return the age 35', () => {
    let yearsOld = calculator.age();
    expect(yearsOld).toEqual(35);
  });
  test('should return the age in Mercury years (145)',() => {
    let mercurianYears = calculator.mercury();
    expect(mercurianYears).toEqual(145);
  });
  test('should return the age in Venus years (56)',() => {
    let venusYears = calculator.venus();
    expect(venusYears).toEqual(56);
  });
  test('should return the age in Mars years (18)',() => {
    let marsYears = calculator.mars();
    expect(marsYears).toEqual(18);
  });
});