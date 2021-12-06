/* ------------------------------------------------------------------------------
@name: Story
@description: Story
--------------------------------------------------------------------------------- */

const Story = (() => {

  // handleSet
  const handleSet = () => {
    const _selector =  $('.js-story-list');

  }
  // handleClick
  const handleClick = () => {
    const _selector =  $('.js-story-list .story__item .story__btn');
    _selector.on('click', (e) => {
      const _this = $(e.currentTarget);
      if (_this.parents('.story__item').hasClass('story__item--active')) {
        _this.parents('.story__item').removeClass('story__item--active');
        _this.parents('.story__item').find('.story__collapse').slideUp('slow');
      } else {

        const _index = _this.parents('.story__item').attr('data-index');
        const _height = _this.parents('.story__title').height();
        const _indexHeight = _index * _height;
        console.log(_index);
        console.log(_indexHeight);
        $('html, body').animate({
          scrollTop: $('.story__list').offset().top + _indexHeight
        }, 750, () => {
          if (_this.parents('.story__item').siblings().hasClass('story__item--active')) {
            _this.parents('.story__item').siblings().removeClass('story__item--active').find('.story__collapse').slideUp('slow');
          }
          _this.parents('.story__item').addClass('story__item--active');
          _this.parents('.story__item').find('.story__collapse').slideDown('slow');
        });
      }
    });

  }

  // init
  const init = () => {
    handleClick();
  }

  return {
    init
  }

})();

export default Story;
