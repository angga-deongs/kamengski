/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */

// --- Footer
const Footer = (() => {

  // --- handleSet
  const handleSet = () => {
    if ($(window).width() >= 992) {
      const _footerHeight = $('.footer').outerHeight();
      $('.main-site').css('padding-bottom',_footerHeight);
    } else {
      $('.main-site').removeAttr('style');
    }

  }

  // --- handleClick
  const handleClick = () => {
    $('.js-footer-accordion .footer__title').on('click', (e) => {
      if ($(window).width() < 768) {
        const _this = $(e.currentTarget);
        const _parent = _this.parents('.footer__list');
        if (_parent.hasClass('active')) {
          _parent.removeClass('active').find('.footer__nav').delay(200).slideUp(250);
        } else {
          if (_parent.siblings().hasClass('active')) {
            _parent.siblings().removeClass('active').find('.footer__nav').delay(150).slideUp(250);
          }
          _parent.find('.footer__nav').delay(150).slideDown(250, () => {
            _parent.addClass('active');
          });
        }
        e.preventDefault();
      }
    });
  }

  // --- handleCheckClass
  const handleCheckClass = () => {
    if ($(window).width() >= 768) {
      if ($('.js-footer-accordion').hasClass('active')) {
        $('.js-footer-accordion').removeClass('active');
        $('.footer__nav').removeAttr('style');
      }
    }
  }

  // --- init
  const init = () => {
    handleSet();
    handleClick();

  }

  // --- return
  return {
    init,
    setFooter: handleSet,
    checkClass: handleCheckClass
  }

})();

export default Footer;
