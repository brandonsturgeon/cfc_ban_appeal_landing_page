alert('loaded');
var bar = new ProgressBar.Circle('#countdown-timer', {
  strokeWidth: 50,
  duration: 10000,
  color: 'black',
  trailColor: '#AFEEEE',
  svgStyle: null
});
bar.animate(1.0);
