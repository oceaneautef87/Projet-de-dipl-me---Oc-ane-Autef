// JavaScript Document

//MENUS DEROULANTS

document.querySelectorAll('#menu li[data-target]').forEach(item => {

    item.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const idCible = this.dataset.target.replace('#', '');
        const cible = document.getElementById(idCible);

        if (!cible) return;

        cible.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});





//BOUTON RETOUR HAUT

const boutonRetourHaut = document.createElement("div");
boutonRetourHaut.id = "retourHaut";
boutonRetourHaut.textContent = "Retour";
document.body.appendChild(boutonRetourHaut);

boutonRetourHaut.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener("scroll", () => {
    boutonRetourHaut.style.display =
        window.pageYOffset > 300 ? "block" : "none";
});





//SCROLL DES SECTIONS DANS LA PAGE

const sections = document.querySelectorAll('.Groupe');

function reveleSections() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', reveleSections);
window.addEventListener('scroll', reveleSections);





//LISTE D'IMAGES

const sliderImage = document.getElementById("sliderImage");
const slider = document.getElementById("slider");

const imagesParSection = {
    visuelentreeprincipale: ['images/Image1.jpg', 'images/Image2.jpg', 'images/Image11.jpg', 'images/Image22.jpg'],
	visuelterrassecafe: ['images/Image13.jpg', 'images/Image3.jpg', 'images/Image4.jpg',  'images/Image5.jpg', 				'images/Image12.jpg', 'images/Image107_000.jpg'],
	visuelinterieurcafe: ['images/Image6.jpg', 'images/Image106.jpg'],
	visuelbitume: ['images/Image16.jpg', 'images/Image14.jpg', 'images/Image17.jpg', 'images/Image45.jpg','images/Image40.jpg', 'images/Image74.jpg'],
	visuelyoga: ['images/Image19.jpg', 'images/Image20.jpg', 'images/Image25.jpg', 'images/Image112.jpg'],
	visuelbas: ['images/Image31.jpg', 'images/Image32.jpg', 'images/Image38.jpg', 'images/Image29.jpg', 'images/Image43.jpg', 'images/Image72_000.jpg'],
	visuelplans: ['images/Image108.jpg', 'images/Image108_000.jpg'],
	visuelsoussol: ['images/Image50.jpg', 'images/Image51.jpg', 'images/Image58.jpg', 'images/Image60.jpg', 'images/Image61.jpg', 'images/Image62.jpg', 'images/Image49.jpg'],
	visuelcuisine: ['images/Image56.jpg', 'images/Image57.jpg', 'images/Image53.jpg', 'images/Image105.jpg', 'images/4.jpg'],
	visuelrezdechausee: ['images/Image64.jpg', 'images/Image66.jpg', 'images/Image69.jpg', 'images/Image71.jpg', 'images/Image75.jpg', 'images/Image76.jpg', 'images/Image79.jpg', 'images/Image104.jpg'],
	visueletage1: ['images/Image82.jpg', 'images/Image81.jpg', 'images/Image85.jpg', 'images/Image103.jpg'],
	visueletage2: ['images/Image83.jpg', 'images/Image89.jpg', 'images/Image96.jpg', 'images/Image94.jpg', 'images/Image93.jpg'],
	visueletage2bis: ['images/Image98.jpg', 'images/Image99.jpg', 'images/Image101.jpg', 'images/Image102.jpg'],
};

let listeImages = [];
let currentIndex = 0;


//SLIDER LISTE D'IMAGES

function afficheSlider(images, indexDepart = 0) {
    listeImages = images;
    currentIndex = indexDepart;
    sliderImage.src = listeImages[currentIndex];
    slider.style.display = "flex";
    setTimeout(() => {
        slider.style.opacity = 1;
    }, 50);
}

function cacheSlider() {
    slider.style.opacity = "0";
    setTimeout(() => {
        slider.style.display = "none";
    }, 1000);
}

function suivSlider() {
    if (listeImages.length > 0) {
        currentIndex = (currentIndex + 1) % listeImages.length;
        sliderImage.src = listeImages[currentIndex];
    }
}

function precSlider() {
    if (listeImages.length > 0) {
        currentIndex = (currentIndex - 1 + listeImages.length) % listeImages.length;
        sliderImage.src = listeImages[currentIndex];
    }
}

const imagesSlider = document.querySelectorAll('.Groupe img[data-key]');
for (let image of imagesSlider) {
    image.addEventListener("click", function (e) {
        const key = this.getAttribute("data-key");
        if (imagesParSection[key]) {
            afficheSlider(imagesParSection[key], 0);
        }
    });
}

slider.addEventListener("click", function (e) {
    if (e.target === slider) {
        cacheSlider();
    }
});

