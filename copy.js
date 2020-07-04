let fhPhotoApp = {};

// DATA - Reference Data Set
fhPhotoApp.slides = [
	(slide1 = {
		cat: `automotive`,
		src: `url('./assets/Auto01FH-SubaruBirds.jpg')`,
		alt: "Subaru at ice cream stand with birds above on the wires",
	}),
	(slide2 = {
		cat: `automotive`,
		src: `url('./assets/Auto02FH-FordWideRoadwayShot.jpg')`,
		alt: "Ford driving on logging road",
	}),
	(slide3 = {
		cat: `automotive`,
		src: `url('./assets/Auto03FH-ToyotaTundraSnowSpray.jpg')`,
		alt: "Toyota truck off road in deep snow",
	}),
	(slide4 = {
		cat: `automotive`,
		src: `url('./assets/Auto04FH-SubaruRunning.jpg')`,
		alt: "Subaru running shot",
	}),
	(slide5 = {
		cat: `automotive`,
		src: `url('./assets/Auto05FH-ToyotaLogging.jpg')`,
		alt: "",
	}),
	(slide6 = {
		cat: `automotive`,
		src: `url('./assets/Auto06FH-ToyotaConstruction.jpg')`,
		alt: "",
	}),
	(slide7 = {
		cat: `automotive`,
		src: `url('./assets/Auto07FH-ToyotaConstruction.jpg')`,
		alt: "",
	}),
	(slide8 = {
		cat: `automotive`,
		src: `url('./assets/Auto08FH-LexusCityHall.jpg')`,
		alt: "",
	}),
	(slide9 = {
		cat: `automotive`,
		src: `url('./assets/Auto09FH-SubaruRallyShot A.jpg')`,
		alt: "",
	}),
	(slide10 = {
		cat: `automotive`,
		src: `url('./assets/Auto10FH-SubaruRallyShot E.jpg')`,
		alt: "",
	}),
	(slide11 = {
		cat: `automotive`,
		src: `url('./assets/Auto11FH-SubaruRallyShot D.jpg')`,
		alt: "",
	}),
	(slide12 = {
		cat: `automotive`,
		src: `url('./assets/Auto12FH-SubaruSumoGarage.jpg')`,
		alt: "",
	}),
	(slide13 = {
		cat: `automotive`,
		src: `url('./assets/Auto13FH-SubaruSumoBarn.jpg')`,
		alt: "",
	}),
	(slide14 = {
		cat: `automotive`,
		src: `url('./assets/Auto14FH-SubaruSumoCarWash.jpg')`,
		alt: "",
	}),
	(slide15 = {
		cat: `automotive`,
		src: `url('./assets/Auto15FH-SubaruImprezaDiner.jpg')`,
		alt: "",
	}),
	(slide16 = {
		cat: `automotive`,
		src: `url('./assets/Auto16FH-SubaruTruck.jpg')`,
		alt: "",
	}),
	(slide17 = {
		cat: `automotive`,
		src: `url('./assets/Auto17FH-SubaruCrossTrek.jpg')`,
		alt: "",
	}),
	(slide18 = {
		cat: `automotive`,
		src: `url('./assets/Auto18FH-SubaruWideRunningShot.jpg')`,
		alt: "",
	}),
	(slide19 = {
		cat: `automotive`,
		src: `url('./assets/Auto19FH-SubaruMoose.jpg')`,
		alt: "",
	}),
	(slide20 = {
		cat: `automotive`,
		src: `url('./assets/Auto20FH-SubaruMudSplash.jpg')`,
		alt: "",
	}),
	(slide21 = {
		cat: `lifestyle`,
		src: `url('./assets/Life01FH-BCHydroBathroomFlooded.jpg')`,
		alt: "woman in Bathrobe with tub overflowing in flooded bathroom",
	}),
	(slide22 = {
		cat: `lifestyle`,
		src: `url('./assets/Life02FH-GainMechanic.jpg')`,
		alt: "waiting area in auto repair shop",
	}),
	(slide23 = {
		cat: `lifestyle`,
		src: `url('./assets/Life03FH-CrimeStoppersMattress.jpg')`,
		alt: "Giant gun under matress",
	}),
	(slide24 = {
		cat: `lifestyle`,
		src: `url('./assets/Life04FH-BCHydroTV&OfficeSpread.jpg')`,
		alt: "two images showing energy leaking out of electrical devices",
	}),
	(slide25 = {
		cat: `lifestyle`,
		src: `url('./assets/Life05FH-GreeniesCatMain.jpg')`,
		alt: "",
	}),
	(slide26 = {
		cat: `lifestyle`,
		src: `url('./assets/Life06FH-CrimeStoppersGunAlley.jpg')`,
		alt: "",
	}),
	(slide27 = {
		cat: `lifestyle`,
		src: `url('./assets/Life07FH-CovenantHouseNet&LeverHockey.jpg')`,
		alt: "",
	}),
	(slide28 = {
		cat: `lifestyle`,
		src: `url('./assets/Life08FH-TranslinkRipleysRat.jpg')`,
		alt: "",
	}),
	(slide29 = {
		cat: `lifestyle`,
		src: `url('./assets/Life09FH-CarlingBall.jpg')`,
		alt: "",
	}),
	(slide30 = {
		cat: `lifestyle`,
		src: `url('./assets/Life10FH-CarlingMeat.jpg')`,
		alt: "",
	}),
	(slide31 = {
		cat: `lifestyle`,
		src: `url('./assets/Life11FH-CialisTurkey.jpg')`,
		alt: "",
	}),
	(slide32 = {
		cat: `lifestyle`,
		src: `url('./assets/Life12FH-RaiseTheRoof Plant.jpg')`,
		alt: "",
	}),
	(slide33 = {
		cat: `lifestyle`,
		src: `url('./assets/Life13FH-CialisCar.jpg')`,
		alt: "",
	}),
	(slide34 = {
		cat: `lifestyle`,
		src: `url('./assets/Life14FH-ScotiabankDogs.jpg')`,
		alt: "",
	}),
	(slide35 = {
		cat: `lifestyle`,
		src: `url('./assets/Life15FH-HotWheelsCheeseAndTankAlt.jpg')`,
		alt: "",
	}),
	(slide36 = {
		cat: `lifestyle`,
		src: `url('./assets/Life16FH-HotWheelsDog.jpg')`,
		alt: "",
	}),
	(slide37 = {
		cat: `lifestyle`,
		src: `url('./assets/Life17FH-TimmiesLucy.jpg')`,
		alt: "",
	}),
	(slide38 = {
		cat: `lifestyle`,
		src: `url('./assets/Life18FH-SubaruGym.jpg')`,
		alt: "",
	}),
	(slide39 = {
		cat: `lifestyle`,
		src: `url('./assets/Life19FH-SubaruClassroom.jpg')`,
		alt: "",
	}),
	(slide40 = {
		cat: `lifestyle`,
		src: `url('./assets/Life20FH-CialisLivingRoom.jpg')`,
		alt: "",
	}),
	(slide41 = {
		cat: `landscape`,
		src: `url('./assets/Land01FH-RaiseTheRoofChair.jpg')`,
		alt: "Chair sitting on curbside",
	}),
	(slide42 = {
		cat: `landscape`,
		src: `url('./assets/Land02FH-PersonalHamiltonWalkway.jpg')`,
		alt: "Overhead Image of walkway thru trees",
	}),
	(slide43 = {
		cat: `landscape`,
		src: `url('./assets/Land03FH-CrimeStoppersPark.jpg')`,
		alt: "",
	}),
	(slide44 = {
		cat: `landscape`,
		src: `url('./assets/Land04FH-CrimeStoppersRiver&CarTrunk.jpg')`,
		alt: "two images, of quotation marks set in scenes",
	}),
	(slide45 = {
		cat: `landscape`,
		src: `url('./assets/Land05FH-PersonalCountryRoad.jpg')`,
		alt: "",
	}),
	(slide46 = {
		cat: `landscape`,
		src: `url('./assets/Land06FH-SportchekRoad.jpg')`,
		alt: "",
	}),
	(slide47 = {
		cat: `landscape`,
		src: `url('./assets/Land07FH-Petro-CanadaFarm.jpg')`,
		alt: "",
	}),
	(slide48 = {
		cat: `landscape`,
		src: `url('./assets/Land08FH-ToyotaFather&Son.jpg')`,
		alt: "",
	}),
	(slide49 = {
		cat: `landscape`,
		src: `url('./assets/Land09FH-WorkopolisDogWalk.jpg')`,
		alt: "",
	}),
	(slide50 = {
		cat: `landscape`,
		src: `url('./assets/Land10FH-PedigreeBoat.jpg')`,
		alt: "",
	}),
	(slide51 = {
		cat: `landscape`,
		src: `url('./assets/Land11FH-Mastercard Fish.jpg')`,
		alt: "",
	}),
	(slide52 = {
		cat: `landscape`,
		src: `url('./assets/Land12FH-AppletonTruckInCaneField.jpg')`,
		alt: "",
	}),
	(slide53 = {
		cat: `landscape`,
		src: `url('./assets/Land13FH-AppletonStrawberryHillGarden Pool.jpg')`,
		alt: "",
	}),
	(slide54 = {
		cat: `landscape`,
		src: `url('./assets/Land14FH-AppletonWaterTower.jpg')`,
		alt: "",
	}),
	(slide55 = {
		cat: `landscape`,
		src: `url('./assets/Land15FH-AppletonFemaleDiver.jpg')`,
		alt: "",
	}),
	(slide56 = {
		cat: `landscape`,
		src: `url('./assets/Land16FH-AppletonStrawberryHillBench.jpg')`,
		alt: "",
	}),
	(slide57 = {
		cat: `landscape`,
		src: `url('./assets/Land17FH-AppletonSunsetInCaneField.jpg')`,
		alt: "",
	}),
	(slide58 = {
		cat: `landscape`,
		src: `url('./assets/Land18FH-ToyotaManIsHisTruck.jpg')`,
		alt: "",
	}),
	(slide59 = {
		cat: `landscape`,
		src: `url('./assets/Land19FH-CialisLawnmowerWFlare.jpg')`,
		alt: "",
	}),
	(slide60 = {
		cat: `landscape`,
		src: `url('./assets/Land20FH-ToyotaGetGoingCanadaGarage.jpg')`,
		alt: "portait of young girl, tight headshot",
	}),
	(slide61 = {
		cat: `people`,
		src: `url('./assets/People01FH-PersonalNatashaPortrait.jpg')`,
		alt: "portait of young girl, tight headshot",
	}),
	(slide62 = {
		cat: `people`,
		src: `url('./assets/People02FH-MastercardPool.jpg')`,
		alt: "boy with mask and snorkel underwater",
	}),
	(slide63 = {
		cat: `people`,
		src: `url('./assets/People03FH-OPA_AbbyInField.jpg')`,
		alt: "girl walking thru tall grass",
	}),
	(slide64 = {
		cat: `people`,
		src: `url('./assets/People04FH-KraftTent.jpg')`,
		alt: "two boys inside makeshift tent",
	}),
	(slide65 = {
		cat: `people`,
		src: `url('./assets/People05FH-KraftPool.jpg')`,
		alt: "two girls on lawn chair wrapped in towel",
	}),
	(slide66 = {
		cat: `people`,
		src: `url('./assets/People06FH-PersonalElizabethInBed.jpg')`,
		alt: "woman lying in bed looking at camera",
	}),
	(slide67 = {
		cat: `people`,
		src: `url('./assets/People07FH-ScotiabankChocolate.jpg')`,
		alt: "girl choosing sweet, seen thru display window",
	}),
	(slide68 = {
		cat: `people`,
		src: `url('./assets/People08FH-AppletonControlRoom.jpg')`,
		alt: "operator in older control room",
	}),
	(slide69 = {
		cat: `people`,
		src: `url('./assets/People09FH-QuakerBoy.jpg')`,
		alt: "young boy trying on oversized helmut",
	}),
	(slide70 = {
		cat: `people`,
		src: `url('./assets/People10FH-PersonalDad.jpg')`,
		alt: "man in bathroom",
	}),
	(slide71 = {
		cat: `people`,
		src: `url('./assets/People11FH-SubaruSadGermans.jpg')`,
		alt: "german caricatures looking at spilt beer",
	}),
	(slide72 = {
		cat: `people`,
		src: `url('./assets/People12FH-WSIB_Plumber_Office.jpg')`,
		alt: "plumber in hazmat suit",
	}),
	(slide73 = {
		cat: `people`,
		src: `url('./assets/People13FH-Toyota2Spreads.jpg')`,
		alt: "two split images of upper and lower body",
		srcAlt: `url('')`,
		logo: true,
	}),
	(slide74 = {
		cat: `people`,
		src: `url('./assets/People14FH-SportslistBasketball.jpg')`,
		alt: "",
	}),
	(slide75 = {
		cat: `people`,
		src: `url('./assets/People15FH-WorldVisionShot4v12F.jpg')`,
		alt: "",
	}),
	(slide76 = {
		cat: `people`,
		src: `url('./assets/People16FH-ElectionsOntarioNicki&Shandelle.jpg')`,
		alt: "",
	}),
	(slide77 = {
		cat: `people`,
		src: `url('./assets/People17ConstructionSafetyPuzzle.jpg')`,
		alt: "",
	}),
	(slide78 = {
		cat: `people`,
		src: `url('./assets/People18FH-CarlingKitchen.jpg')`,
		alt: "",
	}),
	(slide79 = {
		cat: `people`,
		src: `url('./assets/People19FH-BCHydroDogFood.jpg')`,
		alt: "",
	}),
	(slide80 = {
		cat: `people`,
		src: `url('./assets/People20FH-CrimeStoppersHoodie.jpg')`,
		alt: "",
	}),
];

