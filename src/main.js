import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { AgeCalculator, GACalculator } from './gaCalculator';
import { LifeStyle, methodCaller } from './lifeStyle';

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    let smoker = $("#smoker").is(":checked"); 
    let neighborhood = $(".neighborhood:checked").val();
    let activity = $(".activity:checked").val();
    let birthdate = new Date($(".bday").val());
    let year = (birthdate).getFullYear();
    let month = (birthdate.getMonth() + 1);
    let day = (birthdate.getDate() + 1);
    let age = new AgeCalculator(year, month, day).age();
    let userInput = new LifeStyle(smoker, neighborhood, activity, age);
    let yearsLeft = methodCaller(userInput);
    let spaceAge = new GACalculator(age);
    let spaceYearsLeft =  new GACalculator(yearsLeft);


    console.log(spaceAge.jupiter(), spaceYearsLeft.jupiter());
  });
});

