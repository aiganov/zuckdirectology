/** Увеличение картинок **/


$('.image-zoom').magnificPopup({
  type: 'image'

});


$('.projects-slider').slick({
  dots: false,
  speed: 300,
  infinite: false,
  prevArrow: $('.project-prev'),
  nextArrow: $('.project-next')
});

        
$('.cases-slider').slick({
  dots: false,
  speed: 300,
  infinite: false,
  prevArrow: $('.case-prev'),
  nextArrow: $('.case-next')
});

/* ФИЛЬТР МОБИЛЬНОЙ ТАБЛИЦЫ */

$('#sel').on('change', function () {
  var val = $(this).val(),
      target = '.' + val;
  
  $('.choice').hide();
  $(target).show();
});

