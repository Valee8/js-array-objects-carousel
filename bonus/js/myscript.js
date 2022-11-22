// Consegna:
// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e
//  inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se l’img attiva è la prima e l’utente clicca la freccia prev, 
// l’img che deve attivarsi sarà l’ultima e viceversa per l’ultima img se l’utente clicca la freccia next.

// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2: Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà 
// cambiare alla successiva.
// BONUS 3: Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const images = [ 

    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man', 
    }, 

    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 

    {
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 

    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 

    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 

];

const items = document.getElementsByClassName("item");

let activeItem = 0;

images.forEach(elementImages => {
    document.querySelector(".slider").innerHTML += `
    <div class="item">
        <img src="${elementImages.image}">
        <div class="content-item">
            <div class="title">${elementImages.title}</div>
            <div class="text">${elementImages.text}</div>
        </div>    
    </div>`
});

// Aggiungo active al primo elemento
items[activeItem].classList.add("active");

// Bottone next
document.querySelector(".next").addEventListener("click", nextImage);                

// Bottone prev
document.querySelector(".prev").addEventListener("click", prevImage);


console.log(images);

console.log(items);


function nextImage() {
    if (activeItem < images.length - 1) {

        items[activeItem].classList.remove("active");

        activeItem++;

        items[activeItem].classList.add("active");

    }

    else {
        
        activeItem = 0;

        items[activeItem].classList.add("active");

        items[images.length - 1].classList.remove("active");

    }
}

function prevImage() {
    if (activeItem <= images.length - 1 && activeItem > 0) {

        items[activeItem].classList.remove("active");

        activeItem--;

        items[activeItem].classList.add("active");

    }

    else {

        activeItem = images.length - 1;

        items[activeItem].classList.add("active");

        items[0].classList.remove("active");

    }
}