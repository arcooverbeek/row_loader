$(document).ready(function() {  
    $(function(){


      /* */
      $('#body').infinitescroll({

        navSelector  : "a#next:last",            
                       // selector for the paged navigation (it will be hidden)
        nextSelector : "a#next:last",   
                       // selector for the NEXT link (to page 2)
        itemSelector : "#body p",          
                       // selector for all items you'll retrieve


        pathParse     : (!location.search) ? undefined : function( pathStr, nextPage ){
                          return pathStr.replace('2', nextPage );
                        }
      }, function(){ 
        window.callbackcontext = this;
        window.console && console.log('callbackcontext',this,$(this).find('p'))
        });
    /*  */
      /* * /
      $('#innerscroll').infinitescroll({

        navSelector  : "a#innernext:last",            
                       // selector for the paged navigation (it will be hidden)
        nextSelector : "a#innernext:last",   
                       // selector for the NEXT link (to page 2)
        itemSelector : "#body p"          ,
                       // selector for all items you'll retrieve
        localMode   : true  
      });
    /*  */
  });
});