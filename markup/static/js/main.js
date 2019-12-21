'use strict';

(function () {
  window.hasElem = function (elem) {
    return elem !== null ? true : false;
  }
})();

// Обработка события для .menu
(function () {
  var menu = document.querySelector('.menu');
  var menuButton = document.querySelector('.nav__item--menu');
  
  if (window.hasElem(menu) && window.hasElem(menuButton)) {
    
    var menuExit = menu.querySelector('.menu__exit');
    
    menuButton.addEventListener('click', function (e) {
      e.preventDefault();
      menu.classList.toggle('menu--hidden');
    });
    
    menuExit.addEventListener('click', function (e) {
      e.preventDefault();
      menu.classList.add('menu--hidden');
    });
  }
})();

// Обработка события для блока .wallet
(function () {
  var cards = document.querySelector('.wallet__cards');
  
  if (window.hasElem(cards)) {
    var addCard = cards.querySelector('.wallet__cart--add');
    var addedCard = cards.querySelector('.wallet__cart-added');
    
    addCard.addEventListener('click', function (e) {
      var paymentMethod = document.querySelector('.wallet__paymentMethod');
      var form = paymentMethod.querySelector('.wallet__form');
      var formButton = paymentMethod.querySelector('.wallet__cart--paymentMethod');
      
      e.preventDefault();
      paymentMethod.classList.remove('wallet__paymentMethod--hidden');
      
      formButton.addEventListener('click', function (e) {
        e.preventDefault();
        form.classList.remove('wallet__form--hidden');
      });
    });
    
    addedCard.addEventListener('click', function (e) {
      var overlay = addedCard.querySelector('.wallet__cart-overlay');
      var exit = addedCard.querySelector('.wallet__cart-exit--exit');
      var cancelRow = addedCard.querySelector('.wallet__cart-row');
      var cancel = cancelRow.querySelector('.wallet__cart-exit--cancel');
      
      e.preventDefault();
      overlay.classList.remove('wallet__cart-overlay--hidden');
      exit.classList.remove('wallet__cart-exit--hidden');
      
      exit.addEventListener('click', function () {
        cancelRow.classList.remove('wallet__cart-row--hidden');
      });
      
      cancel.addEventListener('click', function (e) {
        e.stopPropagation();
        cancelRow.classList.add('wallet__cart-row--hidden');
        overlay.classList.add('wallet__cart-overlay--hidden');
        exit.classList.add('wallet__cart-exit--hidden');
      });
    });
  }
})();

// Обработка событий для страницы settings.html
(function () {
  var settingsUserConfig = document.querySelector('.settings__user-config-row');
  var newAddress = document.querySelector('.settings__address-add-address');
  var cart = document.querySelectorAll('.settings__address-cart');
  var userConfigInputs = document.querySelector('.settings__user-config');
  
  if (window.hasElem(settingsUserConfig)) {
    var address = document.querySelector('.booking__order-address');
    
    settingsUserConfig.addEventListener('click', function () {
      var userConfig = document.querySelector('.settings__user-config');

      settingsUserConfig.classList.toggle('settings__user-config-row--open');
      userConfig.classList.toggle('settings__user-config--hidden');
    });

    newAddress.addEventListener('click', function () {
      var textarea = document.querySelector('.settings__address-add-textarea-content');
      
      address.classList.toggle('booking__order-address--hidden');
      textarea.classList.toggle('settings__address-add-textarea-content--hidden');
    });
    
    for (var i = 0, len = cart.length; i < len; i++) {
      cart[i].addEventListener('click', function () {
        if (!(this.classList.contains('settings__address-cart--active'))) {
          for (var i = 0, len = cart.length; i < 0; i ++) {
            cart[i].classList.toggle('settings__address-cart--active');
          }
        }
        this.classList.toggle('settings__address-cart--active');
      });
    }
  }
})();

// Обработка событий для страницы faq.html
(function () {
  var questions = document.querySelector('.faq__questions');
  
  if (window.hasElem(questions)) {
    var question = document.querySelectorAll('.faq__question');
    
    for (var i = 0, len = question.length; i < len; i++) {
      question[i].addEventListener('click', function () {
        if (!(this.classList.contains('faq__question--open'))) {
          for (var i = 0; i < 0; i++) {
            question[i].classList.toggle('faq__question--open');
          }
        }
        this.classList.toggle('faq__question--open');
      });
    }
  }
})();

// Обработка событий для страницы messages.html
(function () {
  var messages = document.querySelector('.message__list');
  
  if (window.hasElem(messages)) {
    messages.addEventListener('click', function (e) {
      var target = e.target.closest('.message__items');
      
      if (target.tagName.toLowerCase() === 'li') {
        document.location = 'message.html';
      }
    });
  }
})();

// Обработка событий для страницы new-booking-step4.html
(function () {
  var bookingFilter = document.querySelector('.booking__order-therapist-filter');
  
  if (window.hasElem(bookingFilter)) {
    var headline = bookingFilter.querySelector('.booking__order-therapist-filter-headlineWrap');
    var description = bookingFilter.querySelector('.booking__order-therapist-filter-description');
    var border = bookingFilter.querySelector('.booking__order-therapist-filter-border');
    var carts = document.querySelectorAll('.booking__order-therapist-cart');
    
    headline.addEventListener('click', function () {
      this.classList.toggle('booking__order-therapist-filter-headlineWrap--open');
      border.classList.toggle('booking__order-therapist-filter-border--fill');
      description.classList.toggle('booking__order-therapist-filter-description--hidden');
    });
    
    for (var i = 0, len = carts.length; i < len; i++) {
      carts[i].addEventListener('click', function () {
        document.location = 'therapist-cart.html';
      });
    }
  }
})();

// Обработка событий для страницы new-booking-step4.html
(function () {
  var payButtons = document.querySelector('.booking__confirm-pay-buttons');
  
  if (window.hasElem(payButtons)) {
    payButtons.addEventListener('click', function (e) {
      var target = e.target.closest('.booking__confirm-pay-button');
      var button = payButtons.querySelectorAll('.booking__confirm-pay-button');
      
      if (target != null) {
        if (target) {
          for (var i = 0, len = button.length; i < len; i++) {
            button[i].classList.remove('booking__confirm-pay-button--active');
          }
            
          target.classList.add('booking__confirm-pay-button--active')
        }
      }
    });
  }
})();

// Обработка событий для страницы explore.html
(function () {
  var explore = document.querySelector('.booking__explore-select-wrap');
  
  if (window.hasElem(explore)) {
    var exploreInput = explore.querySelector('.booking__explore-select-main-input');
    var exploreDescription = explore.querySelector('.booking__explore-select-description');
    var exploreIndicator = explore.querySelector('.booking__explore-select-main-indicator');
    
    exploreInput.addEventListener('click', function (e) {
      exploreIndicator.classList.toggle('booking__explore-select-main-indicator--open');
      exploreDescription.classList.toggle('booking__explore-select-description--hidden');
      
      exploreDescription.addEventListener('click', function (e) {
        var target = e.target.closest('.booking__explore-select-description-input');
        
        if (target) {
          exploreInput.value = target.textContent;
          
          this.classList.add('booking__explore-select-description--hidden');
          exploreIndicator.classList.remove('booking__explore-select-main-indicator--open');
        }
      });
    });
  }
})();

/*
    This file can be used as entry point for webpack!
 */
