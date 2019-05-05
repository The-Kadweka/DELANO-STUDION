
$(".clickable1").click(function(){
    $(".hide1").slideToggle(1200);
    $(".show1").slideToggle(1500);
  });

  $(".clickable2").click(function(){
    $(".hide2").slideToggle(1200);
    $(".show2").slideToggle(1500);
  });

  $(".clickable3").click(function(){
    $(".hide3").slideToggle(1200);
    $(".show3").slideToggle(1500);
  });




$("button").click(function(event) {
    event.preventDefault();
    var person = document.getElementById('USER').value;
    alert("We are greatfull " + person + ", for contacting us!.");
  });
  
//   $("button").on('click', function(){
//     $('form').each(function(){
//       this.reset();
//     });
//   });