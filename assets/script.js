
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
  console.log (slides)
/******Déclaration des constantes***** */
  const slideContainer = document.querySelector(".banner-img");
  const sliderText = document.querySelector("#banner  p");
  const dotContainer = document.querySelector(".dots");
  const btnLeft = document.querySelector(".arrow_left");
  const btnRight = document.querySelector(".arrow_right");
  
  let slideCounter = 0;
  
  /**ce code ajoute des evenements d'ecoute (listener)  sur les boutons droit et permet de faire defiller les images*/
  btnRight.addEventListener("click", function () {
	if (slideCounter === slides.length - 1) {
	  slideCounter = -1;
	}
	slideContainer.src = `./assets/images/slideshow/${
	  slides[slideCounter + 1].image/*******cet attribut est mis à jour pour charger une image à partir
	   d’un chemin construit à l’aide du tableau slides et du slideCounter actuel. */
	}`;
	sliderText.innerHTML = slides[slideCounter + 1].tagLine;/*****insertion du text correspondant à l'image* */
	slideCounter++;
	updatePosition();

  });
  
  /**ce code ajoute des evenements d'ecoute (listener)  sur les boutons gauche et permet de faire defiler les images*/
  btnLeft.addEventListener("click", function () {
	if (slideCounter === 0) {
	  slideCounter = slides.length;
	}
	slideContainer.src = `./assets/images/slideshow/${
	  slides[slideCounter - 1].image
	}`;
	sliderText.innerHTML = slides[slideCounter - 1].tagLine;
	slideCounter--;
	updatePosition();
	
  });
  
  /********cette fonction permet la mise à jour des bullet points par l'ajout et la suppression de la classe dot_selected */
  function updatePosition() {
	dots.forEach((dot) => {/**Cette fonction parcourt chaque élément dans le tableau dots */
	  dot.classList.remove("dot_selected");/**et supprime la classe "dot_selected" de tous les éléments. */
	});
  
	dots[slideCounter].classList.add("dot_selected");/**Ensuite, elle ajoute la classe "dot_selected" 
	                                                   à l’élément correspondant à l’index actuel */
  }
  
  /********ce code permet de creer et d'ajouter les dots dans la balise div */
  slides.forEach((_slide) => {/***Ce code parcourt chaque élément dans le tableau slides */
	const dot = document.createElement("div");/** et crée un nouvel élément <div> pour chaque diapositive */
	dot.classList.add("dot");/**Ensuite, il ajoute la classe "dot" à cet élément  */
	dotContainer.appendChild(dot);/**et l’ajoute au conteneur dotContainer */
  });
  
  const dots = document.querySelectorAll(".dot");/***Ce code sélectionne tous les éléments avec la classe "dot" */
  dots[slideCounter].classList.add("dot_selected");/****et ajoute la classe "dot_selected" à l’élément correspondant à l’index actuel de slideCounter */
  