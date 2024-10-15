document.addEventListener("DOMContentLoaded", function() {
    var containerFluid = document.querySelector(".container-fluid");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            containerFluid.classList.remove("container-scrolled");
        } else {
            containerFluid.classList.add("container-scrolled");
        }
    });
});

