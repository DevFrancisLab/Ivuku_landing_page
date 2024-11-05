document.addEventListener("DOMContentLoaded", function () {
    const spinner = document.getElementById("spinner");

    function hideSpinner() {
        spinner.classList.add("hidden"); // Use the "hidden" class as defined in your CSS
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