fhPhotoApp.logoImages = [
	(image1 = {
		cat: `logo`,
		src: `url('./assets/Logo01_FH-OPA_AbbyInField.jpg')`,
		alt: "",
	}),
	(image2 = {
		cat: `logo`,
		src: `url('./assets/Logo02_FH-PedigreeBoat.jpg')`,
		alt: "",
	}),
	(image3 = {
		cat: `logo`,
		src: `url('./assets/Logo03_FH-Toyota2Spreads.jpg')`,
		alt: "",
	}),
	(image4 = {
		cat: `logo`,
		src: `url('./assets/Logo04_FH-MastercardPool.jpg')`,
		alt: "",
	}),
	(image5 = {
		cat: `logo`,
		src: `url('./assets/logo05_FH-CrimeStoppersHoodie.jpg')`,
		alt: "",
	}),
	(image6 = {
		cat: `logo`,
		src: `url('./assets/Logo06_FH-AppletonFemaleDiver.jpg')`,
		alt: "",
	}),
	(image7 = {
		cat: `logo`,
		src: `url('./assets/Logo07_FH-AppletonSunsetInCaneField.jpg')`,
		alt: "",
	}),
	(image8 = {
		cat: `logo`,
		src: `url('./assets/Logo08_FH-MastercardFish.jpg')`,
		alt: "",
	}),
];

