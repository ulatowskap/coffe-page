$(document).on('scroll', function () {

  const windowHeight = $(window).height()
  const scrollValue = $(this).scrollTop();

  // first

  const $art1 = $('.art1');
  const art1FromTop = $art1.offset().top
  const art1Height = $art1.outerHeight()

  const $art2 = $('.art2');
  const art2FromTop = $art2.offset().top

  const art2Height = $art2.outerHeight()


  const $art3 = $('.art3');
  const art3FromTop = $art3.offset().top
  const art3Height = $art3.outerHeight()

  const $art4 = $('.art4');
  const art4FromTop = $art4.offset().top
  const art4Height = $art4.outerHeight()


  if (scrollValue > art1FromTop + art1Height - windowHeight) {

    $art1.addClass('active');
  }


  if (scrollValue > art2FromTop + art2Height - windowHeight) {

    $art2.addClass('active');
  }

  if (scrollValue > art3FromTop + art3Height - windowHeight) {

    $art3.addClass('active');
  }

  if (scrollValue > art4FromTop + art4Height - windowHeight) {

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

  }

  if (scrollValue > op2FromTop + op2Height / 2 - windowHeight) {
    $op2.addClass('active');

  }


  if (scrollValue > op3FromTop + op3Height / 2 - windowHeight) {
    $op3.addClass('active');

  }


})

/*menu jump*/


$('a[href*=#]').click(function (e) {
  let target = $(this).attr("href");
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 600);
  return false;
});



/*menu burger*/

$(".burger").on("click", function () {
  $(".fas, aside").toggleClass("show")
})