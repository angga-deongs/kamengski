/* ------------------------------------------------------------------------------
@name: Product
@description: Product
--------------------------------------------------------------------------------- */

// --- Product
const Product = (() => {

  // --- handleClick
  const handleClick = () => {
    const _selector = $('.js-product-filter');
    _selector.on('click', (e) => {
      $('body').addClass('show-filter');
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
        $('body').removeClass('show-filter');
      }
    });
  }


  // --- init
  const init = () => {
    handleClick();
    handleClose();

  }

  // --- return
  return {
    init

  }

})();

export default Product;