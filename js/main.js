$(function(){

    $(".top__slider").slick({
        autoplay:true,
        dots:true,
        arrows:false,
        fade:true,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  dots: false
                }
              },
            ]
    })

    $(".review__slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
      
        dots:true,
        arrows:false,
        
    })
    $(".menu__btn").on('click',function(){
        $('.menu__list').toggleClass("menu__list--active");
    });

    

});