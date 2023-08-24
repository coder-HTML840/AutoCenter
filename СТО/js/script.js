"use strict";

//Реализация навигации header
const mainWrapper = document.querySelector('.wrapper')
const headerLinkMain = document.getElementById('header-link-main');
const headerLinkServices = document.getElementById('header-link-services');
const headerLinkContacts = document.getElementById('header-link-contacts');

const aboutUs = document.querySelector('.about-us');
const services = document.querySelector('.services');
const footer = document.querySelector('.footer');

function scrollToElem(elem) {
  let getTopCoords = elem.getBoundingClientRect().top;
  mainWrapper.scrollTo({
    top: getTopCoords + mainWrapper.scrollTop - 140,
    behavior: 'smooth',
  });
};

headerLinkMain.addEventListener('click', function(e) {
  scrollToElem(aboutUs);
});
headerLinkServices.addEventListener('click', function(e) {
  scrollToElem(services);
});
headerLinkContacts.addEventListener('click', function(e) {
  scrollToElem(footer);
});

//Бургер
const burger = document.querySelector('.header__burger');
const headerListLinks = document.querySelector('.header-list-links');
const headerLink = document.querySelector('.header-list-links__link');

burger.addEventListener('click', function(e) {
  burger.classList.toggle('active');
  headerListLinks.classList.toggle('active');
});

headerListLinks.addEventListener('click', function(e) {
  if (burger.classList.contains('active')) {
    if(e.target.closest('.header-list-links__link')) {
      burger.classList.toggle('active');
      headerListLinks.classList.toggle('active');
    } else {
      return;
    }
  } else {
    return;
  }
});

//Работаем над кнопкой телефона
const phoneBtn = document.querySelector('.phone-btn');
const phoneBtn1 = document.querySelector('.phone-btn__1');
const phoneBtn2 = document.querySelector('.phone-btn__2');

phoneBtn.addEventListener('mouseenter', function(e) {
  phoneBtn1.classList.add('phone-btn-1-hover');
  phoneBtn2.classList.add('phone-btn-2-hover');
});
phoneBtn.addEventListener('mouseleave', function(e) {
  phoneBtn1.classList.remove('phone-btn-1-hover');
  phoneBtn2.classList.remove('phone-btn-2-hover');
});

const phoneBtnBlokWrap = document.querySelector('.phone-btn-blok__wrap');
const btnCloseBlokPhone = document.querySelector('.phone-btn-blok-table__btn-close');
const phoneBtnBlok = document.querySelector('.phone-btn-blok');

phoneBtn.addEventListener('click', function(e) {
  phoneBtnBlokWrap.classList.add('_active');
  phoneBtnBlok.classList.add('_transition');
});
btnCloseBlokPhone.addEventListener('click', function(e) {
  phoneBtnBlok.classList.remove('_transition');
  phoneBtnBlok.classList.add('_transition-reverse');

  function removeClassesActiveTransitionReverse() {
    phoneBtnBlokWrap.classList.remove('_active');
    phoneBtnBlok.classList.remove('_transition-reverse');
  }
  setTimeout(removeClassesActiveTransitionReverse, 700);
});