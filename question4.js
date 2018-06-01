'use strict';
/*eslint-env jquery*/

$(document).ready(function () {
  $('.square').click(() => {
    $('.transform').toggleClass('transform-click');
  });
});