// ARGUMENTS
fhPhotoApp.slidesByCategory = fhPhotoApp.slides; // Duplicate for Category Sorting
fhPhotoApp.current = 0; //image counter
fhPhotoApp.category = ""; //temporary
fhPhotoApp.length = fhPhotoApp.slides.length;

// SELECTORS
fhPhotoApp.logo = document.querySelector(".logoClip");
fhPhotoApp.sliderImages = document.querySelector(".slide");
fhPhotoApp.sliderPrevious = document.querySelector(".previousSlide");
fhPhotoApp.sliderNext = document.querySelector(".nextSlide");
fhPhotoApp.arrowLeft = document.querySelector("#arrowLeft");
fhPhotoApp.arrowRight = document.querySelector("#arrowRight");
fhPhotoApp.goToGallery = document.querySelector(".portfolioContainer");
fhPhotoApp.goToPortfolio = document.querySelector(`#slider`);

// NameSpacing Destructured.
let {
	current,
	category,
	slides,
	slidesByCategory,
	logoImages,
	length,
} = fhPhotoApp;

const {
	logo,
	sliderImages,
	sliderNext,
	sliderPrevious,
	arrowLeft,
	arrowRight,
	goToGallery,
	goToPortfolio,
} = fhPhotoApp;

// INITIAL Assignment of Image Values
// Thru Logo

