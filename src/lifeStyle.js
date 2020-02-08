export class LifeStyle {
  constructor(smoker, neighborhood, activityLevel, age){
    this.smoker = smoker;
    this.neighborhood = neighborhood;
    this.activityLevel = activityLevel;
    this.age = age;
  }
  smokerScore(){
    if (this.smoker === true){
      this.age += 10;
    }
  }
  neighborhoodScore(){
    return;
  }
}