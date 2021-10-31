const iconPhone = document.querySelector(".icon_phone");
iconPhone.addEventListener("click",function(){
    document.querySelector(".namber_phone").classList.toggle("namber_phone_active");
})

let iconSearch = document.querySelector(".icon_search");
iconSearch.addEventListener("click",function(){
    document.querySelector(".search").classList.toggle("search_active");
});

const nemuBurger = document.querySelector(".menu_burger");
nemuBurger.addEventListener("click", function(){
    nemuBurger.classList.toggle("menu_burger_active");
});

nemuBurger.addEventListener("click", function(){
    document.querySelector(".menu").classList.toggle("menu_mobile");
});

let btnSubscribe = document.querySelector(".btn_subscribe");
btnSubscribe.addEventListener("click", function(){
    document.querySelector(".subscription").classList.add("open");
});
let btnClose = document.querySelector(".close");
btnClose.addEventListener("click", function(){
    document.querySelector(".subscription").classList.remove("open");
});