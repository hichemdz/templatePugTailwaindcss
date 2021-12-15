$(function () {

    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
       Infinity:true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        center:true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            800: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }

    })

    $(function() {  
        $("body").niceScroll();
    });

    wow = new WOW(
        {
          animateClass: 'animated',
          offset:       100,
          callback:     function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
          }
        }
      );
      wow.init();
      
}())