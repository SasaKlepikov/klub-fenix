var didScroll = false;
var shrinked = false;
var heightOffset = 150; 

window.addEventListener("scroll", function(event) {
	didScroll = true;  
}, false);

setInterval(function() {
	if ( didScroll ) {
		didScroll = false;
	    var top = this.scrollY;

	    var navHeight = document.querySelector("#header");
	    var nav = document.querySelector("#nav");
	   	// var heightCross = navHeight.offsetHeight; 

	    if (top > heightOffset) {
		    	if (nav.className.indexOf("nav--fixed") == -1) {
			    	// nav.className = nav.className + " nav--fixed";
			    	if (!shrinked) {
				    	$("#nav").animate({ "top": "-=22px" }, "fast" );
				    	$("#header h1").animate({ "top": "-=22px" }, "fast" );
				    	$("#header").animate({ "height": "-=47px" }, "fast" );
					    shrinked = true;
			    	};
		    	};
		    }else{
	    	if (shrinked) {
		    	$( "#nav" ).animate({ "top": "+=22px" }, "fast" );
				$( "#header h1" ).animate({ "top": "+=22px" }, "fast" );
				$( "#header" ).animate({ "height": "+=47px" }, "fast" );
			    shrinked = false;
	    	};
	    	// nav.classlist.remove("nav--fixed");
	    	nav.className = nav.className.replace(/\b nav--fixed\b/,'');
	    };
	}
}, 250);
