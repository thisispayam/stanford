/********* navbar interaction ********/
  //toggling the side menu on click
   $( "#menu-icon" ).on("click keypress", function() {
     $( this ).toggleClass( "expanded" );
     isExpanded($(this));
     $("#sideNav").toggleClass( "width-200" );
     $("#main").toggleClass( "margin-r-200" );
   });
  //changing aria-expanded attribute on hover for submenu
   $(".has-submenu").on("mouseenter focus",function(){
     $(this).addClass("expanded");
     isExpanded($(this));
     $(this).find( '.nav-top__item--content').show();
   });
   $(".has-submenu").on("mouseleave focusout",function(){
     $(this).removeClass("expanded");
     isExpanded($(this));
    $(this).find( '.nav-top__item--content').hide();
   });
