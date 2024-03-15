//---------------------------------------
// Fonction pour le chargement de la page
//---------------------------------------
window.addEventListener(`load`, ()=>{
    gsap.to(`.dot`, {y: -50, stagger: {each: 0.2, repeat: -1, yoyo: true}});
    gsap.to(`.shadow`, {y: 50, stagger: {each: 0.2, repeat: -1, yoyo: true}, opacity: 0.1});
    let timeLine = gsap.timeline();
    timeLine
    .to(`.container`, {width: 550, duration: 2, delay: 1, ease: `power2.out`})
    .to(`.load-container`, {opacity: 0, duration: 0.4, delay: 1.3})
    .add(()=>{
        document.querySelector(`.load-container`).style.display = `none`;
    })
    .to(`header`, {height: `10vh`, duration: 0.2, delay: 0.5})
    .to(`.hero`, {opacity: 1, duration: 0.2, delay: 0.5})
    .to(`.navbar`, {opacity: 1, duration: 0.2, delay: 0.5})
});

//-----------------------------------------------------------
// Fonction pour faire disparaitre et réaparraitre la nav bar
//-----------------------------------------------------------
