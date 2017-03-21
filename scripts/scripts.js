$('.search-move-container').appendAround();
$('.social-links').appendAround();

var $body = $('body');
var $btnMobileMenu = $('.btn-mobile-menu');

$btnMobileMenu.click(function(){
	
	$body.toggleClass('show');
	
}); 

window.matchMedia('screen and (max-width: 578px)')
	  .addListener(function(mql) {
		  if (mql.matches === false) {
			  $body.removeClass('show');
		  } 
	  });