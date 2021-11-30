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
    handleMobileNav();

  }

  // --- return
  return {
    init,
    checkClass: handleCheckClass
  }

})();

export default Header;
