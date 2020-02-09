import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    // let userYear = parseInt($('input#year').val());
    // let userMonth = parseInt($('input#month').val());
    // let userDay = parseInt($('input#day').val());

    // let userCalculator = new dayCalculator(userYear, userMonth, userDay);
    // $('#showdayresult').html(userCalculator.checkValidDate());
    let smoker = $("#smoker").is(":checked"); 
    let age = parseInt($("#ageInput").val());
    let neighborhood = $(".neighborhood:checked").val();
    let activity = $(".activity:checked").val();
    let 

    console.log(activity);
  
  
  });
});