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
      console.log(1);
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

  // --- handleMobileNav
  const handleMobileNav = () => {
    $('.js-nav').on('click', (e) => {
      var _this = $(e.currentTarget);
      if (_this.hasClass('show')) {
        Scrolllable.enable();
        $('body').removeClass('show-nav');
        _this.removeClass('show')
      } else {
        Scrolllable.disable();
        $('body').addClass('show-nav');
        _this.addClass('show')
      }
    });
  }

  // --- handleCheckClass
  const handleCheckClass = () => {
    if ($(window).width() >= 992) {
      if ($('.js-nav').hasClass('show')) {
        Scrolllable.enable();
        $('body').removeClass('show-nav');
        $('.js-nav').removeClass('show')
      }
    }
  }

  // --- init
  const init = () => {
    handleSet();
    handleClick();
    handleMobileNav();

  }

  // --- return
  return {
    init,
    checkClass: handleCheckClass
  }

})();

export default Header;
