document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown() {
        const weddingDate = new Date("2025-12-20T00:00:00");
        const now = new Date();
        
        let diff = weddingDate - now;
        if (diff < 0) {
            document.getElementById("months").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            return;
        }

        // Calculate months remaining
        let months = (weddingDate.getFullYear() - now.getFullYear()) * 12 + (weddingDate.getMonth() - now.getMonth());
        
        let tempDate = new Date(now);
        tempDate.setMonth(tempDate.getMonth() + months);
        if (tempDate > weddingDate) {
            months--;
        }

        // Calculate hours and seconds
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Display values
        document.getElementById("months").textContent = String(months).padStart(2, "0");
        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // Back to Top Button Logic
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Photo Carousel Logic
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let index = 0;

nextButton.addEventListener("click", () => {
    index = (index + 1) % carousel.children.length;
    updateCarousel();
});

prevButton.addEventListener("click", () => {
    index = (index - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
});

function updateCarousel() {
    const offset = -index * 100; 
    carousel.style.transform = `translateX(${offset}%)`;
}


});
