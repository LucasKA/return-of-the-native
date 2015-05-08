function showbird() {
  $.iLightBox([
    {
      url: './assets/images/iiwi.jpg',
      caption: 'An Iiwi pollinating a flower'
    }
  ]);
}
function showtree() {
  $.iLightBox([
    {
      URL: './assets/images/clermontia.jpg',
      caption: 'The Clermontia Lyndseyana tree'
    }
  ]);
}
function showbirdVideo() {
  $.iLightBox([
    {
      URL: "./assets/video/jack-iiwi-video.mp4",
      type: 'video',
      options: {
        width: 1280,
        height: 720,
        html5video: {
          autoplay: true,
          preload: 'auto',
          controls: false
        }
      }
    }
  ]);
}
function showjack() {
  $.iLightBox('./assets/images/jack.jpg');
}
