const swiper = new Swiper(".heroSlider", {
	loop: true,
	navigation: {
		nextEl: ".heroSliderPrev",
		prevEl: ".heroSliderNext",
	},
});

function videoPlay() {
	document.querySelector(".aboutVideoCover").style.display = "none";
	document.querySelector(".aboutVideoIframe").src += "&autoplay=1";	
}

document.querySelector(".aboutVideoCover").addEventListener("click", videoPlay);

