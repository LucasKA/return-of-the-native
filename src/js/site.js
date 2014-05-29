function showbird() {
  $.iLightBox('assets/images/iiwi.jpg');
}
function showtree() {
  $.iLightBox([
    {
      URL: 'assets/images/clermontia.jpg',
      caption: 'The Clermontia Lyndseyana'
    }
  ]);
}
function showbirdVideo() {
  $.iLightBox([
    {
      URL: "assets/video/jack-iiwi-video.mp4",
      caption: 'An Iiwi',
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
  $.iLightBox('assets/images/jack.png');
}
