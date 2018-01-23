function showTab(evt, tabName) {
  if (tabName !== 'ALLtab') {
    $('.tab-title-container, .horizonScroll2, .horizonScroll3, .horizonScroll4, .post, .tabcontent .wrapper-desc').addClass("doShow animated fadeInUp")
  }

  // checks for hiding and showing tabBars
  // if (tabName === 'Devtab') {
  // needs to be wrapped in timeout
  // since the width is not known yet
  var current = `#${tabName + ' .scrollableX'}`

  setTimeout(function() {
    if ($(current).hasHScrollBar()) {
      // console.log('tabClick------------ has scroll bar!')
      // if a scroll bar is present, show the right arrow
      $('.rt-arrow-libs').removeClass('dontShowArrow')
      $('.rt-arrow-libs').addClass('doShow')
    } else if (!$('.scrollableX').hasHScrollBar()) {
      // if a scroll bar is NOT  present, hide the right arrow
      $('.rt-arrow-libs').removeClass('doShow')
      $('.rt-arrow-libs').addClass('dontShowArrow')
    }
  }, 100);
  // }
  // TweenLite.to(".post", 0, {className:"+=animated fadeInUp"})

  // Declare all variables
  var i,
    tabcontent,
    posts,
    tablinks,
    currentTab;

  // Get all elements with class="scrollableX" and hide them
  scrollableX = document.getElementsByClassName("scrollableX");
  for (i = 0; i < scrollableX.length; i++) {
    // console.log('FOUND------', scrollableX[i])
    scrollableX[i].className = scrollableX[i].className.replace("scrollableX", "");
  }
  // Determine the tab, then add the "scrollableX" class
  // to the child div horizonScroll

  currentTab = tabName === 'ALLtab'
    ? `#${tabName + ' .horizonScroll1'}`
    : tabName === 'UItab'
      ? `#${tabName + ' .horizonScroll2'}`
      : tabName === 'UXtab'
        ? `#${tabName + ' .horizonScroll3'}`
        : `#${tabName + ' .horizonScroll4'}`

  // console.log(`selecting ------- ${currentTab}`)
  $(currentTab).addClass('scrollableX');

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
  // posts = document.getElementsByClassName('post')
  // for (i = 0; i < posts.length; i++) {
  //    posts[i].className = posts[i].className += 'animated fadeInUp'
  // }

  // posts = document.getElementById('post-list').className += " animatedIn"
  evt.currentTarget.className += " tab-text-selected";
}

function siteTabs(evt) {
  var i,
    tablinks,
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab-text-main");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("tab-text-selected", "");
  }

  evt.currentTarget.className += " tab-text-selected";
}
