const videoContainer = document.querySelector('.video-container');
const videoitems = document.querySelectorAll('.video-item');

// Autoplay videos when they enter the viewport
function autoplayVideo() {
  
  videoitems.forEach((video) => {
    const rect = video.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (isVisible && video.paused) {
      video.play();
      video.mute= false; // Enable sound
    } else if (!isVisible && !video.paused) {
      video.pause();
      video.mute = true; // Disable sound
    }
  });
  $('video').click(function(){
      this[this.paused ? 'play' : 'pause']();
  });
  
}
// videoitems.addEventListener("click", () => {
//   if(video.paused){
//     video.play();
//   } else{
//     video.pause();
//   }
// });
// Initial autoplay on page load
autoplayVideo();

// Event listener for scrolling
videoContainer.addEventListener('scroll', autoplayVideo);




// click to play video 

// $('video').click(function(){
// 	// Toggle Magic Here
//     this[this.paused ? 'play' : 'pause']();
// });
// const videos = document.querySelectorAll('.video-container .video-wrapper video');



// for(let i= 0; i< videos.length; i++){
//   videos[i]. addEventListener("mouseenter", () => {
//     videos[i].currentTime =0;
//     videos[i].loop = true;
//     videos[i].play();
//     videos[i].mute = true;
//   });
//   videos[i].addEventListener("mouseleave", () => {
//     videos[i].pause();
//   });
//   videos[i].addEventListener("click", () => {
//     if(videos[i].paused){
//       videos[i].play();
//     } else{
//       videos[i].pause();
//     }
//   });
// }