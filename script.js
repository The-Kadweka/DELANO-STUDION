$(document).ready(function(){

    $(".clickable").click(function(evt){
        $(this).children(".hide").toggle();
        $(this).children("img").toggle();
    });
 });