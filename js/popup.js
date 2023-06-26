var i = 0;
$(document).on('mousewheel', function(e) {
if (i==0) {
    $(".popup").addClass('active');
    i++
}
});
$(document).on('DOMMouseScroll', function(e) {
if (i==0) {
    $(".popup").addClass('active');
    i++
}
});
$(document).on('touchmove', function() { //touchmove works for iOS, I don't know if Android supports it
 if (i==0) {
    $(".popup").addClass('active');
    i++
}
});

$(document).on('click',".popup a",function(e){
e.preventDefault();
console.log('click');
$(this).parent().removeClass('active');
})