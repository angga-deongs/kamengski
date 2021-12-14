/* ------------------------------------------------------------------------------
@name: Product Detail
@description: Product Detail
--------------------------------------------------------------------------------- */

const ProductDetail = (() => {

  // --- handleClick
  const handleClick = () => {
    const _selector = $('.js-popup-size-chart');
    _selector.on('click', () => {
      $('body').addClass('show-popup-size-chart');
    });

    $('.overlay').on('click', () => {
      if ($('body').hasClass('show-popup-size-chart')) {
        $('body').removeClass('show-popup-size-chart');
      }
    });
  }

  // --- handleKeyup
  const handleKeyup = () => {

    $(document).on('keyup', (e) => {
      if (e.which === 27) {
        if ($('body').hasClass('show-popup-size-chart')) {
          $('body').removeClass('show-popup-size-chart');
        }
      }
    });

  }

  // --- handleRunCarousel
  const handleRunCarousel = () => {
    const _selector =  $('.js-carousel-main-img');
    const _itemLength = $('.js-carousel-main-img .product-detail__main-img__item').length;
    const _itemRun = 1;

    // --- destroy carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    // --- check if itemLength > itemRun
    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        autoplay: false,
        dots: false,
        nav: true,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }
      _selector.addClass('product-detail__main-img--single');
    }
  }
  // --- handleRunCarousel2
  const handleRunCarousel2 = () => {
    const _selector =  $('.js-carousel-control-img');
    const _itemLength = $('.js-carousel-control-img .product-detail__control-img__item').length;
    const _itemRun = 1;

    // --- destroy carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    // --- check if itemLength > itemRun
    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 10,
        autoplay: false,
        dots: false,
        nav: false,
        loop: false,
        touchDrag: true,
        mouseDrag: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
      }).on('click', '.owl-item', (e) => {
        $('.js-carousel-main-img').trigger('to.owl.carousel', [$(e.currentTarget).index(), 100, true]);
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }
      _selector.addClass('product-detail__control-img--single');
    }
  }

  // --- init
  const init = () => {
    handleClick();
    handleKeyup();
    handleRunCarousel();
    handleRunCarousel2();
  }

  return {
    init
  }

})();

export default ProductDetail;
