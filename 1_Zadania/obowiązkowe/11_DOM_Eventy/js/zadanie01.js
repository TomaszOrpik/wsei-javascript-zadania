
/*
1 - Pojawia się komunikat o problemie z wyśietleniem klasy "menu", ponieważ skrypt realizuje się przed
wygenerowaniem dokumentu html
*/
document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})
/*
2 - skrypt ponownie się zrealizował bez problemu

3 - brak zmian
Dzieje się tak, ponieważ funcja DOMContentLoaded, jak nazwa wskazuje zostje wywołana dopiero
po załadowaniu się kompletnym strony
*/