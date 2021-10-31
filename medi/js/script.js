let iconPhone = document.querySelector(".icon_phone")
iconPhone.addEventListener("click",function(){
    document.querySelector(".phone").classList.toggle("phone_active");
});
let iconBurger = document.querySelector(".menu_burger")
iconBurger.addEventListener("click",function(){
    document.querySelector(".menu").classList.toggle("menu_active")
});

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

let tabBtn = document.querySelectorAll(".tab_btn");
let tabContent = document.querySelectorAll(".tab_content")

function turnOffTabs(){
    tabBtn.forEach(function(tab){
        tab.classList.remove("tab_btn_acive")
    });

    tabContent.forEach(function(content){
        content.classList.remove("tab_content_active")
    })
};

tabBtn.forEach(function(tab){
    tab.addEventListener("click", function(){
        turnOffTabs()

        tab.classList.add("tab_btn_acive");

        let tabId = tab.getAttribute("data-tab");

        let tabContent = document.querySelector(tabId);

        tabContent.classList.add("tab_content_active")
    })
})

