// settings for particle background

$(document).ready(function() {
  $('#particles').particleground({
    //dotColor: '#5cbdaa',
    //lineColor: '#5cbdaa',
    density: 8000,
    proximity: 100,
    //lineColor: '#50c878',
    //dotColor: '#50c878'
    parallaxMultiplier: 10,
    particleRadius: 7
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
