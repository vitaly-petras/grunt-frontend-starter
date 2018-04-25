$(function () {
	//all normal images
	var allImages = $('img').not('[data-src]').not('[data-lazy]');
	objectFitImages(allImages);


	//all images lazyloaded
	var dataSrcImages = $('img[data-src]');
	var dataLazyImages = $('img[data-lazy]');

	dataSrcImages.on('load', function(){
		objectFitImages($(this));
	});

	dataLazyImages.on('load', function(){
		objectFitImages($(this));
	});
});