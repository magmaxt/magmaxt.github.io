// $('code').on('mouseover', function() {
//   $(this).html('老婆');
// });
// $('code').on('click', function() {
//   $(this).html('你好美！');
// });
// $('code').on('dblclick', function() {
//   $(this).html('我好想你！');
// });
// $('code').on('keydown', function() {
//   $(this).html('昨天晚上睡得好吗？');
// });

// $('p').on('click', function() {
//   $(this).css({
//     "color": "#42cbad",
//     "font-weight": "700",
//     "line-height": "40px",
//   });
// });
// /* I included this in my CSS so that you could run the snippet below! */

// $('p').on('mouseover', function() {
//   $(this).toggleClass('extra-cool-text');
// });

// // $('h1').on('mouseover', function() {
// //   $(this).animate({
// //     "letter-spacing": "10px",
// //     "font-size": "40px"
// //   }, 1000);
// // });
// // $('h1').on('click', function() {
// //   $(this).animate({ "font-size" : "40px" }, 400)
// //   .animate({ "letter-spacing" : "10px" }, 5000);
// // });

// // Run this in the console, then click me
// $('h1').on('click', function() {
//   $(this).animate({
//     "height" : "0px",
//     "padding": "0px"
//   }, 400, function() {
//     $(this).html("");
//     alert("goodbye world"); // like console.log() but better
//   })
// });
// /* for side bar begins: from https://codepen.io/xblack/pen/JGtfd */
$(document).ready(function(){
   $("div").mouseenter(function(){
   	 var id = $(this).attr('id');
   	 $('a').removeClass('active');
   	 $("[href=#"+id+"]").addClass('active');
   });
});
///* for side bar ends: from https://codepen.io/xblack/pen/JGtfd */
