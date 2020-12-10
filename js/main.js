/*********  burger ************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  let user_phone = document.querySelector('.header-phone');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
  user_phone.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    let user_phone = document.querySelector('.header-phone');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
    user_phone.classList.remove('active');
  }
});

$('.main-menu__link').click(function () {
  $('.main-menu').removeClass('show');
  $('.burger').removeClass('active');
  $('.header-phone').removeClass('active');
});

/*************       about  slick       ************/
$('.about__slider').slick({
  prevArrow: $('.about__btn-left'),
  nextArrow: $('.about__btn-right'),
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  autoplay: true,
  speed: 2000
});

/*************       trip  slick       ************/
$('.trip__slider').slick({
  prevArrow: $('.trip__btn-left'),
  nextArrow: $('.trip__btn-right'),
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  autoplay: true,
  speed: 2000
});
