$(function(){
    $('.feedback__items').slick({
        arrows:false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots:true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                dots: false,
              }
            }
          ]
      });
});