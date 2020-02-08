/* eslint-disable no-undef */
import { Calculator } from "./../src/gaCalculator";
import { LifeStyle } from "./../src/lifeStyle";

// These tests are written to pass based on today 35 years ago  
describe('gaCalculator', () => {
  let today = new Date();
  let todayMonth = (today.getMonth() + 1);
  let todayDate = (today.getDate());
  let tomorrowDate = (todayDate + 1);
  let thirty5YearsAgo = (today.getFullYear() - 35);
  let calculator = new Calculator(thirty5YearsAgo,todayMonth,todayDate);
  let calculatorYesterday = new Calculator(thirty5YearsAgo,todayMonth,tomorrowDate);

  describe('Calculator tests', () => {
    test('should return the age 35', () => {
      let yearsOld = calculator.age();
      expect(yearsOld).toEqual(35);
    });
    test('should return the age 34, testing if statement in this.age() function', () => {
      let TomorrowsAge = calculatorYesterday.age();
      expect(TomorrowsAge).toEqual(34);
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

  describe('Lifestyle tests', () => {
    let age = calculator.age();
    let lifeStyle = new LifeStyle(false, 'average', 'moderate', age);

    test('should test smokingScore method and not alter age constructor',() => {
      lifeStyle.smokerScore();
      expect(lifeStyle.age).toEqual(35);
    });
    test('should test smokingScore method and add 10 to age constructor',() => {
      lifeStyle.smoker = true;
      lifeStyle.smokerScore();
      expect(lifeStyle.age).toEqual(45);
    });
    test('should test neighborhoodScore method and not alter age constructor',() => {
      lifeStyle.age = age;
      lifeStyle.neighborhoodScore();
      expect(lifeStyle.age).toEqual(35);
    });
    test('should test neighborhoodScore method and add 4 to age',() => {
      lifeStyle.age = age;
      lifeStyle.neighborhood = "ghetto";
      lifeStyle.neighborhoodScore();
      expect(lifeStyle.age).toEqual(39);
    });
    test('should test neighborhoodScore method and subtract 4 to age',() => {
      lifeStyle.age = age;
      lifeStyle.neighborhood = "safe";
      lifeStyle.neighborhoodScore();
      expect(lifeStyle.age).toEqual(31);
    });
    test('should test activityLevelScore method and not alter age constructor',() => {
      lifeStyle.age = age;
      lifeStyle.activityLevelScore();
      expect(lifeStyle.age).toEqual(35);
    });
    test('should test activityLevelScore method and add 15 to age constructor',() => {
      lifeStyle.age = age;
      lifeStyle.activityLevel = "sedentary";
      lifeStyle.activityLevelScore();
      expect(lifeStyle.age).toEqual(50);
    });
    test('should test activityLevelScore method and subtract 12 to age constructor',() => {
      lifeStyle.age = age;
      lifeStyle.activityLevel = "veryActive";
      lifeStyle.activityLevelScore();
      expect(lifeStyle.age).toEqual(50);
    });
  });
});
