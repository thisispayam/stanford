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
