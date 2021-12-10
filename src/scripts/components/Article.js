/* ------------------------------------------------------------------------------
@name: Article
@description: Article
--------------------------------------------------------------------------------- */

// --- Article
const Article = (() => {

  // --- handleSet
  const handleSet = () => {
    handleCheckHeight();
  }

  // --- handleCheckHeight
  const handleCheckHeight = () => {
    let _height = 0;
    handleResetHeight();
    $('.js-product-list .product__item').each((i, e) => {
      if (_height < $(e).find('.product__box').height()) {
        _height = $(e).find('.product__box').height();
      }
    });
    $('.js-product-list .product__box').height(_height);
  }

  // --- handleResetHeight
  const handleResetHeight = () => {
    let _attr = $('.js-product-list .product__box').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.js-product-list .product__box').removeAttr('style');
    }
  }

  // --- init
  const init = () => {
    handleSet();

  }

  // --- return
  return {
    init,
    checkHeight: handleSet
  }

})();

export default Article;
