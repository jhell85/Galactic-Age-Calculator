/* eslint-disable no-undef */
import { Calculator } from "./../src/gaCalculator";
// These tests are written to pass based on today 35 years ago  
describe('gaCalculator', () => {
  let today = new Date();
  let todayMonth = (today.getMonth() + 1);
  let todayDate = (today.getDate());
  let thirty5YearsAgo = (today.getFullYear() - 35);
  let calculator = new Calculator(thirty5YearsAgo,todayMonth,todayDate);

  test('should return the age 35', () => {
    let yearsOld = calculator.age();
    expect(yearsOld).toEqual(35);
  });
  test('should return the age in Mercury years (145)',() => {
    let mercurianYears = calculator.mercury();
    expect(mercurianYears).toEqual(145);
  });
  test('should return the age in Venus years (56)',() => {
    let venusianYears = calculator.venus();
    expect(venusianYears).toEqual(56);
  });
  test('should return the age in Mars years (18)',() => {
    let martianYears = calculator.mars();
    expect(martianYears).toEqual(18);
  });
  test('should return the age in jupiter years (2)',() => {
    let jovianYears = calculator.jupiter();
    expect(jovianYears).toEqual(2);
  });
});