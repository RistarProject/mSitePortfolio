// .....................................video............................................................

let videoBtnPlay = document.querySelector("#btn_video_play");
let videoPlayIcon = document.querySelector("#play");
let videoFile = document.querySelector("#bike_video");
let hoverEffect = document.querySelector("#hover_video_bike");
videoBtnPlay.addEventListener("click", function(){
    function effectToggle(event){
        if(event.type === "mouseleave"){
            hoverEffect.classList.add("hidden");
        }else{
            hoverEffect.classList.remove("hidden");
        }
    }
    if(videoFile.paused){
        videoFile.play();
        videoPlayIcon.src="./icons/pause.png";
        hoverEffect.onmouseleave = effectToggle;
        hoverEffect.onmouseenter = effectToggle;
    }
    else{
          videoFile.pause();
          videoPlayIcon.src="./icons/play.svg";
          hoverEffect.onmouseleave = null;
          hoverEffect.onmouseenter = null;
    };
});
 
// .....................................................slider.......................................
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