logo.style.cssText = `  background-image: ${logoImages[0].src}; 
                        background-size: cover;
						background-position: 70% 100%; 
						background-repeat: no-repeat;
						`;

// EVENT LISTENERS
// LOGO Event
logo.addEventListener("click", () => {
	console.log(`selected logo`);
});

// PORTFOLIOS SELECTED Event
goToGallery.addEventListener("click", function (e) {
	category = e.target.childNodes[1].className;
	// category = e.target.childNodes[1].className;
	console.log(`category is: `, category);
	fhPhotoApp.setCategory();
});

// GALLERY NAVIGATION Event
// ARROWS & SPLIT SCREEN Combined, Navigating thru gallery
document.addEventListener("keydown", (e) => {
	console.log("key event:", e.code);
	e.code === `ArrowLeft`
		? fhPhotoApp.back()
		: e.code === `ArrowRight`
		? fhPhotoApp.forward()
		: null;
});

// window.addEventListener("mousedown", (e) => {
//     let width = document.documentElement.clientWidth;
//     let X = e.clientX;
//     (X <= width / 2) ? fhPhotoApp.back() : fhPhotoApp.forward();
// });
//     // Arrows may be redundant depending on other elements
//     arrowRight.addEventListener = ('click',() => {
//         window.removeEventListener(`mousedown`, addEventListener);
//         fhPhotoApp.forward();
//     })
//     arrowLeft.addEventListener = ('click', () => {
//         window.removeEventListener(`mousedown`, addEventListener);
//         fhPhotoApp.back();
//     })
// ARROWS ONLY, Navigating thru gallery
arrowRight.addEventListener("click", () => fhPhotoApp.forward());
arrowLeft.addEventListener("click", () => fhPhotoApp.back());

