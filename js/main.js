

document.addEventListener('DOMContentLoaded', function () {
'use strict';

/*constant in mobile browser*/

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}

window.addEventListener('resize', appHeight);
appHeight();


/*Animate css script*/

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });


/*lazyload*/
  const images = document.querySelectorAll('.img-lazy');

  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  }

  function handleImg(myImg, observer) {
      myImg.forEach(myImgSingle => {          // console.log(myImgSingle.intersectionRatio);
          if (myImgSingle.intersectionRatio > 0) {
              loadImage(myImgSingle.target);
          }
      })
  }

  function loadImage(image) {
      image.src = image.getAttribute('data');
      observer.unobserve(image);
  }

  const observer = new IntersectionObserver(handleImg, options);

  images.forEach (img => {
      observer.observe(img);
  })

/*Menu toggler*/

const menuHeader = document.querySelector('.header__menu');
const menuActive = document.querySelector('.menu_active__icon-text');
const rotatedIcon = document.querySelector('.menu__icon__line-y');
const menu = document.querySelector('.menu_active');
const menuLink = document.querySelectorAll('.menu_active__nav__link');


menuHeader.addEventListener("click", function() {
    const rotatedIcon = document.querySelector('.menu__icon__line-y');
    const menu = document.querySelector('.menu_active');

    if (menu.classList.contains('menu_active_close') & rotatedIcon.classList.contains('rotate_menu_icon') ) {
        rotatedIcon.classList.replace('rotate_menu_icon', 'unrotate_menu_icon');
        setTimeout(showMenu, 100);
        function showMenu() {
          menu.classList.replace('menu_active_close', 'menu_active_open');
          menu.classList.remove("hidden");
          menu.style.display = "flex";
        }
    }
});


menuActive.onclick = () => {
  closeMenu();
}


for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = () => {
  closeMenu();
  }
}


function closeMenu() {
  if (menu.classList.contains('menu_active_open') & rotatedIcon.classList.contains('unrotate_menu_icon')) {

    menu.classList.replace('menu_active_open', 'menu_active_close');

    setTimeout( hideMenu, 400);
    function hideMenu() {
      menu.classList.add("hidden");
      menu.style.display = "flex";
    }
    setTimeout( unRotate, 700);
    function unRotate() {
      rotatedIcon.classList.replace('unrotate_menu_icon', 'rotate_menu_icon');
    }
  }
}


/*request form */
const request = document.querySelectorAll('#requestBtn'); //заказать звонок
const modal = document.querySelector('.modal');
const thank = document.querySelector('.thank');
const app = document.querySelector('.app');
const appClose = document.querySelector('.app__close');

function openForm() {
  for ( let i = 0; i < request.length; i++ ) {
      request[i].onclick = () => {
        showForm();
        yandexMetric(this);
        googleAnalytics(this);
    }
  }
}

  appClose.onclick = () => {
    hideForm();
  }

async function yandexMetric(id) {
  let open_yandex = id.getAttribute("data-open-ya");
  if (open_yandex != undefined || open_yandex != "" || open_yandex != null) {
  yaCounter87216786.reachGoal(open_yandex);
  }
}

async function googleAnalytics(id) {
  let open_google = id.getAttribute("data-open-go");
  if (open_google != undefined || open_google != "" || open_google != null) {
  gtag('event', 'open',
  {
  'event_category': open_google,
  'event_action': 'open'
  });
  }
}

function showForm() {
  if (app.classList.contains("hidden-form")) {
      app.classList.remove("hidden-form");
      document.body.classList.toggle("body-shadow");
  }
}

function hideForm() {
  app.classList.add("hidden-form");
  document.body.classList.toggle("body-shadow");
}

openForm();


const swiper = new Swiper('.first-slider', {
  // Optional parameters
  // cssMode: true,
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  speed: 1500,
  autoplay: {
          delay: 7000,
        },
  keyboardControl: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.interrior-pagination-dots',
    type: 'bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.interior__arrows__arrow-right',
    prevEl: '.interior__arrows__arrow-left',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      }
  },

});


