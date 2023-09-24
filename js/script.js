$(document).ready(function () {

  let elem = document.getElementById('galery');
  if ( $(window).width() < 751 ){
    elem.classList.add("owl-carousel");
    elem.classList.add("owl-theme");
    elem.classList.remove("grid");
  }
  else{
    
    
    elem.classList.remove("owl-carousel");
    elem.classList.remove("owl-theme");
    elem.classList.add("grid");
     $('.destroy').click(function(e){
    e.preventDefault()
    $("#owl-demo").data('owlCarousel').destroy();
  });
  }



  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    navText : ["",""]
  });



});