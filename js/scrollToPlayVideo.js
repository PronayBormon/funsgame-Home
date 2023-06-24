const videoContainer = document.querySelector('.video-container');
const videoItems = document.querySelectorAll('.video-item');

// Autoplay videos when they enter the viewport
function autoplayVideo() {
  videoItems.forEach((video) => {
    const rect = video.getBoundingClientRect();
    const isVisible = rect.top >= 1 && rect.bottom <= window.innerHeight;

    if (isVisible && video.paused) {
      video.play();
      video.muted = false; // Enable sound
    } else if (!isVisible && !video.paused) {
      video.pause();
      video.muted = true; // Disable sound
    }
  });
}

// Event listener for scrolling
videoContainer.addEventListener('scroll', autoplayVideo);

// Initial autoplay on page load
autoplayVideo();


// click to play video 

$('video').click(function(){
	// Toggle Magic Here
    this[this.paused ? 'play' : 'pause']();
});
