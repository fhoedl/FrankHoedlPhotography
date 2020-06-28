console.log("hi, linked js file")

// Iamge Links
const slides = [
    'slide1',
    'slide2',
    'slide3'
]


// let fhPhotoApp = {}; //add namespacing

let imageNum = 0;
// Selectors...
let sliderImages = document.querySelector('.slide')
let arrowLeft = document.querySelector('#arrowLeft');
let arrowRight = document.querySelector('#arrowRight');
let logo = document.querySelector('.logoClip');
// console.log(sliderImages);

let current = 0; //image counter
let currentSlide = 1; //image counter
// let slide = `slide${currentSlide}`;
let slide = slides[current]

// slideImages.innerHTML = `<img src="./assets/image${imageNum + 1}.jpg" alt="" srcset="">`;
// let displayImg = sliderImages;

// let image = (imageNum) =>{
//     sliderImages.innerHTML += `<img src="./assets/image${imageNum + 1}.jpg" alt="" srcset="">`;
// }

// image(0);
// Clears all images...
// function reset(){
//     for(let i=0; i<3; i++) {       
//         // image(i).style.display = " none";
//         image(i).style.display = "none"       
//     }
// }


// function startSlide(){
//     reset(); 
//     image(0).style.display = "block"; 
// }

// //show Previous Image
// function slideLeft(){
//     reset();
//     sliderImages.style.display = "none";
//     // image(current - 1).style.display = "block";
//     current --;
// }

// show Next Image
function slideRight() {
    // console.log(current)
    // reset();
    let selected = document.querySelector(".slide");
    // slide = `slide${currentSlide}`;
    selected.classList.remove(slides[current]);
    // slide = `slide${currentSlide++}`;
    current++;
    // selected.classList.remove(slide);
    selected.classList.add(slides[current]);
    console.log(selected,`slide number is:`,current);
}

arrowLeft.addEventListener('click', () => {
    // 0 is first image
    // if (current === 0) {
    //     current = 3;  //total number of slides
    // }
    // slideLeft();
    console.log(`selected left`);
})

arrowRight.addEventListener('click', () => {
    // 0 is first image
    // console.log(current)
    // if (current === 3 - 1 ) {
    //     current =  - 1;  //total number of slides
    slideRight();
    console.log(`selected right`);
    // console.log(current)
})

logo.addEventListener('click', () => {
    console.log(`selected logo`);
})
// 
// startSlide();

