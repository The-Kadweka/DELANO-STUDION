
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

  $("button").click(function(omonge) {
    var client = document.getElementById('nameDetail').value;
    alert(' Dear ' + ' esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
    omonge.preventDefault();
});
//    reset my form
  $("button").on('click', function(){
    $('form').each(function(){
      this.reset();
    });
});