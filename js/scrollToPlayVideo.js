const videoContainer = document.querySelector('.video-container');
const videoitems = document.querySelectorAll('.video-item');

// Autoplay videos when they enter the viewport
function autoplayVideo() {
  
  videoitems.forEach((video) => {
    const rect = video.getBoundingClientRect();
    const isVisible = rect.top >= 1 && rect.bottom <= window.innerHeight;

    if (isVisible && video.paused) {
      video.play();
      video.mute= false; // Enable sound
    } else if (!isVisible && !video.paused) {
      video.pause();
      video.mute = true; // Disable sound
    }
  });
}
// Initial autoplay on page load
autoplayVideo();

// Event listener for scrolling
videoContainer.addEventListener('scroll', autoplayVideo);




// click to play video 

$('video').click(function(){
	// Toggle Magic Here
    this[this.paused ? 'play' : 'pause']();
});
