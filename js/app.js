$(function () {
    $("header .headerchart ul li a").on({
        mouseover: function () {
            $(".backcolor").stop(true).animate({
                top: '10vh'
            }, 200, 'linear')
        },
    });

    $(".backcolor").on({
        mouseover: function () {
            $(".backcolor").stop(true).animate({
                top: '10vh'
            }, 200, 'linear')
        },
        mouseout: function () {
            $(".backcolor").stop(true).animate({
                top: '-50vh'
            }, 200, 'linear')
        },
    });


    $("header .headerchart .headicon2 a i").on('click',function(){
        $(".backcolor").stop(true).animate({
            top:'10vh'     
        },200,'linear')
    });

    
$('.moviechart').slick({
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll:1,
    responsive: [
        {
            breakpoint: 1491,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1128,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
  
   
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.eventimg').slick({
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll:1,
    responsive: [
        {
            breakpoint: 1342,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
                  {
            breakpoint: 1128,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
        
   
      {
        breakpoint: 791,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  //////
});
