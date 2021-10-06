/*----------- Hovered ------------*/
let list = document.querySelectorAll(".nav-item");

function activeLink() {
    list.forEach((item)=>
    item.classList.remove("hovered"));
    this.classList.add("hovered");
}
list.forEach((item) =>
item.addEventListener("mouseover", activeLink));



/*------ Menu Toggle ----------*/
let toggle = document.getElementById("toggle");
let nav = document.getElementById("nav");
let main = document.getElementById("main");

toggle.onclick = function() {
    nav.classList.toggle("active");
    main.classList.toggle("active");
}