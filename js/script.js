// Burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('nav__link');

burger.addEventListener('click',

function() {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');

})

menuLinks.forEach(function(element) {
  element.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})

// Tabs

let tabsBtn = document.querySelectorAll('.process__btn');
let tabsItem = document.querySelectorAll('.process__article-descr-wrapper');
let tabsImage = document.querySelectorAll('.process__image');

tabsBtn.forEach(function(element) {

  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {
      btn.classList.remove('process__btn--active')
    })

    e.currentTarget.classList.add('process__btn--active');

    tabsItem.forEach(function(item) {
      item.classList.remove('process__article-descr-wrapper--active')
    })

    document.querySelector(`[data-target='${path}']`).classList.add('process__article-descr-wrapper--active');

    tabsImage.forEach(function(image) {
      image.classList.remove('process__image--active')
    })

    document.querySelector(`[data-image='${path}']`).classList.add('process__image--active')

  })
})

// Swiper

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
    slidesOffsetAfter: 0,
  },
});

// Accordion

new Accordion('.accordion-container', {

});




// Searchbar

let searchForm = document.querySelector('.header__search');
let searchBtn = document.querySelector('.header__search-btn');
let searchClose = document.querySelector('.header__close-btn');

searchBtn.addEventListener('click', function() {
  searchForm.classList.add('header__search--active')
});

searchClose.addEventListener('click', function() {
searchForm.classList.remove('header__search--active')
});

