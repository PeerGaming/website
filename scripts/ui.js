(function(){


	var buttonDemo = document.getElementById('button-demo');

	buttonDemo.addEventListener('click', function ( e ) {

		e.preventDefault();
		e.stopPropagation();


		open({
			url		: buttonDemo.href,
			width	:  window.outerWidth/4 * 3,
			height	:  window.outerHeight/4 * 3
		});
	});

	function open ( config ) {

		var centerX = window.outerWidth/2 - config.width/2,
			centerY = window.outerHeight/2 - config.height/2;

		window.open( config.url, 'demo_' + Date.now(),
					'status=no, toolbar=no, location=no, menubar=no,\
					scroolbars=no,resizeable=no, personalbar=no, chrome=yes\
					height=' + config.height + ', width=' + config.width + ', top=' + centerY + ', left=' + centerX );
	}


})();
