var mapModule = document.querySelector(".contact-module");
var mapOpener = document.querySelector(".map-btn");
var mapExit = mapModule.querySelector(".exit");

mapOpener.addEventListener ("click", function(event) {
	event.preventDefault();
	mapModule.classList.add("contact-module-show");
});

mapExit.addEventListener("click", function(event) {
	event.preventDefault();
	mapModule.classList.remove("contact-module-show");
});
