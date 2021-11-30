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
    $('.js-article-list .article__item').each((i, e) => {
      if (_height < $(e).find('.article__txt').height()) {
        _height = $(e).find('.article__txt').height();
      }
    });
    $('.article__txt').height(_height);
  }

  // --- handleResetHeight
  const handleResetHeight = () => {
    let _attr = $('.article__txt').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.article__txt').removeAttr('style');
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
