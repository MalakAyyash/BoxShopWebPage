
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // start section eleven

    $(document).ready(function() {
        var owl2 = $('#ten-owl-carousel');
        $('#prev-btn').click(function() {
          owl2.trigger('prev.owl.carousel');
        });
        $('#next-btn').click(function() {
          owl2.trigger('next.owl.carousel');
        });
      });
      
      $(document).ready(function() {
        var owl1 = $('#eight-owl-carousel');
        $('#prev1-btn').click(function() {
          owl1.trigger('prev.owl.carousel');
        });
        $('#next1-btn').click(function() {
          owl1.trigger('next.owl.carousel');
        });
      });

      $(document).ready(function() {
        var owl1 = $('#six-owl-carousel');
        $('#prev6-btn').click(function() {
          owl1.trigger('prev.owl.carousel');
        });
        $('#next6-btn').click(function() {
          owl1.trigger('next.owl.carousel');
        });
      });
      $(document).ready(function() {
        var owl1 = $('#five-owl-carousel');
        $('#prev5-btn').click(function() {
          owl1.trigger('prev.owl.carousel');
        });
        $('#next5-btn').click(function() {
          owl1.trigger('next.owl.carousel');
        });
      });
      
    $(document).ready(function(){
    var owl = $('.twelve-owl-carousel');
    $('#prev-twelve-btn').click(function() {
        owl.trigger('prev.owl.carousel');
    });
    $('#next-twelve-btn').click(function() {
        owl.trigger('next.owl.carousel');
    });
    });


    $(document).ready(function() {
        $("#ten-owl-carousel").owlCarousel({
          // specify the Owl Carousel options here
          loop: true,
          margin: 10,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            300: {
              items: 2,
              nav: false
            },
            600: {
              items: 3,
              nav: false
            },
            1000: {
              items: 4,
              nav: true,
             
            }
          }
        });
      });
      $(document).ready(function() {
        $("#five-owl-carousel").owlCarousel({
          // specify the Owl Carousel options here
          loop: true,
          margin: 10,
          autoplay:true,
          responsiveClass: true,
     
          responsive: {
            0: {
              items: 2,
              nav: true
            },
            600: {
              items: 3,
              nav: false
            },
            1000: {
              items: 8,
              nav: true,
             
            }
          }
        });
      });

      $(document).ready(function() {
        $("#eight-owl-carousel").owlCarousel({
          // specify the Owl Carousel options here
          loop: true,
          margin: 10,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            300: {
              items: 2,
              nav: false},
            600: {
              items: 3,
              nav: false
            },
            1000: {
              items: 4,
              nav: true,
             
            }
          }
        });
      });


      
      $(document).ready(function() {
        $("#nine-owl-carousel").owlCarousel({
        loop:true,
        margin:15,
        rows:2,
        items:5,
        

        responsive:{
            300:{
                items:2
            },
           
           600:{
                items:2
            },
            800:{
                items:3
            },
            
            1000:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
});

$(document).ready(function() {
    $("#elven-owl-carousel").owlCarousel({
    loop:true,
    margin:15,
    rows:2,
    items:5,
    

    responsive:{
        300:{
            items:1
        },
       
       600:{
            items:2
        },
        800:{
            items:3
        },
        
        1000:{
            items:4
        },
        1200:{
            items:5
        }
    }
});
});
$(document).ready(function() {
    $("#six-owl-carousel").owlCarousel({
    loop:true,
    margin:15,
    rows:2,
    items:5,
    

    responsive:{
      0:{
        items:2
      },
        300:{
            items:2
        },
       
       600:{
            items:2
        },
        800:{
            items:3
        },
        
        1000:{
            items:4
        },
        1200:{
            items:5
        }
    }
});
});
$(document).ready(function() {
  $("twelve-owl-carousel").owlCarousel({
  loop:true,
  margin:15,
  rows:2,
  items:5,
  

  responsive:{
      300:{
          items:1
      },
     
     600:{
          items:2
      },
      800:{
          items:3
      },
      
      1000:{
          items:4
      },
      1200:{
          items:5
      }
  }
});
});
$(document).ready(function() {
  $("six2-owl-carousel").owlCarousel({
  loop:true,
  margin:15,
  items:1,
 

});
});
$(document).ready(function(){
  var owl = $('.six2-owl-carousel');
  $('#prev-six2-btn').click(function() {
      owl.trigger('prev.owl.carousel');
  });
  $('#next-six2-btn').click(function() {
      owl.trigger('next.owl.carousel');
  });
  });

  var futureDate = moment(new Date(2016, 04, 08, 23, 59, 59));

setInterval(function() {
  var ms = moment().diff(moment(futureDate));
  var duration = moment.duration(ms).format("yy-MM-dd hh:mm:ss");
  $("#time").text(duration);
}, 200);

