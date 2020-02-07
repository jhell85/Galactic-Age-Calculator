export class Calculator {
  constructor(year, month, day){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  age(){
    let today = new Date();
    let birthDate = new Date(this.year, this.month, this.day);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = (today.getMonth() + 1) - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }
    return age;
  }
  mercury(){
    let mercuryAge = Math.floor(this.age() / .24);
    return mercuryAge;
  }
  venus(){
    let venusAge = Math.floor(this.age() / .62);
    return venusAge;
  }
  mars(){
    let marsAge = Math.floor(this.age() / 1.88);
    return marsAge;
  }
  jupiter(){
    return this.age();
  }



}