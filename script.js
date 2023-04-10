let btn = document.getElementById("btn");
let txt = document.getElementById("txt");
let test = document.querySelector("#test") 

function changeColor(color) {
    document.body.style.background = color;
    btn.style.background = color;
    txt.style.borderColor = color;
    test.style.color = color;


    let span = document.querySelectorAll("span");

    span.forEach(function(item) {
        item.classList.remove("active");
    });
    event.target.classList.add("active");
}


let styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
let colors = document.querySelector(".colors")

styleSwitcherToggler.addEventListener("click" , () => {
    colors.classList.toggle("show");
})