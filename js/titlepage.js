Reveal.addEventListener( 'ready', function( event ) {
	document.body.style.backgroundImage = "url('css/theme/assets/kul.png'), url('css/theme/assets/sedes.png'), linear-gradient(#fff 7%, #1D8DB0 7%)";
	document.body.style.backgroundPosition = "3% 2%, right bottom, top";
	document.body.style.backgroundRepeat = "no-repeat, no-repeat, no-repeat";
	document.body.style.backgroundSize = "15%, 40%,  100%";
} );

Reveal.addEventListener('slidechanged',
function (event) {
if (Reveal.isFirstSlide()) {
	document.body.style.backgroundImage = "url('css/theme/assets/kul.png'), url('css/theme/assets/sedes.png'), linear-gradient(#fff 7%, #1D8DB0 7%)";
	document.body.style.backgroundPosition = "3% 2%, right bottom, top";
	document.body.style.backgroundRepeat = "no-repeat, no-repeat, no-repeat";
	document.body.style.backgroundSize = "15%, 40%,  100%";
} else {
	document.body.style.backgroundImage = "url('css/theme/assets/sedes-de.png'), linear-gradient(#0A5C75 7%, #10637D 7%)";
	document.body.style.backgroundPosition = "right bottom, top";
	document.body.style.backgroundRepeat = "no-repeat, no-repeat";
	document.body.style.backgroundSize = "40%,  100%";
};
});
