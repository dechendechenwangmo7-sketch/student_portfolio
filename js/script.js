const darkToggle = document.getElementById("darkToggle");
const backToTop = document.getElementById("backToTop");

// Dark Mode Toggle
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

// Back to Top Button
if (backToTop) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
// =========================================
// PROFESSIONAL EMAIL COPY TO CLIPBOARD
// =========================================
const emailLink = document.getElementById("email-link");

if (emailLink) {
    emailLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevents the default email app from opening
        const email = "dechendechenwangmo7@gmail.com";
        
        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            showToast("Email copied to clipboard! 📋");
        }).catch(err => {
            // Fallback for older browsers
            alert("Email: " + email);
        });
    });
}

// Function to create the pop-up toast
function showToast(message) {
    // Create the div
    const toast = document.createElement("div");
    toast.className = "toast-popup";
    toast.textContent = message;
    
    // Add to page
    document.body.appendChild(toast);
    
    // Show it (animate in)
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);
    
    // Hide and remove it after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}