$(function(){

	var hideMenu = document.getElementById("home");
	var barsBtn = document.getElementById("barsBtn");
	
	barsBtn.addEventListener("click", function(event){
	 	$("#myNavbar").collapse("toggle");
	 	hideMenu.classList.toggle("filter");
	 	$("#bars").toggleClass("barsColor")

	 	event.stopPropagation();
		});

	hideMenu.addEventListener("click", function(){
		if ($("#myNavbar").hasClass("in")){
			$("#myNavbar").removeClass("in");
			$(this).removeClass("filter");
			$("#bars").addClass("barsColor");
		}
	});


});


// ======================================back to top ========================================

// CODE POUR LA FLECHE QUI REMONTE EN HAUT DE PAGE

ScrollToTop=function() {
  var s = $(window).scrollTop();
  if (s > 250) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
 
  $('.scrollup').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 0);
      return false;
  });
}
 
StopAnimation=function() {
  $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
    $('html, body').stop();
  });
}
 
 // Permet de créer l'animation pour remonter en haut de page 
$(window).scroll(function() {
  ScrollToTop();
  StopAnimation();

});


// ========================back to top v2=================================

