// =========================================
// 1. TYPING ANIMATION
// =========================================
const textElement = document.getElementById("typing-text");
const words = ["Web Developer", "IT Student", "Problem Solver", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!textElement) return;
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }
    setTimeout(typeEffect, typeSpeed);
}
document.addEventListener("DOMContentLoaded", typeEffect);

// =========================================
// 2. LIVE CLOCK (Bhutan Time)
// =========================================
function updateClock() {
    const clockElement = document.getElementById("clock");
    if (!clockElement) return;
    
    const now = new Date();
    const options = { timeZone: 'Asia/Thimphu', hour12: false };
    const timeString = now.toLocaleTimeString('en-US', options);
    
    clockElement.textContent = "🇧🇹 " + timeString;
}
setInterval(updateClock, 1000);
document.addEventListener("DOMContentLoaded", updateClock);

// =========================================
// 3. SCROLL REVEAL ANIMATION
// =========================================
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", reveal);

// =========================================
// 4. DARK MODE TOGGLE
// =========================================
const darkToggle = document.getElementById("darkToggle");
if (darkToggle) {
    darkToggle.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            darkToggle.textContent = "☀️ Light Mode";
        } else {
            darkToggle.textContent = "🌙 Dark Mode";
        }
    });
}

// =========================================
// 5. BACK TO TOP BUTTON
// =========================================
const backToTop = document.getElementById("backToTop");
if (backToTop) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// =========================================
// 6. EMAIL COPY TO CLIPBOARD
// =========================================
const emailLink = document.getElementById("email-link");
if (emailLink) {
    emailLink.addEventListener("click", function (e) {
        e.preventDefault(); 
        const email = "dechendechenwangmo7@gmail.com";
        
        navigator.clipboard.writeText(email).then(() => {
            showToast("Email copied to clipboard! 📋");
        }).catch(err => {
            alert("Email: " + email);
        });
    });
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast-popup";
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => { toast.classList.add("show"); }, 10);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => { toast.remove(); }, 300);
    }, 3000);
}

// =========================================
// 7. SCROLL PROGRESS BAR
// =========================================
window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    
    var progressBar = document.getElementById("myBar");
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
}