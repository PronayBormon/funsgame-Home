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

document.addEventListener('DOMContentLoaded', function () {
  const videoItems = document.querySelectorAll('.video-item');

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top = 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }

  function handleIntersection(entries) {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting ) {
        video.muted = false; // Enable sound
        video.play();
      } else{
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
        if(video.muted == false){
          video.muted == false;
        }else{
          video.muted = true;
        }

      }
      video.paused ? video.play() : video.pause();
    });
  });

  // Set all videos to muted for autoplay on iOS
  // videoItems.forEach((video) => {
  //   if (isiOS) {
  //     video.muted = true;
  //   }
  // });
});



// Autoplay videos when they enter the viewport
// function autoplayVideo() {
  
//   videoitems.forEach((video) => {
//     const rect = video.getBoundingClientRect();
//     let isVisible = false;
//     if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//       // const visiblePercent = (window.innerHeight - rect.top) / rect.height;
//       if (!isVisible) {
//         video.play()
//         video.muted = false
//         isVisible = true
//       } else {
//         video.pause()
//         video.muted = true
//         isVisible = false
//       }
//     } else {
//       // Pause the video if it's not visible
//       if (isPlaying) {
//         video.pause();
//         video.muted = true
//         isPlaying = false;
//       }
//     }


//     // if (isVisible && video.paused) {
//     //   video.play();
//     //   video.muted = false; // Enable sound
//     // } else if (!isVisible && !video.paused) {
//     //   video.pause();
//     //   video.muted = true; // Disable sound
//     // }
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

// // videoitems.addEventListener("click", () => {
// //   if(video.paused){
// //     video.play();
// //   } else{
// //     video.pause();
// //   }
// // });
// // Initial autoplay on page load
// autoplayVideo();

// // Event listener for scrolling
// videoContainer.addEventListener('scroll', autoplayVideo);

// document.addEventListener("DOMContentLoaded", function () {
//   const video = document.getElementById("videoContainerId");
//   let isPlaying = true;

//   function handleScroll() {
//       // Get the video's position relative to the viewport
//       const rect = video.getBoundingClientRect();

//       // Check if the video is fully visible in the viewport
//       if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//           // Calculate the percentage of the video height that is visible
//           const visiblePercent = (window.innerHeight - rect.top) / rect.height;

//           // Set the video's playback rate based on the visible percentage
//           video.playbackRate = 0.5 + (visiblePercent * 1.5); // Playback rate ranges from 0.5 to 2.0
          
//           // Start playing the video if it's not already playing
//           if (!isPlaying) {
//               video.play();
//               isPlaying = true;
//           }
//       } else {
//           // Pause the video if it's not visible
//           if (isPlaying) {
//               video.pause();
//               isPlaying = false;
//           }
//       }
//   }

//   // Attach the handleScroll function to the scroll event
//   window.addEventListener("scroll", handleScroll);

//   // Call handleScroll on page load to check if the video is visible initially
//   handleScroll();
// });




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