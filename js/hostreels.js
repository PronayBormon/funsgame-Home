const videoItems = document.querySelectorAll('.video');
const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust this threshold to suit your needs
});

videoItems.forEach((video) => {
    observer.observe(video);
    video.addEventListener('click', () => {
      // Check if it's iOS
      const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if (isiOS) {
        // Unmute on iOS when the user interacts (clicks) the video
        if(video.muted == false){
          video.muted == false;
        }else{
          video.muted = true;
        }

      }
      video.paused ? video.play() : video.pause();
    });
  });