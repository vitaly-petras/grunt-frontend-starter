$(function () {
	//all normal images
	var allImages = $('img').not('[data-src]').not('[data-lazy]');
	objectFitImages(allImages);
});