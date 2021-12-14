/* ------------------------------------------------------------------------------
@name: Product
@description: Product
--------------------------------------------------------------------------------- */

// --- utilities
import {
  Scrolllable
} from 'utilities';

// --- Product
const Product = (() => {

  // --- handleSet
  const handleSet = () => {
    // products
    handleCheckHeight();

    // pagination
    $('.prev.page-numbers').parents('li').remove();
    $('.next.page-numbers').parents('li').remove();
  }

  // --- handleCheckHeight
  const handleCheckHeight = () => {
    let _height = 0;
    let _heightTitle = 0;
    handleResetHeight();
    $('.js-product-list .product__item').each((i, e) => {
      if (_height < $(e).find('.product__box').height()) {
        _height = $(e).find('.product__box').height();
      }
      if (_heightTitle < $(e).find('.product__title').height()) {
        _heightTitle = $(e).find('.product__title').height();
      }
    });
    $('.js-product-list .product__box').height(_height);
    if ($(window).width() < 992) {
      $('.js-product-list .product__title').height(_heightTitle);
    }
  }

  // --- handleResetHeight
  const handleResetHeight = () => {
    let _attr = $('.js-product-list .product__box').attr('style');
    let _attrTitle = $('.js-product-list .product__box').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.js-product-list .product__box').removeAttr('style');
    }
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attrTitle !== 'undefined' && _attrTitle !== false) {
      $('.js-product-list .product__title').removeAttr('style');
    }
  }

  // --- handleClick
  const handleClick = () => {
    const _selector = $('.js-product-filter');
    _selector.on('click', (e) => {
      $('body').addClass('show-filter');
      Scrolllable.disable();
      e.stopPropagation();
    });

    $('.filter').on('click', (e) => {
      e.stopPropagation();
    });

  }

  // --- handleClose
  const handleClose = () => {
    $('body').on('click', () => {
      if ($('body').hasClass('show-filter')) {
        Scrolllable.enable();
        $('body').removeClass('show-filter');
      }
    });
  }

  // --- init
  const init = () => {
    handleSet();
    handleClick();
    handleClose();

  }

  // --- return
  return {
    init,
    checkHeight: handleSet

  }

})();

export default Product;
