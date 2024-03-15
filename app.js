//---------------------------------------
// Fonction pour le chargement de la page
//---------------------------------------
// let anim = document.querySelector(`.load-container p`);
// new Typewriter(anim).pauseFor(500).changeDelay(70).typeString(`Welcome ;)`).start();

let loader = document.querySelector(`.load-container`);
window.addEventListener(`load`, ()=>{
    setTimeout(()=>{
        loader.classList.add(`d-none`);
    },3000);
});