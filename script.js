// Contact Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Input Fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error Fields
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    // Clear Previous Errors
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    subjectError.innerHTML = "";
    messageError.innerHTML = "";

    let isValid = true;

    // ---------- Name Validation ----------
    if (name === "") {
        nameError.innerHTML = "❌ Name cannot be empty";
        isValid = false;
    }

    // ---------- Email Validation ----------
    const emailPattern =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (email === "") {
        emailError.innerHTML = "❌ Email cannot be empty";
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        emailError.innerHTML = "❌ Enter a valid email address";
        isValid = false;
    }

    // ---------- Subject Validation ----------
    if (subject === "") {
        subjectError.innerHTML = "❌ Subject cannot be empty";
        isValid = false;
    }
    else if (subject.length < 5) {
        subjectError.innerHTML =
            "❌ Subject must contain at least 5 characters";
        isValid = false;
    }

    // ---------- Message Validation ----------
    if (message === "") {
        messageError.innerHTML = "❌ Message cannot be empty";
        isValid = false;
    }
    else if (message.length < 20) {
        messageError.innerHTML =
            "❌ Message must contain at least 20 characters";
        isValid = false;
    }

    // ---------- Success ----------
    if (isValid) {

        alert("✅ Message Sent Successfully!");

        form.reset();

    }

});


// Smooth Active Navbar Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// Navbar Background on Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,0.85)";

    }
    else {

        navbar.style.background = "rgba(0,0,0,0.35)";

    }

});


// Fade-in Animation for Sections

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach((sec) => {

    sec.classList.add("hidden");
    observer.observe(sec);

});