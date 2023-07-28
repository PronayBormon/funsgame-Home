document.addEventListener('DOMContentLoaded', function () {
  const videoItems = document.querySelectorAll('.video-item');

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }

  function handleIntersection(entries) {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting && video.paused) {
        video.muted = false; // Enable sound
        video.play();
      } else if (!entry.isIntersecting && !video.paused) {
        video.muted = true; // Disable sound
        video.pause();
      }
    });
  }

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
        video.muted = false;
      }
      video.paused ? video.play() : video.pause();
    });
  });

  // Set all videos to muted for autoplay on iOS
  videoItems.forEach((video) => {
    if (isiOS) {
      video.muted = true;
    }
  });
});




// const videoContainer = document.querySelector('.video-container');
// const videoitems = document.querySelectorAll('.video-item');


// document.addEventListener('DOMContentLoaded', function () {
//   const videoItems = document.querySelectorAll('.video-item');

//   function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
//   }

//   function handleIntersection(entries) {
//     entries.forEach((entry) => {
//       const video = entry.target;
//       if (entry.isIntersecting && video.paused) {
//         // video.muted = false; // Enable sound
//         video.play();
//       } else if (!entry.isIntersecting && !video.paused) {
//         // video.muted = true; // Disable sound
//         video.pause();
//       }
//     });
//   }

//   const observer = new IntersectionObserver(handleIntersection, {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5, // Adjust this threshold to suit your needs
//   });

//   videoItems.forEach((video) => {
//     observer.observe(video);
//     video.addEventListener('click', () => {
//       video.paused ? video.play() : video.pause();
//     });
//   });
// });

// // Autoplay videos when they enter the viewport
// function autoplayVideo() {
  
//   videoitems.forEach((video) => {
//     const rect = video.getBoundingClientRect();
//     const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight || 0;

//     if (isVisible && video.paused) {
//       video.play();
//       video.mute= false; // Enable sound
//     } else if (!isVisible && !video.paused) {
//       video.pause();
//       video.mute = true; // Disable sound
//     }
//   });
//   $('video').click(function(){
//       this[this.paused ? 'play' : 'pause']();
//       if(video.paused){
//           video.play();
//         } else{
//           video.pause();
//         }
//   });
  
// }
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