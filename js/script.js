window.onload = function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  console.log("Slideshow loaded. Found", slides.length, "slides.");

  function showNextSlide() {
    // Hide all slides
    slides.forEach(slide => {
      slide.style.display = "none";
    });

    // Show next slide
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
  }

  setInterval(showNextSlide, 3000);
};

// 🌈 Theme toggle script
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
