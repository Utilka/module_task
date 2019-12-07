var show_form = document.querySelector("#show-form");
var form = document.querySelector(".form-wrapper");
var main = document.querySelector(".main");
var close_form = document.querySelector("#close-form");

show_form.addEventListener("click", function() {
    form.style.display = "block";
    main.style.display = "none";


});

close_form.addEventListener("click", function() {
    form.style.display = "none";
    main.style.display = "block";
});