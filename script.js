$(document).ready(function(){
    $('.slider-container').slick({
      arrows: false, 
      dots: true, 
  });
});


$(document).ready(function(){
    $('.slider-container2').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true, 
      dots: true
    });
  });