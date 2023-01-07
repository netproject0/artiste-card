var carrousel = document.getElementById("carrousel");
var images = carrousel.getElementsByTagName("img");
var index = 0;

function changeImage() {
	for (var i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	}
	index++;
	if (index > images.length) {
		index = 1;
	}
	images[index-1].style.display = "block";
	setTimeout(changeImage, 2000); // changement d'image toutes les 5 secondes
}

changeImage();
