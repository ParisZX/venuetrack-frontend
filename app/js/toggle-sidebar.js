'use strict';

// Small script for toggling the sidebar with the results, according to input.

var sidebar = document.getElementById( 'sidebar' ),
  showSidebar = document.getElementById( 'showSidebar' ),
  topbar = document.getElementById( 'topbar' ),
  body = document.body;

showSidebar.oninput = function() {
  
  if(sidebar.className.indexOf("showSidebar") == -1) {
    sidebar.className = sidebar.className + " showSidebar";
    topbar.className = topbar.className + " showTopbar";  
  }
  
  if(showSidebar.value.length == 0) {
      sidebar.className = sidebar.className.replace( "showSidebar", ' ' );
      topbar.className = topbar.className.replace( "showTopbar", ' ' );
  }

  };