// FUNCTIONS
// Clears all images...
fhPhotoApp.reset = () => {
	for (let i = 0; i < slides.length; i++) {
		sliderImages.style.display = "none";
	}
};

// Base Image in the collection
fhPhotoApp.startSlide = () => {
	fhPhotoApp.reset();
	sliderImages.style.display = "block";
};

// Selecting Portfolio Category
fhPhotoApp.setCategory = function () {
	slidesByCategory = slides.filter((slide) => slide.cat === category);
	length = slidesByCategory.length;
	current = 0; // Reset the Gallery to the First Image[0]
	fhPhotoApp.displayImage();
	goToPortfolio.scrollIntoView();
};

// Navigation of Gallery
fhPhotoApp.forward = () => {
	current === slidesByCategory.length - 1 ? (current = -1) : current;
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
	current === 0 ? (current = slidesByCategory.length) : current;
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
	console.log(current);
	sliderNext.style.cssText = ` background-image : ${
		slidesByCategory[current + 1].src
	}; `;
	sliderPrevious.style.cssText = ` background-image : ${
		slidesByCategory[current - 1].src
	}; `;
};

// fhPhotoApp.preloadImages = function () {
// 	current === slidesByCategory.length - 1 ? (current = -1) : current;
// 	console.log(current + 1);
// 	sliderNext.style.cssText = `
// 					background-image : ${slidesByCategory[current + 1].src};
// 					`;
// 	console.log(slidesByCategory[current + 1].src);
// }

// Initialize
fhPhotoApp.init = () => {
	fhPhotoApp.slideRight();
	fhPhotoApp.slideLeft();
};
// Document Ready
let ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
};
ready(() => {
	console.log(
		"Welcome to Frank Hoedl Photography, all images are copyright Frank Hoedl"
	);
	fhPhotoApp.init();
});



// ARCHIVE

isChecked.addEventListener('click', function () {
	if (isChecked.checked === true) {
		console.log('checked')
		menuOverlay.classList.add('toggle');
	} else {
		console.log('unchecked')
		menuOverlay.classList.remove('toggle');
	}
});