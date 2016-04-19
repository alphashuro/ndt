function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    var shrinkOn = 30;
    var header = $("#nav-logo");
    var sliderText = $('.slider-inner');
    if (distanceY > shrinkOn) {
      header.removeClass("bigger");
      sliderText.addClass('show');
    } else {
      header.addClass("bigger");
      sliderText.removeClass('show');
    }

    var nav = $('#main-menu');

    var services = document.getElementById('services');
    var servicesToTop = services.getBoundingClientRect().top;
    if(servicesToTop > 100) {
      nav.removeClass('red');
    }
    if(servicesToTop < 100) {
      nav.addClass('red');
    }

    var safety = document.getElementById('safety');
    var safetyToTop = safety.getBoundingClientRect().top;
    if(safetyToTop < 100) {
      nav.removeClass('red');
    }
    var portfolio = document.getElementById('portfolio');
    var portfolioToTop = portfolio.getBoundingClientRect().top;
    if(portfolioToTop < 100) {
      nav.addClass('red');
    }
    var getInTouch = document.getElementById('get-in-touch');
    var getInTouchToTop = getInTouch.getBoundingClientRect().top;
    if(getInTouchToTop < 100) {
      nav.removeClass('red');
    }
  })
  var car = $('#service-slides');
  car.owlCarousel({
    singleItem: true,
    autoPlay: true,
    autoHeight: true,
    transitionStyle: 'fade',
    slideSpeed : 300,
    paginationSpeed : 400
  });

  $('#slideNdt').on('click', function() {
    car.trigger('owl.jumpTo', 0);
  });
  $('#slideHeat').on('click', function() {
    car.trigger('owl.jumpTo', 1);
  });
  $('#slideSand').on('click', function() {
    car.trigger('owl.jumpTo', 2);
  });
};

window.onload = init();
