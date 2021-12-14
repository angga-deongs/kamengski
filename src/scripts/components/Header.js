/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */

// --- utilities
import {
  Scrolllable
} from 'utilities';

// --- Header
const Header = (() => {

  // --- handleSet
  const handleSet = () => {
    $(window).on('load', () => {
    if (!!$.cookie('first-open-web')) {
      // do this
    } else {
      $('body').css('opacity','0');
      $('body').addClass('show-animation');
      var date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
      $.cookie('first-open-web', 'yes', {
        expires: date
      });
      setTimeout(() => {
        $('body').css('opacity','1');
      }, 1750);
    }
  });
  }

  // --- handleClick
  const handleClick = () => {
    const _selector = $('.js-header-menu button.header__link');
    _selector.on('click', (e) => {
      let _target = $(e.currentTarget).attr('data-target');
      if (_target === 'product') {
        if ($('body').hasClass('start-animation')) {
          let _offsetTop = $('#'+_target).offset().top;
          $('html, body').animate({
            scrollTop: _offsetTop
          }, 1000);
        } else {
          $('body').addClass('start-animation');
        }
      } else {
        let _offsetTop = $('#'+_target).offset().top;
        $('html, body').animate({
          scrollTop: _offsetTop
        }, 1000);
      }

      e.preventDefault();
    });
  }

  // --- handleScroll
  const handleScroll = () => {
    const _product = $('.product').offset().top;
    const _productHeight = $('.product').offset().top + $('.product').height();
    const _story = $('.story').offset().top;
    const _storyHeight = $('.story').offset().top + $('.story').height();
    const _feedInstagram = $('.feed-instagram').offset().top;
    const _feedInstagramHeight = $('.feed-instagram').offset().top + $('.feed-instagram').height();
    const _contact = $('.contact').offset().top;
    const _contactHeight = $('.contact').offset().top + $('.contact').height();
    const _window = $(window);
    console.log(_story);
    console.log(_storyHeight);
    _window.scroll(() => {
      if ($('.product').length) {
        if (_window.scrollTop() >= _product && _window.scrollTop() <= _productHeight) {
          $('.header__item').removeClass('header__item--active');
          $('[data-target="product"]').parents('.header__item').addClass('header__item--active');
        } else {
          $('[data-target="product"]').parents('.header__item').removeClass('header__item--active');
        }
      }
      if ($('.story').length) {
        if (_window.scrollTop() >= _story && _window.scrollTop() <= _storyHeight) {
          $('.header__item').removeClass('header__item--active');
          $('[data-target="story"]').parents('.header__item').addClass('header__item--active');
        } else {
          $('[data-target="story"]').parents('.header__item').removeClass('header__item--active');
        }
      }
      if ($('.feed-instagram').length) {
        if (_window.scrollTop() >= _feedInstagram && _window.scrollTop() < _feedInstagramHeight) {
          $('.header__item').removeClass('header__item--active');
          $('[data-target="update"]').parents('.header__item').addClass('header__item--active');
        } else {
          $('[data-target="update"]').parents('.header__item').removeClass('header__item--active');
        }
      }
      if ($('.contact').length) {
        if (_window.scrollTop() >= _contact && _window.scrollTop() < _contactHeight) {
          $('.header__item').removeClass('header__item--active');
          $('[data-target="contact"]').parents('.header__item').addClass('header__item--active');
        } else {
          $('[data-target="contact"]').parents('.header__item').removeClass('header__item--active');
        }
      }
    });
  }

  // --- init
  const init = () => {
    handleSet();
    handleClick();
    handleScroll();

  }

  // --- return
  return {
    init
  }

})();

export default Header;
