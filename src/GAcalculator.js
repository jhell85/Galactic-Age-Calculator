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
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }
    return age;
  }



}