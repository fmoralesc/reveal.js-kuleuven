function setTitleBackground(event) {
    document.body.style.backgroundImage = "url('css/theme/assets/kuleuven/kul.png'), url('css/theme/assets/kuleuven/sedes.png'), linear-gradient(#fff 7%, #1D8DB0 7%)";
    document.body.style.backgroundPosition = "3% 2%, right bottom, top";
    document.body.style.backgroundRepeat = "no-repeat, no-repeat, no-repeat";
    document.body.style.backgroundSize = "15%, 40%,  100%";
};

function setStructureBackground(event) {
    document.body.style.backgroundImage = "url('css/theme/assets/kuleuven/sedes-de.png'), linear-gradient(#0A5C75 7%, #10637D 7%)";
    document.body.style.backgroundPosition = "right bottom, top";
    document.body.style.backgroundRepeat = "no-repeat, no-repeat";
    document.body.style.backgroundSize = "40%,  100%";
}

function setNormalBackground(event) {
document.body.style.backgroundImage = "url('css/theme/assets/kuleuven/sedes-sde.png'), linear-gradient(#10637D 7%, #eee 7%)";
    document.body.style.backgroundPosition = "right bottom, top";
    document.body.style.backgroundRepeat = "no-repeat, no-repeat";
    document.body.style.backgroundSize = "40%,  100%";
}

function setBackground(event) {
    currentslide = Reveal.getCurrentSlide();
    if (currentslide.classList.contains("title-slide")) {
	setTitleBackground(event);
	Reveal.configure({ slideNumber: false, controls: false});
    } else if (currentslide.classList.contains("structure-slide")) {
	setStructureBackground(event);
	Reveal.configure({ slideNumber: false, controls: true});
    } else {
	setNormalBackground(event);
	Reveal.configure({ slideNumber: true, controls: true});
    };
}

Reveal.addEventListener('ready', setBackground);

Reveal.addEventListener('slidechanged', setBackground);
