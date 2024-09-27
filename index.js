var menuButton = document.querySelector("header button");

menuButton.onclick = function() {
    openMenu();
    Kruisje();
}



function openMenu() {
    var Nav = document.querySelector("nav"); 
    Nav.classList.toggle("openmenu")
}



function Kruisje() {
    if (menuButton.ariaExpanded == "false") {
        menuButton.ariaExpanded = "true"
    }
    else {
        menuButton.ariaExpanded = "false"
    }
}






var rondje1 = document.querySelector(".rondje:first-of-type");
var rondje2 = document.querySelector(".rondje:nth-of-type(2)");
var rondje3 = document.querySelector(".rondje:nth-of-type(3)");
var rondje4 = document.querySelector(".rondje:nth-of-type(4)");
var rondje5 = document.querySelector(".rondje:nth-of-type(5)");
var rondje6 = document.querySelector(".rondje:nth-of-type(6)");


var img = document.querySelector("#img");

rondje1.onclick = eersteFoto;

function eersteFoto() {
    img.src= "images/tijger.webp";
}

rondje1.addEventListener('click', function() {
    this.classList.add('active');
}); 


rondje2.onclick = tweedeFoto; 

function tweedeFoto() {
    img.src= "modder.webp"; 
}

rondje2.addEventListener('click', function() {
    this.classList.add('active');

}); 



rondje3.onclick = derdeFoto;

function derdeFoto() {
    img.src= "images/vrouwbos.webp";
}

rondje3.addEventListener('click', function() {
    this.classList.add('active');
}); 

rondje4.onclick = vierdeFoto;

function vierdeFoto() {
    img.src= "images/olifantcloseup.webp";
}

rondje4.addEventListener('click', function() {
    this.classList.add('active');
}); 

rondje5.onclick = vijfdeFoto; 

function vijfdeFoto() {
    img.src= "images/ijsvogel.webp";
}

rondje5.addEventListener('click', function() {
    this.classList.add('active');
}); 

rondje6.onclick = zesdeFoto;

function zesdeFoto() {
    img.src= "images/koraal.webp";
}

rondje6.addEventListener('click', function() {
    this.classList.add('active');
}); 