
	(function() {

	  "use strict";
//
//	  var toggles = document.querySelectorAll(".cmn-toggle-switch");
//
//	  for (var i = toggles.length - 1; i >= 0; i--) {
//		var toggle = toggles[i];
//		toggleHandler(toggle);
//	  };
//
//	  function toggleHandler(toggle) {
//		toggle.addEventListener( "click", function(e) {
//		  e.preventDefault();
//		  (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
//		});
//	  }
//
//	

		
var toggle = $("#navigation__button");

toggle.on("click", function(e) {
	e.preventDefault();
	
	if ( toggle.hasClass("active")) {
		toggle.removeClass("active")
	} else {
		toggle.addClass("active");
	}
});
		
})();