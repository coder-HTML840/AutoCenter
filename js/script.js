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

//Реализация споллеров
const spollersWrap = document.querySelector('.contaner-services-box');
const spollers = document.querySelectorAll('[data-spoller]');
let selectedServicesBoxInner;
let selectedSpoller;
let selectedSpollerBody;


spollersWrap.addEventListener('click', function(e) {
  function selectedSpollerToggleClass(toggleClass) {
    if(e.target.closest('.services-box__inner')) {
      if(selectedServicesBoxInner && selectedSpoller && selectedSpollerBody && selectedServicesBoxInner != e.target.closest('.services-box__inner')) {
        selectedServicesBoxInner.classList.remove(toggleClass);
        selectedSpoller.classList.remove(toggleClass);
        selectedSpollerBody.classList.remove(toggleClass);
      };
      selectedServicesBoxInner = e.target.closest('.services-box__inner');
      selectedSpoller = selectedServicesBoxInner.children[0].children[0];
      selectedSpollerBody = selectedServicesBoxInner.children[1];
      selectedServicesBoxInner.classList.toggle(toggleClass);
      selectedSpoller.classList.toggle(toggleClass);
      selectedSpollerBody.classList.toggle(toggleClass);
    };
  };
  selectedSpollerToggleClass('_active');
});

  //сворачиваем акардеон при любом клике вне спойлеров
window.addEventListener('click', function(e) {
  let closeSpoller = function() {
    if(!e.target.closest('.services-box__inner')) {
      if(selectedServicesBoxInner) {
        selectedServicesBoxInner.classList.remove('_active');
      }
      if(selectedSpoller) {
        selectedSpoller.classList.remove('_active');
      }
      if(selectedSpollerBody) {
        selectedSpollerBody.classList.remove('_active');
      };
    };
  };
  closeSpoller();
});

  //анимируем наведение на элемент акардеона
function initMouseOver() {
  spollersWrap.addEventListener('mouseover', function(e) {
    if(e.target.closest('.services-box__inner')) {
      let selectedSpoller = e.target.closest('.services-box__inner');
      selectedSpoller.children[0].children[0].classList.add('_mouse-over');
    };
  });
}
initMouseOver();

function initMouseLeave() {
  spollersWrap.addEventListener('mouseout', function(e) {
    if(e.target.closest('.services-box__inner')) {
      let selectedSpoller = e.target.closest('.services-box__inner');
      selectedSpoller.children[0].children[0].classList.remove('_mouse-over');
    };
  });
};
initMouseLeave();

  //анимация кликов по спойлерам
function initClickTransition() {
  let selectedSpoller;
  spollersWrap.addEventListener('click', function(e) {
    if(selectedSpoller && selectedSpoller != e.target.closest('.services-box__inner')) {
      selectedSpoller.classList.remove('_click-transition')
    }
    if(e.target.closest('.services-box__inner')) {
      selectedSpoller = e.target.closest('.services-box__inner');
      selectedSpoller.classList.toggle('_click-transition');
    }
  });
  window.addEventListener('click', function(e) {
    if(!e.target.closest('.services-box__inner') && selectedSpoller) {
      selectedSpoller.classList.remove('_click-transition');
    }
  });
};
initClickTransition();





// function initMouseDownUp() {
//   let selectedSpoller;
//   function initMouseDown() {
//     spollersWrap.addEventListener('mousedown', function(e) {
//       // if(selectedSpoller) {
//       //   sele
//       // }
//       if(e.target.closest('.services-box__inner')) {
//         selectedSpoller = e.target.closest('.services-box__inner');
//         if(!selectedSpoller.classList.contains('_active')) {
//           selectedSpoller.classList.add('_mouse-down-1');
//         }
//       };
//     });
//   }
//   function initMouseUp() {
//     window.addEventListener('mouseup', function(e) {
//       console.log(selectedSpoller);
//     });
//   };
//   initMouseDown();
//   initMouseUp();
  
// };
// initMouseDownUp();











//let selectedSpoller2;
// function initClickDown() {
//   spollersWrap.addEventListener('mousedown', function(e) {
//     selectedSpoller2 = e.target.closest('.services-box__inner');
//     if(e.target.closest('.services-box__inner')) {
//       if(!selectedSpoller2.classList.contains('_active')) {
//         console.log('1');
//         selectedSpoller2.classList.add('_mouse-down-1');
//       } else {
//         console.log('2');
//         selectedSpoller2.classList.add('_mouse-down-2');
//       };
//     };
//   });
  
// };
// initClickDown();


// function initClickUp() {
//   spollersWrap.addEventListener('mouseup', function(e) {
//     if(!selectedSpoller2.classList.contains('_active')) {
//       console.log('11');
//       selectedSpoller2.classList.remove('_mouse-down-1');
//       selectedSpoller2.classList.add('_mouse-up');
//       setTimeout(() => {
//         if(!selectedSpoller2.classList.contains('_active')){
//           selectedSpoller2.classList.remove('_mouse-up');
//           window.addEventListener('mouseup', function() {
//             if(!e.target.closest('.services-box__inner')) {
//               selectedSpoller2.classList.remove('_mouse-up');
//             }
//           });
//         }
//       }, 500);

//     } else {
//       console.log('22');
//       selectedSpoller2.classList.remove('_mouse-down-2');
//       selectedSpoller2.classList.remove('_mouse-up');
//     };
//   });
// };
// initClickUp();