// nav bg after scroll nav_profile
$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav_bar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());                
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav_bars");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());                
    });
});

$(document).ready(function() {
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
    $('header-title').css('opacity', 0.8);
    } else {
    $('header-title').css('opacity', 1);
    }
});
});
// nav background show end here 


// show side nav start here 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
//   show side nav end here 