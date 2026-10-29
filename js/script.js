const darkToggle = document.getElementById("darkToggle");

// Dark Mode
if (darkToggle) {
    darkToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            darkToggle.textContent = "Switch to Light Mode";
        } else {
            darkToggle.textContent = "Switch to Dark Mode";
        }
    });
}

// Back to Top
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}