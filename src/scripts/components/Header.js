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
    $('body').css('opacity','0');
    $(window).on('load', () => {
      if (!!$.cookie('first-open-web')) {
        $('body').css('opacity','1');
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

  const _section = [];

  // --- handleClick
  const handleClick = () => {
    $('.js-header-menu .header__item').each((e, v) => {
      const _this = $(v).children('.header__link');
      const _target = _this.attr('data-target');
      _section.push({
        'anchor': _this,
        'id': _target
      });
      _this.on('click', (e) => {
        let _this = $(e.currentTarget);
        let _target = _this.attr('data-target');
        let _offsetTop = $('#'+_target).offset().top + 10;
        if (_target === 'product') {
          if ($('body').hasClass('start-animation')) {
            $('html, body').animate({
              scrollTop: _offsetTop
            }, 1000);
          } else {
            $('body').addClass('start-animation');
          }
        } else {
          $('html, body').animate({
            scrollTop: _offsetTop
          }, 1000);
        }
      });
    });
  }

  const _url = new URL(window.location);

  const handleScroll = () => {
    $(window).on('scroll', () => {
      if ($('html').hasClass('home')) {
        $.each(_section, (e, elem) => {
          let _id = $('#'+elem.id);
          let _target = _id[0];
          let _placement = _target.getBoundingClientRect();
          let _placementBottom = _placement.bottom - 10;

          $('.header__item').removeClass('header__item--active');
          $("[data-target='"+elem.id+"']").parents('.header__item').addClass('header__item--active');

          if( _placement.top < window.innerHeight && _placementBottom > 0) {
            if(window.location.hash) {
              const _urlSplit = window.location.href.split('#')[0];
              history.replaceState({}, '', _urlSplit+'#' + elem.id);
              return false; /* Exit $.each loop */
            } else {
              history.pushState({}, '', _url+'#' + elem.id);
              return false; /* Exit $.each loop */
            }

          };
        });
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
