//NOTE JS:滾動到一定位置後背景變色----------
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 650) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
