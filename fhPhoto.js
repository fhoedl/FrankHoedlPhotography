console.log("hi, linked js file")


const slides2 = [
	slide1 = {
		cat: `automotive`,
		src: `url('./assets/image1.jpg')`,
		alt: "ford driving on logging road"
	},
	slide2 = {
		cat: `automotive`,
		src: `url('./assets/image2.jpg')`,
		alt: "subaru at ice cream stand with birds above on the wires"
	},
	slide3 = {
		cat: `automotive`,
		src: `url('./assets/image3.jpg')`,
		alt: "Toyota truck off road in deep snow"
	},
];

// let fhPhotoApp = {}; //add namespacing
// console.log(replace())

// let imageNum = 0;
// Selectors...git status

let sliderImages = document.querySelector('.slide');
sliderImages.style.backgroundImage = slides2[0].src;
let arrowLeft = document.querySelector('#arrowLeft');
let arrowRight = document.querySelector('#arrowRight');
let logo = document.querySelector('.logoClip');
console.log(sliderImages);
let logoImages = document.querySelector('.logoImage')
logoImages.style.backgroundImage = slides2[2].src;
logoImages.style.backgroundSize = 'cover';
logoImages.style.backgroundPosition = '50% 100%';

// let selected = document.querySelector(".slide");
let current = 0; //image counter
// let slide = `slide${currentSlide}`;
let slide = slides2[current]

// let slideAlt = sliderImages.setAttribute(slides2[0].key, slides2[0].src);
// console.log(slides2[0].key, slides2[0].src);
// console.log(slideAlt);
// console.log(selected)



// image(0);
// Clears all images...
// function reset(){
//     for(let i=0; i<3; i++) {       
// //         // image(i).style.display = " none";
// //         // image(i).style.display = "none"       
//         selected.style.display = "none";
//     }
// }


// function startSlide(){
//     reset(); 
//     // image(0).style.display = "block"; 
//     // selected.classList.add(slides[current]);
//     selected.style.display = 'block';
// }



// show Next Image
function slideRight() {
    // console.log(current)
    // reset();
    // let selected = document.querySelector(".slide");

    current++;
    // console.log(current)
    sliderImages.style.backgroundImage = slides2[current].src;
    sliderImages.style.alt = slides2[current].alt;
    // slide = `slide${currentSlide}`;
    // selected.classList.remove(slide);
    // slide = `slide${currentSlide++}`;
    // selected.classList.remove(slide);
    // selected.classList.add(slides2[current]);
    console.log(`slide number is:`,current);
}

arrowRight.addEventListener('click', () => {
    console.log(`selected right`);
    // 0 is first image
    // console.log(current)
    // if (current === 3 - 1 ) {
    //     current =  - 1;  //total number of slides
    slideRight();
    // slideRight2();
    // console.log(current)
})


// //show Previous Image
// function slideLeft(){
//     reset();
//     sliderImages.style.display = "none";
//     // image(current - 1).style.display = "block";
//     current --;
// }

// arrowLeft.addEventListener('click', () => {
//     // 0 is first image
//     // if (current === 0) {
//     //     current = 3;  //total number of slides
//     // }
//     // slideLeft();
//     console.log(`selected left`);
// })


//eventListener on LOGO
// logo.addEventListener('click', () => {
//     console.log(`selected logo`);
// })


// 
// startSlide();



/// ????
// slideImages.innerHTML = `<img src="./assets/image${imageNum + 1}.jpg" alt="" srcset="">`;
// let displayImg = sliderImages;

// let image = (imageNum) =>{
//     sliderImages.innerHTML += `<img src="./assets/image${imageNum + 1}.jpg" alt="" srcset="">`;
// }