const portfolioSwiper = new Swiper('.portfolio__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  effect: "slide",
/*  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },*/
  speed: 1000,
  spaceBetween: 100,
  slidesPerView: 1,
  keyboardControl: true,
  disableOnInteraction: true,

  // If we need pagination
  pagination: {
    el: '.portfolio-pagination-dots',
    type: 'bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.portfolio-button-next',
    prevEl: '.portfolio-button-prev',
  },

});




const workTextSwiper = new Swiper('.thumbSwiper', {
  // Optional parameters
  // cssMode: true,
  // direction: 'horizontal',
  loop: true,
  effect: 'slide',
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 200,
  freeMode: true,
  watchSlidesProgress: true,
  allowTouchMove: false,


});

const workSwiper = new Swiper('.work-stages__slider', {
  // cssMode: true,
  direction: 'horizontal',
  loop: true,
  effect: 'slide',
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 25,
  leftedSlides: true,
  slideToClickedSlide: true,
  keyboardControl: true,
  thumbs: {
    swiper: workTextSwiper,
  },
  pagination: {
    el: '.work-stages-dots',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    1441: {
      slidesPerView: 2.1,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 25,
    }
  },

  navigation: {
    nextEl: '.work-stages__slider__control_right',
    prevEl: '.work-stages__slider__control_left',
  }

});




/*const portItem = new Swiper('.porfolio__gallery__item', {
direction: 'horizontal',
effect: 'slide',
speed: 1000,
slidesPerView: 1,
  thumbs: {
    swiper: portThumb,
  },
});*/

const reviewSwiper = new Swiper('.reviews__slider__wrapper', {
  // Optional parameters
  cssMode: true,
  direction: 'horizontal',
  loop: true,
    autoplay: {
          delay: 7000,
        },
  effect: 'slide',
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,

  pagination: {
    el: '',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.reviews__slider__control_right',
    prevEl: '.reviews__slider__control_left',
  },

  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 0,
    }
  },

});


const topPortSwiper = new Swiper('.porfolio__gallery', {
  // Optional parameters
  // cssMode: true,
  direction: 'horizontal',
  loop: true,
  effect: 'slide',
  // speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: 25,

});


