$(document).ready(function() {

console.log("Hello World from main.js!");


$('.weird-monkey')
.css({opacity: 0})
    .animate({
      opacity: 1.0,
      bottom: "-1"
      }, 4000);

$(".heart").hide(0).delay(3000).animate({width: "100px"}).fadeIn(3000);
$(".heart2").hide(0).delay(3000).fadeIn(4000)
$(".heart3").hide(0).delay(3500).fadeIn(3000)
$(".heart4").hide(0).delay(3500).fadeIn(3000)

// $("#fittext1").fitText();
$(".header").parallax();


  


});