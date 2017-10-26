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
/******** background video logic *********/

 //play and pause the video on click or scroll

    //on click
      var video = $('.fullscreen-bg__video');
      var videoControls = $(".fullscreen-bg__playPause i");
      video.parent().click(function() {
          if(!$(this).children(".fullscreen-bg__video").get(0).paused){
             $(this).children(".fullscreen-bg__video").get(0).pause();
             videoControls.removeClass('fa-pause').addClass('fa-play');
          }else{
             $(this).children(".fullscreen-bg__video").get(0).play();
             videoControls.removeClass('fa-play').addClass('fa-pause');
          }
      });

      //on scroll
      var bgVideo = video[0];
      $(window).scroll(function(){
        //check to see if the video is manually paused don't play it back on scroll to top
         if (videoControls.hasClass('fa-pause')){
           var scroll = $(this).scrollTop();
           scroll > 300 ? bgVideo.pause() : bgVideo.play()
         }
      });

      //Check if video can play, and play it
      video.oncanplay = function() {
        video.play();
      };
/**************** Functions ***************/

      /* ACCESSIBILITY -- checks to see if the class 'expanded' exist,
          it changes the aria-expanded attr accordingly*/
      function isExpanded(element){
         setTimeout( function() {
          if(element.hasClass("expanded")){
            element.attr("aria-expanded",true);
          }else{
            element.attr("aria-expanded",false);
          }
        },100);
      }
