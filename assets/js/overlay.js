var opened = true;
$('#toggle').click(function() {

  if(opened){
    $("#logo-fill").attr("class", "fill-toggle fill-tan");
    opened = !opened
  }else {
    $("#logo-fill").attr("class", "fill-toggle");
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
    opened = !opened
  }else {
    $("#logo-fill").attr("class", "fill-toggle");
    opened = !opened
  }
});