const designPriceSwiper = new Swiper('.design-price__slider', {
  speed: 500,
  breakpoints: {
    0: {
      slidesPerView: 'auto',
      spaceBetween: 3000,
      centeredSlides: true,
      // loop: true,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    }
  },
  pagination: {
    el: '.design-price-dots',
    type: 'bullets',
    clickable: true,
  },
});








// ВОТ ЗДЕСЬ ХОТЕЛ РЕАЛИЗОВАТЬ ОТКРЫТИЕ МОДАЛЬНОГО ОКНА СО СЛАЙДЕРОМ

// benefitSlider

/*gallery*/

// const topModal = document.querySelector('#topModal');//Порядковый номер у модальных окон и кнопок передается через цикл в модиксе
const topModal1 = document.querySelector('#topModal1');
const topModal2 = document.querySelector('#topModal2');
const topModal3 = document.querySelector('#topModal3');
const topModal4 = document.querySelector('#topModal4');
const topModal5 = document.querySelector('#topModal5');
const topModal6 = document.querySelector('#topModal6');
const topModal7 = document.querySelector('#topModal7');
const topModal8 = document.querySelector('#topModal8');
// const openModalTop = document.querySelectorAll('#topGalleryBtn');
const openModalTop1 = document.querySelectorAll('#topGalleryBtn1');
const openModalTop2 = document.querySelectorAll('#topGalleryBtn2');
const openModalTop3 = document.querySelectorAll('#topGalleryBtn3');
const openModalTop4 = document.querySelectorAll('#topGalleryBtn4');
const openModalTop5 = document.querySelectorAll('#topGalleryBtn5');
const openModalTop6 = document.querySelectorAll('#topGalleryBtn6');
const openModalTop7 = document.querySelectorAll('#topGalleryBtn7');
const openModalTop8 = document.querySelectorAll('#topGalleryBtn8');

const closeSliderTop = document.querySelectorAll('#topCloseGallery');
const modalBtn = document.querySelectorAll('.portfolio-button-wrapper');


// const openModalBottom = document.querySelectorAll('#bottomGalleryBtn');
const openModalBottom1 = document.querySelectorAll('#bottomGalleryBtn1');
const openModalBottom2 = document.querySelectorAll('#bottomGalleryBtn2');
// const bottomModalWindow = document.querySelector('#bottomModal');
const bottomModal1 = document.querySelector('#bottomModal1');
const bottomModal2 = document.querySelector('#bottomModal2');
const closeSliderBottom = document.querySelectorAll('#bottomCloseGallery');

  async function openGallerySlider(elem, cross, closer) {
    for (let i = 0; i < cross.length; i++) {
      cross[i].addEventListener("click", function(event){
        elem.style.display = "flex";
        document.body.classList.toggle("body-shadow");
        for (let close of closer) {
          close.onclick = () => {
            elem.style.display = "none";
            document.body.classList.toggle("body-shadow");
            modalBtn.classList.toggle("portfolio-button-wrapper-disable");
      }
        }

    })}
  }

  // openGallerySlider(topModal, openModalTop, closeSliderTop);
  openGallerySlider(topModal1, openModalTop1, closeSliderTop);
  openGallerySlider(topModal2, openModalTop2, closeSliderTop);
  openGallerySlider(topModal3, openModalTop3, closeSliderTop);
  openGallerySlider(topModal4, openModalTop4, closeSliderTop);
  openGallerySlider(topModal5, openModalTop5, closeSliderTop);
  openGallerySlider(topModal6, openModalTop6, closeSliderTop);
  openGallerySlider(topModal7, openModalTop7, closeSliderTop);
  openGallerySlider(topModal8, openModalTop8, closeSliderTop);

//нижняя галерея "Реализация"
  // openGallerySlider(bottomModalWindow, openModalBottom, closeSliderBottom);
  openGallerySlider(bottomModal2, openModalBottom1, closeSliderBottom);
  openGallerySlider(bottomModal1, openModalBottom2, closeSliderBottom);


/*design-modal on smart screen*/
// const designPrice = document.querySelector('.design-price');

async function openModal() {

const openDesignModal_1  = document.querySelector('.design-price__card-bottom__btn-1');
const openDesignModal_2  = document.querySelector('.design-price__card-bottom__btn-2');
const openDesignModal_3  = document.querySelector('.design-price__card-bottom__btn-3');

const designModalWindow_1 = document.querySelector('.design-price__card-modal-1');
const designModalWindow_2 = document.querySelector('.design-price__card-modal-2');
const designModalWindow_3 = document.querySelector('.design-price__card-modal-3');

const closeDesignModal_1 = document.querySelector('#closeDesignModal_1');
const closeDesignModal_2 = document.querySelector('#closeDesignModal_2');
const closeDesignModal_3 = document.querySelector('#closeDesignModal_3');

openDesignModal_1.onclick = () => {
    if (designModalWindow_1.classList.contains("hidden-des-mod")) {
      designModalWindow_1.classList.remove("hidden-des-mod");
      designModalWindow_2.classList.add("hidden-des-mod");
      designModalWindow_3.classList.add("hidden-des-mod");
      closeDesignModal_1.classList.remove("hidden-des-mod");
      document.body.classList.toggle("body-shadow");
    }
    closeDesignModal_1.onclick = () => {
      designModalWindow_1.classList.add('design-pr-translate');
      closeDesignModal_1.classList.add("hidden-des-mod");
      document.body.classList.toggle("body-shadow");
      setTimeout(hideDesignModal, 1000);
      function hideDesignModal() {
        designModalWindow_1.classList.add("hidden-des-mod");
        designModalWindow_1.classList.remove('design-pr-translate');
      }

  }
}

openDesignModal_2.onclick = () => {
      if (designModalWindow_2.classList.contains("hidden-des-mod")) {
        designModalWindow_2.classList.remove("hidden-des-mod");
        designModalWindow_1.classList.add("hidden-des-mod");
        designModalWindow_3.classList.add("hidden-des-mod");
        closeDesignModal_2.classList.remove("hidden-des-mod");
        document.body.classList.toggle("body-shadow");
      }
      closeDesignModal_2.onclick = () => {
        designModalWindow_2.classList.add('design-pr-translate');
        closeDesignModal_2.classList.add("hidden-des-mod");
        document.body.classList.toggle("body-shadow");
        setTimeout(hideDesignModal, 1000);
        function hideDesignModal() {
        designModalWindow_2.classList.add("hidden-des-mod");
        designModalWindow_2.classList.remove('design-pr-translate');
        }
  }
}

openDesignModal_3.onclick = () => {
      if (designModalWindow_3.classList.contains("hidden-des-mod")) {
        designModalWindow_3.classList.remove("hidden-des-mod");
        designModalWindow_1.classList.add("hidden-des-mod");
        designModalWindow_2.classList.add("hidden-des-mod");
        closeDesignModal_3.classList.remove("hidden-des-mod");
        document.body.classList.toggle("body-shadow");
      }
      closeDesignModal_3.onclick = () => {
      designModalWindow_3.classList.add('design-pr-translate');
      closeDesignModal_3.classList.add("hidden-des-mod");
      document.body.classList.toggle("body-shadow");
      setTimeout(hideDesignModal, 1000);
      function hideDesignModal() {
        designModalWindow_3.classList.add("hidden-des-mod");
        designModalWindow_3.classList.remove('design-pr-translate');
      }
  }
}

}

openModal();




function benefitSlider() {

let bnfBlock = document.querySelector('.benefits__container__block');

window.onload = () => {
  let slideInterval = setInterval(slideCycle, 5000);
  function slideCycle() {
    plusSlides(1);
  }
}

document.querySelector('.benefit-dot-1').addEventListener("mouseover", function () {
  currentSlide(1);
});
document.querySelector('.benefit-dot-2').addEventListener("mouseover", function () {
  currentSlide(2);
});
document.querySelector('.benefit-dot-3').addEventListener("mouseover", function () {
  currentSlide(3);
});
document.querySelector('.benefit-dot-4').addEventListener("mouseover", function () {
  currentSlide(4);
});
document.querySelector('.benefit-dot-5').addEventListener("mouseover", function () {
  currentSlide(5);
});

let benefitNext = document.querySelector('.benefit-next');

benefitNext.onclick = () => {
    plusSlides(1);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
showSlides(slideIndex += n);
}

function currentSlide(n){
showSlides(slideIndex = n);
}

function showSlides(n){
var i;
var slides=document.getElementsByClassName("benefit-slide");
var dots=document.getElementsByClassName("benefit-dot");

if (n > slides.length) {
slideIndex = 1;
}
if (n < 1) {
slideIndex = slides.length;
}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slides[slideIndex -1].style.display="block";
dots[slideIndex -1].classList.toggle("fade-slide");

}

 } //benefitSlider end

benefitSlider();

}); //DOMContentLoaded End



