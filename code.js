$(document).on('scroll', function () {

  const windowHeight = $(window).height()
  const scrollValue = $(this).scrollTop();
  // console.log(scrollValue);


  //Pierwsza sekcja

  const $art1 = $('.art1');
  const art1FromTop = $art1.offset().top
  const art1Height = $art1.outerHeight()

  const $art2 = $('.art2');
  const art2FromTop = $art2.offset().top
  // console.log(art2FromTop);
  const art2Height = $art2.outerHeight()
  // console.log(art2Height);

  const $art3 = $('.art3');
  const art3FromTop = $art3.offset().top
  const art3Height = $art3.outerHeight()

  const $art4 = $('.art4');
  const art4FromTop = $art4.offset().top
  const art4Height = $art4.outerHeight()


  if (scrollValue > art1FromTop + art1Height - windowHeight) {
    console.log("jestem art 1 wywietlony w całości");
    $art1.addClass('active');
  }


  if (scrollValue > art2FromTop + art2Height - windowHeight) {
    console.log("jestem art 2 wywietlony w całości");
    $art2.addClass('active');
  }

  if (scrollValue > art3FromTop + art3Height - windowHeight) {
    console.log("jestem art 3 wywietlony w całości");
    $art3.addClass('active');
  }

  if (scrollValue > art4FromTop + art4Height - windowHeight) {
    console.log("jestem art 4 wywietlony w całości");
    $art4.addClass('active');
  }

  //Druga sekcja

  const $op1 = $('.op1');
  const $op2 = $('.op2');
  const $op3 = $('.op3');

  const op1FromTop = $op1.offset().top;
  const op2FromTop = $op2.offset().top;
  const op3FromTop = $op3.offset().top;

  const op1Height = $op1.height();
  const op2Height = $op2.height();
  const op3Height = $op3.height();


  if (scrollValue > op1FromTop + op1Height / 2 - windowHeight) {
    $op1.addClass('active');
    console.log('załączeni animacji op1');
  }

  if (scrollValue > op2FromTop + op2Height / 2 - windowHeight) {
    $op2.addClass('active');
    console.log('załączeni animacji op2');
  }


  if (scrollValue > op3FromTop + op3Height / 2 - windowHeight) {
    $op3.addClass('active');
    console.log('załączeni animacji op3');
  }


})

/*do wybranego miejsca scroll*/

$('.aboutj').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.about').offset().top
  }, 500)
})

$('.servicesj').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.services').offset().top
  }, 500)
})

$('.galleryj').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.gallery').offset().top
  }, 500)
})

$('.blogj').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.blog').offset().top
  }, 500)
})

$('.contactj').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.contact').offset().top
  }, 500)
})

$('.headerj').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.header').offset().top
  }, 500)

})




$('.btnheader').on("click", function () {
  $('.modal-wrap').addClass('active');

})

$('.hide').on("click", function () {
  $('.modal-wrap').removeClass('active');

})


/*galeria view more*/


/*menu burger*/

$(".burger").on("click", function () {
  $(".fas, aside").toggleClass("show")
})