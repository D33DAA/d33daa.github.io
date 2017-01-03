//--------Icon Scripts---------//
function Smile(pic) {
		pic.src = "media/d33daaSmile.jpeg";
	  }
      function TimerBlink() {
		  setInterval(function() {
			var time = Math.random() * 2000;
			setTimeout(function() {Blink()}, time);
		  	},2000);
      }
      function Blink() {
		var pic = document.getElementById("icon");
		pic.src = "media/d33daaBlink.jpeg";
		setTimeout(function() { pic.src = "media/d33daa.jpeg" }, 200);
		var random = Math.random();
		if (random > 0.5) {
			setTimeout(function() {pic.src = "media/d33daaBlink.jpeg"},100);
			setTimeout(function() { pic.src = "media/d33daa.jpeg" }, 100);
		}
      }

//--------Scroll To Top & Smooth Scrolling--------//
$(document).ready(function(){ 
						   
			$("#scrollToTop").hide();
			$(window).scroll(function() {
				if ($(window).scrollTop() > 100) {
					$("#scrollToTop").fadeIn("slow");
				} else {
					$("#scrollToTop").fadeOut("fast");
				}
			})
		});	

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
