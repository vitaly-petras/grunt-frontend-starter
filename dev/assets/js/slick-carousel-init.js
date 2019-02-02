$(document).ready(function(){

    //intro carousel
    $("#js-intro-carousel").slick({
        dots: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows:true,
        lazyLoad: "progressive",
        //asNavFor: '#js-synced-carousel-dots',
        //prevArrow: '<span class="slick-prev"><i class="icon icon-carousel-prev"></i></span>',
        //nextArrow: '<span class="slick-next"><i class="icon icon-carousel-next"></i></span>',
        //swipeToSlide:true,
        //focusOnSelect:true,
         responsive:[
            {
                breakpoint: 1024,
                settings: {
                speed:150
              }
            },
            /*{
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }*/
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /*
    prolinani
    $carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $carousel.find('[data-slick-index="' + currentSlide + '"]').fadeTo('fast',0);
    });
    */
});


//object fit images after lazyloaded
$(function(){
    $(".slick-slider").on('lazyLoaded', function(event, slick, image, imageSource){
        objectFitImages(image);
    });
});