/*JQUERY*/

/*hover-effect for social icons*/

$(document).ready(function() {

$('.social-icon').hover(function() {
    let child = $(this).children().children();
    child.toggleClass('svg-fill-red');
});

$('.social-icon-top').hover(function() {
    let child = $(this).children().children();
    child.toggleClass('svg-fill-white');
});

/*height of menu_active equal height interior*/

/*let interiorHeight = $('.interior').height();
$('.menu_active').css("height", interiorHeight);*/

  $('#logo').on('click', () => {
    $('html,body').animate({
      scrollTop: 0
    },500);
  });


$(".btn-click").click(function() {
  $('.btn-parent-next').hide();
  $(this).parent().parent().next().show();
})

// phone mask
$('#phone1').mask("+7 (999) 999 99 99");
$('#phone2').mask("+7 (999) 999 99 99");
$('#phone3').mask("+7 (999) 999 99 99");
$('#phone4').mask("+7 (999) 999 99 99");
$('#phone5').mask("+7 (999) 999 99 99");


/*ajax form*/

async function sendToggleForm(id) {

    $(id).submit(function () {
    var form = $(this);
    var error = false;
    if (!error) {
      var data = form.serialize();
      $.ajax({
        type: 'POST',
        url: 'send.php',
        dataType: 'html',
        data: data,
        beforeSend: function (data) {
          form.find('input[type="submit"]').attr('disabled', 'disabled');
        },
        success: function (data) {
          if (data['error']) {
            alert(data['error']);
          } else {
            $(".thank").removeClass('hidden-form');
            $(".app").addClass('hidden-form');
            setTimeout(function () {
              $(".thank").addClass('hidden-form');
              $('body').toggleClass("body-shadow");

            }, 3100);

            let send_yandex = form.attr("data-send-ya");
            let send_google = form.attr("data-send-go");

            if (send_yandex != undefined || send_yandex != "" || send_yandex != null) {
              yaCounter87216786.reachGoal(send_yandex);
              // ym(87216786,'reachGoal', send_yandex);
            }

            if (send_google != undefined || send_google != "" || send_google != null) {
              gtag('event', 'send',
               {
                'event_category': send_google,
                'event_action': 'send'
               });
            }

            //dataLayer.push({'event': 'formsend'}); //GTM
            // //yaCounter87216786.reachGoal(ym(87216786,'reachGoal','send-zayavka')); //отправка метрики яндексу

            form.find('input, textarea').not(':input[type=button], :input[type=submit], :input[type=reset], :input[type=hidden], :input[name=header]').val('');
          }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          alert(xhr.status);
          alert(thrownError);
        },
        complete: function (data) {
          form.find('input[type="submit"]').prop('disabled', false);
        }
      });
    }
    return false;
  });

 } //sendForm end

 function sendForm(id) {

    $(id).submit(function () {
    var form = $(this);
    var error = false;
    if (!error) {
      var data = form.serialize();
      $.ajax({
        type: 'POST',
        url: 'send.php',
        dataType: 'html',
        data: data,
        beforeSend: function (data) {
          form.find('input[type="submit"]').attr('disabled', 'disabled');
        },
        success: function (data) {
          if (data['error']) {
            alert(data['error']);
          } else {
            $(".app").addClass('hidden-form');
            $('body').addClass("body-shadow");
            $(".thank").removeClass('hidden-form');
            setTimeout(function () {
              $(".thank").addClass('hidden-form');
              $('body').removeClass("body-shadow");

            }, 3100);

            form.find('input, textarea').not(':input[type=button], :input[type=submit], :input[type=reset], :input[type=hidden], :input[name=header]').val('');

            let send_yandex = form.attr("data-send-ya");
            let send_google = form.attr("data-send-go");
            // let open_yandex = reqst.attr("data-open-ya");
            // let open_google = reqst.attr("data-open-go");



            if (send_yandex != undefined || send_yandex != "" || send_yandex != null) {
              // ym(87216786,'reachGoal', send_yandex);
              yaCounter87216786.reachGoal(send_yandex);
            }
/*            if (open_yandex != undefined || open_yandex != "" || open_yandex != null) {
              ym(87216786,'reachGoal', open_yandex);
            }*/

            
            if (send_google != undefined || send_google != "" || send_google != null) {
              gtag('event', 'send',
               {
                'event_category': send_google,
                'event_action': 'send'
               });
            }

/*            if (open_google != undefined || open_google != "" || open_google != null) {
              gtag('event', 'open',
               {
                'event_category': open_google,
                'event_action': 'open'
               });
            }*/
            //dataLayer.push({'event': 'formsend'}); //GTM
            // //yaCounter87216786.reachGoal(ym(87216786,'reachGoal','send-zayavka')); //отправка метрики яндексу
          }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          alert(xhr.status);
          alert(thrownError);
        },
        complete: function (data) {
          form.find('input[type="submit"]').prop('disabled', false);
        }
      });
    }
    return false;
  });

 }


sendToggleForm('#appForm');
sendForm('#benefitsForm');
sendForm('#consultForm');
sendForm('#designForm');
sendForm('#interiorForm');

});






