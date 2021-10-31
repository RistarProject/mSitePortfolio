const menuBurger = document.querySelector(".menu_burger");
menuBurger.onclick = function(){
    document.querySelector(".menu").classList.toggle("menu_active");
};

let sliders = document.querySelectorAll(".slider_item");
let dots = document.querySelectorAll(".slider_dot");

function disableSliders(){
    sliders.forEach(function(slider){
        slider.style.display = "none";
    })
}

function enableSlider(n){
    sliders[n].style.display = "block";
}

dots.forEach(function(dot, index){
    dot.onclick = function(){
        disableSliders();
        enableSlider(index);
    }
})