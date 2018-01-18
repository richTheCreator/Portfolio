var opened = true;
$('#toggle').click(function() {

  if(opened){
    $("#logo-fill").attr("class", "fill-toggle fill-tan");
    $("#logo-fill-circle").attr("class", "fill-toggle fill-tan");
    $("#logo-polyfill").attr("class", "poly-toggle fill-blue");
    opened = !opened
  }else {
    $("#logo-fill").attr("class", "fill-toggle");
    $("#logo-fill-circle").attr("class", "fill-toggle");
    $("#logo-polyfill").attr("class", "poly-toggle");
    opened = !opened
  }

  $(this).toggleClass('toggle-active');
  $('.home-template').toggleClass('no-scroll');
  $('.post-template').toggleClass('no-scroll');
  $('#overlay').toggleClass('nav-active');

});

$('.nav-lg-toggle').click(function() {
  $('#toggle').toggleClass('toggle-active');
  $('.home-template').toggleClass('no-scroll');
  $('.post-template').toggleClass('no-scroll');
  $('#overlay').toggleClass('nav-active');

  if(opened){
    $("#logo-fill").attr("class", "fill-toggle fill-tan");
    $("#logo-fill-circle").attr("class", "fill-toggle fill-tan");
    $("#logo-polyfill").attr("class", "poly-toggle fill-blue");
    opened = !opened
  }else {
    $("#logo-fill").attr("class", "fill-toggle");
    $("#logo-fill-circle").attr("class", "fill-toggle");
    $("#logo-polyfill").attr("class", "poly-toggle");
    opened = !opened
  }
});
