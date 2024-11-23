document.addEventListener("DOMContentLoaded", function () {
    const spinner = document.getElementById("spinner");

    function hideSpinner() {
        spinner.classList.add("hidden");
    }

    // Hide spinner once the window is fully loaded
    window.addEventListener("load", hideSpinner);

    // Fallback timeout to hide spinner after 3 seconds, in case loading takes too long
    setTimeout(hideSpinner, 12000);

    // Initiate the wowjs
    

    // Back to top button
    const backToTopBtn = document.querySelector(".back-to-top");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

/* Scroll Shadow JavaScript */
document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// closing humberger when link clicked
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link, .btn-primary");

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                navbarToggler.click();
            }
        });
    });
});