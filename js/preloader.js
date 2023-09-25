// var loader = document.getElementById("loaders");

// window.addEventListener("load", function(){
//     loader.style.display = "none";
// })

// $(document).ready(function(){
    // $(window).load(function(){
    
    // });
// });

// $(window).load(function() {
//     $('.preloader-wrapper').fadeOut();
//     $('.loaders').addClass('preloader-site');
// });

// $(document).ready(function() {
//     // executes when HTML-Document is loaded and DOM is ready
//     alert("document is ready");
    
//     // $("loaders").removeClass("loaders");
//    });
   
   
//    $(window).load(function() {   
//    });


// $(document).ready(function($) {
//     const Body = $('.loaders');
//     Body.addClass('loaded');
      
// });
// $(window).on("load" , function() {
//     $('loaders').fadeOut();
//     $('loaders').addClass('loaded');
// });

// $("body").load(function(){
//     $('loaders').addClass('loaded');
// }); 
function preloader(){
    document.getElementById("loaders").style.display = "none";
    document.getElementById("body").style.display = "block";
 }

 window.onload = preloader;