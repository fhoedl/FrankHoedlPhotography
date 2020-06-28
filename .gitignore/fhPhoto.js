console.log("hi, linked js file")

// let fhPhotoApp = {}; //add namespacing

// Selectors...
let sliderImages = document.querySelectorAll('.slide');
// let imageNum = 0;
let arrowLeft = document.querySelector('#arrowLeft');
let arrowRight = document.querySelector('#arrowRight');

let current = 0; //image counter

// Clears all images...
function reset(){
    for(let i=0; i<sliderImages.length; i++) {       
        sliderImages[i].style.display = " none";
    }
}


function startSlide(){
    reset(); 
    sliderImages[0].style.display ="block" 
}

//show Previous Image
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = "block";
    current --;
}

// show Next Image
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

arrowLeft.addEventListener('click', () => {
    // 0 is first image
    if (current === 0) {
        current = sliderImages.length;  //total number of slides
    }
    slideLeft();
})

arrowRight.addEventListener('click', () => {
    // 0 is first image
    if (current === sliderImages.length - 1 ) {
        current =  - 1;  //total number of slides
    }
    slideRight();
})

startSlide();

