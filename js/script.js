// html

function progressBarHtml (){
    let element = document.getElementById("progress_orange_html");
    let height = 0;
    let id = setInterval(progressStartHtml,80);
    function progressStartHtml(){
        if(height >= 60){
            clearInterval(id);
        } else{
            height++;
            element.style.height = height + '%'; 
            element.innerHTML = height * 1 + "%";
        };
    };
};

progressBarHtml();

// css

function progressCss (){
    let element = document.getElementById("progress_blue_css");
    let height = 0;
    let id = setInterval(progressCss,80);
    function progressCss(){
        if(height >= 40){
            clearInterval(id);
        } else{
            height++;
            element.style.height = height + '%'; 
            element.innerHTML = height * 1 + "%";
        };
    };
};

progressCss();

// js

function progressJs (){
    let element = document.getElementById("progress_yellow_js");
    let height = 0;
    let id = setInterval(progressJs,80);
    function progressJs(){
        if(height >= 10){
            clearInterval(id);
        } else{
            height++;
            element.style.height = height + '%'; 
            element.innerHTML = height * 1 + "%";
        };
    };
};

progressJs();


const iconPhone = document.querySelector(".icon_phone");
iconPhone.addEventListener("click", function(){
    document.querySelector(".number_phone").classList.toggle("number_phone_active");
});

const menuBurger = document.querySelector(".menu_burger");
menuBurger.addEventListener("click", function(){
    menuBurger.classList.toggle("menu_burger_active");
});
menuBurger.addEventListener("click", function(){
    document.querySelector(".menu").classList.toggle("menu_mobile")
});