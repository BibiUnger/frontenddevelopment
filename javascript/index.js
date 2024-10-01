//<!--met hulp van https://codepen.io/shooft/pen/JjQLVeB  -->
var menuButton = document.querySelector("header button");
var header = document.querySelector('header'); 
var Nav = document.querySelector("nav"); 

//<!--om de de navigatie tevoorschijn te laten komen als er op de menu button wordt geklikt, en de navigatie weg laten gaan als er weer op de menu button wordt geklikt  -->
menuButton.onclick = function() {
    openMenu();
    Kruisje();
}


function Kruisje() {
    if (menuButton.ariaExpanded == "false") {
        menuButton.ariaExpanded = "true"
    }
    else {
        menuButton.ariaExpanded = "false"
    }
};



//met hulp van https://www.w3schools.com/jsref/met_domtokenlist_contains.asp//
function openMenu() {
    Nav.classList.toggle("openmenu");
    if (Nav.classList.contains("openmenu")) {
        header.classList.add('headerscrol');
    } else if (window.scrollY <= 200) {
        header.classList.remove('headerscrol');
    }
};



//met hulp van https://www.w3schools.com/jsref/prop_win_scrolly.asp //

//<!--om de header te veranderen met de class 'headerscrol' als er meer dan 200 pixels gescrold wordt -->

var header = document.querySelector('header'); 

window.onscroll = function() {
    if (window.scrollY > 200 || Nav.classList.contains("openmenu")) {
        header.classList.add('headerscrol');
    } else {
        header.classList.remove('headerscrol');
    }
}; 




//<!--om een de tijgerfoto te veranderen wanneer er op een andere knop wordt geklikt -->
//<!--en om een class toe te voegen als er op een rondje geklikt wordt,en weer te verwijderen als er op een ander rondje wordt geklikt -->

var rondjes = document.querySelectorAll(".rondje");
var img = document.querySelector("div:first-of-type img");


//<!--om de rondjes aan de juiste foto te koppelen -->
//<!--met behulp van https://chatgpt.com/ om de rondjes aan de foto's te koppelen-->

andereFotoEnClass(rondjes[0], "images/tijger.webp");
andereFotoEnClass(rondjes[1], "images/modder.webp");
andereFotoEnClass(rondjes[2], "images/vrouwbos.webp");
andereFotoEnClass(rondjes[3], "images/olifantcloseup.webp");
andereFotoEnClass(rondjes[4], "images/ijsvogel.webp");
andereFotoEnClass(rondjes[5], "images/koraal.webp");


function verwijderClass() {
    rondjes.forEach(function(rondje) {
        rondje.classList.remove('active');
    });
}

function andereFotoEnClass(rondje, nieuweFoto) {
    rondje.onclick = function() {
        verwijderClass();
        this.classList.add('active'); 
        img.src = nieuweFoto;
    };
}




