export class lifeStyle {
  constructor(smoker, neighborhood, activityLevel, age){
    this.smoker = smoker;
    this.neighborhood = neighborhood;
    this.activityLevel = activityLevel;
    this.age = age;
  }
  smokerScore(){
    if (this.smoker === true){
      return;
    }
  }
}