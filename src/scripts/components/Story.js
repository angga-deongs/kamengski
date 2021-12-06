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
      _this.parents('.story__item').addClass('story__item--active');
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
