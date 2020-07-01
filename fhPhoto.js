let fhPhotoApp = {   
};

// DATA - Reference Data Set
fhPhotoApp.slides = [
	(slide1 = {
		cat: `automotive`,
		src: `url('./assets/image1.jpg')`,
		alt: "Ford driving on logging road"
	}),
	(slide2 = {
		cat: `landscape`,
		src: `url('./assets/image2.jpg')`,
		alt: "Subaru at ice cream stand with birds above on the wires"
	}),
	(slide3 = {
		cat: `automotive`,
		src: `url('./assets/image3.jpg')`,
		alt: "Toyota truck off road in deep snow"
	}),
	(slide4 = {
		cat: `landscape`,
		src: `url('./assets/image3.jpg')`,
		alt: "Toyota truck off road in deep snow"
	})
];


// ARGUMENTS
fhPhotoApp.slidesByCategory = fhPhotoApp.slides; // Duplicate for Category Sorting
fhPhotoApp.current = 0; //image counter
fhPhotoApp.category = '' //temporary
fhPhotoApp.length = fhPhotoApp.slides.length; 


// SELECTORS
fhPhotoApp.logo = document.querySelector('.logoClip');
fhPhotoApp.sliderImages = document.querySelector('.slide');
fhPhotoApp.arrowLeft = document.querySelector('#arrowLeft');
fhPhotoApp.arrowRight = document.querySelector('#arrowRight');
fhPhotoApp.goToGallery = document.querySelector('.portfolioContainer');
fhPhotoApp.goToPortfolio = document.querySelector(`#slider`);


// NameSpacing Destructured.
let{
    current, 
    category, 
    slides, 
    slidesByCategory, 
    length 
} = fhPhotoApp;

const{
	logo,
	sliderImages,
	arrowLeft,
	arrowRight,
	goToGallery,
	goToPortfolio,
} = fhPhotoApp;

// INITIAL Assignment of Image Values
// Thru Logo
logo.style.cssText = `  background-image: ${slides[2].src}; 
                        background-size: cover;
                        background-position: 50% 100%;  `;


// EVENT LISTENERS
// LOGO Event
logo.addEventListener("click", () => {
    console.log(`selected logo`);
});

// PORTFOLIOS SELECTED Event
goToGallery.addEventListener('click', function(e){
    category = e.target.childNodes[1].className; 
    console.log(`category is: `,category);
    setCategory();
})

// GALLERY NAVIGATION Event
// ARROWS & SPLIT SCREEN Combined, Navigating thru gallery
window.addEventListener("mousedown", (e) => {
    let width = document.documentElement.clientWidth;
    let X = e.clientX;
    (X <= width / 2) ? fhPhotoApp.back() : fhPhotoApp.forward();
});
    // Arrows may be redundant depending on other elements
    arrowRight.addEventListener = ('click',() => {
        window.removeEventListener(`mousedown`, addEventListener);
        fhPhotoApp.forward();    
    })
    arrowLeft.addEventListener = ('click', () => {
        window.removeEventListener(`mousedown`, addEventListener);
        fhPhotoApp.back();
    })
        // ARROWS ONLY, Navigating thru gallery
        // arrowRight.addEventListener('click', () => fhPhotoApp.forward());   
        // arrowLeft.addEventListener('click', () => fhPhotoApp.back());


// FUNCTIONS
// Clears all images...
fhPhotoApp.reset = () => {
    for(let i=0; i<slides.length; i++) {         
        sliderImages.style.display = 'none';
}};

// Base Image in the collection
fhPhotoApp.startSlide = () => {
    fhPhotoApp.reset();
    sliderImages.style.display = 'block' 
};

// Selecting Portfolio Category
setCategory = function () {
	slidesByCategory = slides.filter((slide) => slide.cat === category);
	length = slidesByCategory.length;
	current = 0; // Reset the Gallery to the First Image[0]
	fhPhotoApp.displayImage();
	goToPortfolio.scrollIntoView();
};

// Navigation of Gallery
fhPhotoApp.forward = () => {
    (current === slidesByCategory.length - 1)? current = -1 : current;
    fhPhotoApp.slideRight();
};
fhPhotoApp.slideRight = () => {
    current++;
    fhPhotoApp.displayImage();
};
        /*  NOTE: based on count INCREASING...
            ONCE WE GET TO LAST IMAGE( the condition)
                sets "current" to -1, 
            FUNCTION slideRight()... adds 1, 
                so "current" value of -1 + 1 = 0
            SINCE 0 is the first image, ... we loop to beginning.
        */
   
fhPhotoApp.back = () => {
    (current === 0) ? current = slidesByCategory.length : current;
    fhPhotoApp.slideLeft(); 
};
fhPhotoApp.slideLeft = () => {
    current--;
    fhPhotoApp.displayImage();
};
        /*  NOTE: based on count DECREASING...
            ONCE WE GET TO THE FIRST IMAGE (the condition)
                sets "current" to length value (the number of images)
            FUNCTION slideLeft()... subtracts 1,
                "current" sets to last image, ... we loop to the end.
        */

// Display Image in Gallery
fhPhotoApp.displayImage = function () {
    sliderImages.style.cssText = `   background-image : ${slidesByCategory[current].src}; `;
    sliderImages.setAttribute(`alt`, slidesByCategory[current].alt);
	// console.log(`current: `, current);
	// console.log(`length is `, length);
};



// Initialize
fhPhotoApp.init = () =>{
    fhPhotoApp.slideRight();
    fhPhotoApp.slideLeft();
}
// Document Ready
let ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    console.log('Welcome to Frank Hoedl Photography, all images are copyright Frank Hoedl')
    fhPhotoApp.init();
});

