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

// DESTRUCTURED Namespacing
let { current, category, slides, slidesByCategory, length } = fhPhotoApp;
const{ logo , sliderImages, arrowLeft, arrowRight, goToGallery} = fhPhotoApp;


// CONFIRMING THOUGHT PROCESS
console.log(`Initial Data Set: `, slides)
console.log(`Initial Data by Cat `, slidesByCategory)
console.log(`Initial Data Length: `, fhPhotoApp.length);

/// INITIAL Assignment of Image Values
// Thru Logo
logo.style.cssText = 
    `   background-image: ${slides[2].src}; 
        background-size: cover;
        background-position: 50% 100%;   
    `;


/// EVENT LISTENERS
// LOGO
logo.addEventListener("click", () => {
    console.log(`selected logo`);
});

// PORTFOLIOS
goToGallery.addEventListener('click', function(e){
    category = e.target.childNodes[1].className; 
    // fhPhotoApp.reset();
    console.log(`category is: `,category);
    setCategory();
})

// ARROWS, Navigating thru gallery
arrowRight.addEventListener('click', () => fhPhotoApp.forward());   
arrowLeft.addEventListener('click', () => fhPhotoApp.back());


// Alternate....
// ARROWS & SPLIT SCREEN Combined, Navigating thru gallery
// arrowRight.addEventListener = ('click', function(){
//     window.removeEventListener(`mousedown`, addEventListener);
//     fhPhotoApp.forward();    
// })
// arrowLeft.addEventListener = ('click', function() {
//     window.removeEventListener(`mousedown`, addEventListener);
//     fhPhotoApp.back();
// })
// window.addEventListener("mousedown", (e) => {
// 	let width = document.documentElement.clientWidth;
// 	let X = e.clientX;
// 	(X <= width / 2) ? fhPhotoApp.back() : fhPhotoApp.forward();
// });



// FUNCTIONS
// Clears all images...
fhPhotoApp.reset = () => {
    for(let i=0; i<slides.length; i++) {         
        sliderImages.style.display = 'none';
    }
}

// Base Image in the collection
(fhPhotoApp.startSlide = () => {
    fhPhotoApp.reset();
    sliderImages.style.display = 'block' 

    // TERNARY PREPPED for Categories
    // console.log(category);
    // (category === `automotive`)
    //     ? sliderImages.style.display = 'block' 
    //     : sliderImages.style.display = 'none'; //temp
})

setCategory = function () {
	// fhPhotoApp.reset();
	// fhPhotoApp.reset();
	// fhPhotoApp.displayImage();
	slidesByCategory = slides.filter((slide) => slide.cat === category);
	length = slidesByCategory.length;
	console.log(slidesByCategory);
	console.log(length);
	current = 0; // Reset the Gallery to the First Image[0]
	let port = document.querySelector(`#slider`);
	// fhPhotoApp.reset();
	fhPhotoApp.displayImage();
	port.scrollIntoView();
};


// Cycling Forward/Right thru the gallery
fhPhotoApp.forward = () => {
    if (current === slides.length - 1) {
        current = -1; // NOTE: not subtracting but setting to -1
    }
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
   

// Cycling Back/Left thru the gallery
fhPhotoApp.back = () => {
    if (current === 0) {
        current = slides.length;
    }
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


/// Display Image(forward or back) 
/// getting blank image inconsistently & skip behavoiour  
// fhPhotoApp.displayImage = function(){   
//     if(slides[current].cat === category) {   
//         console.log(`length is `, length, `, for the category: `, category);
//         sliderImages.style.cssText = 
//             `   background-image : ${slides[current].src}; `;
//         sliderImages.setAttribute(`alt`, slides[current].alt);
//     }
//     else{
//         console.log("skipped");
//     }
// };


/// Display Image(forward or back) ******

fhPhotoApp.displayImage = function (slides = slidesByCategory) {
	console.log(`test...`, slides);
	(slides[current] === undefined)
		? console.log(`skipping`, current)
		: console.log(`good`, current);
	// console.log(`slides[current]...`, slides[current]);
	// console.log(`length is `, length, `, for the category: `, category);
	fhPhotoApp.startSlide();
	sliderImages.style.cssText = `   background-image : ${slides[current].src}; `;
	sliderImages.setAttribute(`alt`, slides[current].alt);
};


// Initialize
fhPhotoApp.init = () =>{
    // fhPhotoApp.reset();
    // fhPhotoApp.startSlide();
    fhPhotoApp.slideRight();
    fhPhotoApp.slideLeft();
}
// Document Ready
let ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    // console.log('Welcome to Frank Hoedl Photography, all images are copyright Frank Hoedl')
    fhPhotoApp.init();
});

