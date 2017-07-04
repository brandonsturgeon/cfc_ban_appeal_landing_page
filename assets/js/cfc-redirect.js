redirectDelay = 10000;

var bar = new ProgressBar.Circle('#countdown-timer', {
  strokeWidth: 50,
  duration: redirectDelay,
  color: 'black',
  trailColor: '#AFEEEE',
  svgStyle: null
});

bar.animate(1.0);

function cfcRedirect() {
  console.log('redirecting now');
};

setTimeout(cfcRedirect, redirectDelay);
