
// Forward, Right Arrow
fhPhotoApp.forward = () => {
	fhPhotoApp.backgroundSlide();
	current === slidesByCategory.length - 1 ? (current = -1) : current;
	fhPhotoApp.slideRight();
};
fhPhotoApp.slideRight = () => {
	current++;
	sliderImages.classList.add("slideFromRight");
	fhPhotoApp.displayImage();
};
/*  NOTE: based on count INCREASING...
	ONCE WE GET TO LAST IMAGE( the condition)
		sets "current" to -1, 
	FUNCTION slideRight()... adds 1, 
		so "current" value of -1 + 1 = 0
	SINCE 0 is the first image, ... we loop to beginning.
*/


// Back, Left Arrow
fhPhotoApp.back = () => {
	fhPhotoApp.backgroundSlide();
    (current === 0) ? current = slidesByCategory.length : current;
    fhPhotoApp.slideLeft(); 
};
fhPhotoApp.slideLeft = () => {
	current--;
	sliderImages.classList.add("slideFromLeft");
	fhPhotoApp.displayImage();
};
/*  NOTE: based on count DECREASING...
	ONCE WE GET TO THE FIRST IMAGE (the condition)
		sets "current" to length value (the number of images)
	FUNCTION slideLeft()... subtracts 1,
		"current" sets to last image, ... we loop to the end.
*/