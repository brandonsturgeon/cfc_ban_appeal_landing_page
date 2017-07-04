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
  window.location = "https://forums.cfcservers.org/newthread.php?fid=28";
};

setTimeout(cfcRedirect, redirectDelay);
