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

//NOTE JS:滾動到一定位置後出現回到頂部的按鈕----------
window.addEventListener("scroll", function () {
    var backToTopBtn = document.getElementById("backToTopBtn");
    var scrollHeight = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollHeight > 2000) {  // 滾動超過 2000px 顯示按鈕
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});
