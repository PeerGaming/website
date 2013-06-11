(function(){

  /** popup handler **/

  var menu   = document.getElementById('menu'),

      select = ('ontouch' in window) ? 'touchstart' : 'click';


  menu.addEventListener( select, function ( e ) {

    var trg = e.target;

    if ( trg.id !== 'demo' ) return;

    e.preventDefault();
    e.stopPropagation();




    var width   = window.outerWidth/4  * 3,
        height  = window.outerHeight/4 * 3,
        centerX = window.outerWidth/2  -  width/2,
        centerY = window.outerHeight/2 - height/2;

    var ref = window.open( trg.href, 'menu',
          'status=no, toolbar=no, location=no, menubar=no,\
          scroolbars=no,resizeable=no, personalbar=no, chrome=yes\
          height=' + height + ', width=' + width + ', top=' + centerY + ', left=' + centerX );

    if ( !ref ) console.log('Couldn\'t open a window!');
  });

})();
