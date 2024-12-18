function toggleBurger11() {
    document.querySelector(".burger-11").classList.toggle("burger-11--active");
    document
        .querySelector(".burger-11__center-line")
        .classList.toggle("burger-11__center-line--active");
}

// Scroll to top function

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.querySelector(".js-to-top-btn").addEventListener("click", () => {
    topFunction();
});

// Hide/show to top btn on scroll

document.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        document.querySelector(".js-to-top-btn").style.transform =
            "translateY(0)";
    } else {
        document.querySelector(".js-to-top-btn").style.transform =
            "translateY(75px)";
    }
});

// Hide/show navbar on scroll

let lastScrollTop = 0;
addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        document.querySelector(".header").classList.add("header--hide");
        document.querySelector(".header-2").classList.add("header-2--hide");
    } else {
        document.querySelector(".header").classList.remove("header--hide");
        document.querySelector(".header-2").classList.remove("header-2--hide");
    }
    lastScrollTop = scrollTop;
});

// Countdown function (closure)

function outerClosure() {
    let number = 90;
    let id = setInterval(innerClosure, 1000);
    function innerClosure() {
        if (number === 0) {
            clearInterval(id);
        } else {
            number--;
            document.querySelector("#countdown").innerHTML = number;
            if (number === 0) {
                document
                    .querySelector(".header")
                    .classList.toggle("header--active");
                document
                    .querySelector(".footer")
                    .classList.toggle("footer--active");
                document
                    .querySelector(".header-2")
                    .classList.toggle("header-2--active");
                document
                    .querySelector(".footer-2")
                    .classList.toggle("footer-2--active");
                number = 90;
            }
        }
    }
}
outerClosure();
