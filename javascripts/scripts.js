//--------Icon Scripts---------//
function Smile(pic) {
		pic.src = "media/d33daaSmile.png";
	  }
      function TimerBlink() {
		  setInterval(function() {
			var time = Math.random() * 2000;
			setTimeout(function() {Blink()}, time);
		  	},2000);
      }
      function Blink() {
		var pic = document.getElementById("icon");
		pic.src = "media/d33daaBlink.png";
		setTimeout(function() { pic.src = "media/d33daa.png" }, 200);
		var random = Math.random();
		if (random > 0.5) {
			setTimeout(function() {pic.src = "media/d33daaBlink.png"},100);
			setTimeout(function() { pic.src = "media/d33daa.png" }, 100);
		}
      }
		