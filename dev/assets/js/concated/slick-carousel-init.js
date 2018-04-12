$(document).ready(function(){

    //pro pouziti obrazku do pozadi pridat na img atribut "data-imgToBG"
    //priklad: <img src="assets/images/preloader.svg" data-lazy="obrazek" data-imgToBG>


    //vetsina karouselu
    $(".js-carousel").each(function(){
        var $this = $(this),
            rows = Number($this.attr("data-rows")),
            slidesPerRow = Number($this.attr("data-slides-per-row")),
            respons1 = Number($this.attr("data-resp1")),
            respons2 = Number($this.attr("data-resp2"));

        $this.slick({
            dots: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrows:true,
            rows:rows,
            lazyLoad: "progressive",
            slidesPerRow:slidesPerRow,
            /*responsive:[
                {
                    breakpoint: respons1,
                    settings: {
                    rows:rows - 1,
                    initialSlide: Math.floor((Math.random() * itemCount / (rows - 1) + 1)) -1,
                  }
                },
                {
                    breakpoint: respons2,
                    settings: {
                    rows:rows - 2,
                    initialSlide: Math.floor((Math.random() * itemCount / (rows - 2) + 1)) -1,
                  }
                },
                {
                    breakpoint: 639,
                    settings: {
                    rows:1,
                    initialSlide: initSlide,
                  }
                },
            ]*/
        });
    });


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
