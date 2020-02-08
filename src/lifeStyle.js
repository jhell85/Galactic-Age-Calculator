export class LifeStyle {
  constructor(smoker, neighborhood, activityLevel, age, lifeExpectancy){
    this.smoker = smoker;
    this.neighborhood = neighborhood;
    this.activityLevel = activityLevel;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy
  }
  smokerScore(){
    if (this.smoker === true){
      this.age += 10;
    }
  }
  neighborhoodScore(){
    if (this.neighborhood === "ghetto"){
      this.age += 4;
    } else if (this.neighborhood === "safe"){
      this.age -= 4;
    }
  }
  activityLevelScore(){
    if (this.activityLevel === "sedentary"){
      this.age += 15;
    } else if (this.activityLevel === "veryActive"){
      this.age -= 12;
    } else if (this.activityLevel === "fairlyActive"){
      this.age -= 9;
    }
  } 
  yearsLeft(){
    let averageAgeExpectancy  = 78.2;
    this.smokerScore();
    this.neighborhoodScore();
    this.activityLevelScore();
    console.log(this.age);
    return this.age - averageAgeExpectancy;
  }
}