$('#cta2').blurjs({
  customClass: 'blurjs',
  radius: 5,
  persist: false
});
$('#cta2 .container').blurjs({
  customClass: 'blurjs',
  radius: 0
})

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
  })
};

window.onload = init();
