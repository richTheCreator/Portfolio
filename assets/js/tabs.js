function showTab(evt, tabName) {
  // checks for hiding and showing tabBars
  if (tabName === 'Devtab') {
    // needs to be wrapped in timeout
    // since the width is not known yet
    setTimeout(function() {
      if ($('.scrollableX').hasHScrollBar()) {
        console.log('tabClick------------ has scroll bar!')
        // if a scroll bar is present, show the right arrow
        $('.rt-arrow-libs').removeClass('dontShowArrow')
        $('.rt-arrow-libs').addClass('doShow')
      } else if (!$('.scrollableX').hasHScrollBar()) {
        // if a scroll bar is NOT  present, hide the right arrow
        $('.rt-arrow-libs').removeClass('doShow')
        $('.rt-arrow-libs').addClass('dontShowArrow')
      }
    }, 050);
  }
  // TweenLite.to(".post", 0, {className:"+=animated fadeInUp"})

  // Declare all variables
  var i,
    tabcontent,
    posts,
    tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab-text");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab-text-selected", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  posts = document.getElementsByClassName('post')
  for (i = 0; i < posts.length; i++) {
    posts[i].className = posts[i].className += ' animated fadeInUp'
  }

  // posts = document.getElementById('post-list').className += " animatedIn"
  evt.currentTarget.className += " tab-text-selected";

}
