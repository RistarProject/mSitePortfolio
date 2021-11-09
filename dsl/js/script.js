const nemuBurger = document.querySelector(".menu_burger");
nemuBurger.addEventListener("click", function(){
    nemuBurger.classList.toggle("menu_burger_active");
});

nemuBurger.addEventListener("click", function(){
    document.querySelector(".menu").classList.toggle("menu_mobile");
});