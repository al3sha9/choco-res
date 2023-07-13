$(document).ready(function() {
	init();
});
function init() {
	vegasSlider()
	// Counter();
}
function vegasSlider() {
	$("#testClass").vegas({
		timer: true,
	    slides: [
	        { src: "../img/11.jpg" },
	        { src: "../img/111.jpg" },
	        { src: "../img/11.jpg" },
	        { src: "../img/1111.jpg" }
	    ],
	    transition: 'random'
	});
}
