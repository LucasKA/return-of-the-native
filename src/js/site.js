function showbird() {
  $.iLightBox('assets/images/iiwi.jpg');
}
function showtree() {
  $.iLightBox([
    {
      URL: 'assets/images/clermontia.jpg',
      caption: 'The Clermontia Lyndseyana Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam inventore repudiandae qui sunt sequi! Adipisci, doloremque, excepturi neque at nulla perferendis iste placeat debitis accusantium blanditiis aliquid dicta nihil molestias.'
    }
  ]);
}
function showbirdVideo() {
  $.iLightBox([
    {
      URL: "assets/video/jack-iiwi-video.mp4",
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
