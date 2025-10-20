

// ✅ Scroll-Triggered Animations
document.addEventListener("DOMContentLoaded", function () {
  // Slide Right
  const slideRightTargets = document.querySelectorAll(".slide-right-hidden");

  const slideRightObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-right-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  slideRightTargets.forEach((target) => slideRightObserver.observe(target));

  // Zoom-in + Slide-left
  const zoomTarget = document.querySelector(".zoom-in-hidden");
  const slideLeftTarget = document.querySelector(".slide-left-hidden");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("zoom-in-hidden")) {
            entry.target.classList.add("zoom-in-visible");
          }
          if (entry.target.classList.contains("slide-left-hidden")) {
            entry.target.classList.add("slide-left-visible");
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  if (zoomTarget) observer.observe(zoomTarget);
  if (slideLeftTarget) observer.observe(slideLeftTarget);
});

// ✅ Testimonial Auto Slide
const slider = document.getElementById("testimonialSlider");
const scrollStep = 340;
const slideInterval = 3000;
let currentIndex = 0;

const totalCards = slider.querySelectorAll(".testimonial-card").length;
const maxVisibleCards = Math.floor(slider.offsetWidth / scrollStep);

function autoSlide() {
  if (currentIndex < totalCards - maxVisibleCards) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  slider.scrollTo({
    left: currentIndex * scrollStep,
    behavior: "smooth",
  });
}

let autoScroll = setInterval(autoSlide, slideInterval);

// ম্যানুয়াল স্ক্রল করলে রিসেট হবে
slider.addEventListener("scroll", () => {
  clearInterval(autoScroll);
  autoScroll = setInterval(autoSlide, slideInterval);
});

// ✅ Image + Video Slider Auto Scroll
const sliderWrapper = document.getElementById("sliderWrapper");
const sliderDots = document.getElementById("sliderDots");
const slides = sliderWrapper?.querySelectorAll(".slide") || [];
const totalSlides = slides.length;
let imageSliderIndex = 0;

// Dot বানানো
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  if (index === 0) dot.classList.add("active");
  sliderDots.appendChild(dot);
});

// Dot আপডেট করা
function updateSliderDots(index) {
  document.querySelectorAll(".slider-dots span").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Auto scroll function
function autoScrollSlides() {
  imageSliderIndex = (imageSliderIndex + 1) % totalSlides;
  const slideWidth = sliderWrapper.clientWidth;
  sliderWrapper.scrollTo({
    left: slideWidth * imageSliderIndex,
    behavior: "smooth",
  });
  updateSliderDots(imageSliderIndex);
}

if (sliderWrapper) {
  setInterval(autoScrollSlides, 3000);

  sliderWrapper.addEventListener("scroll", () => {
    const scrollLeft = sliderWrapper.scrollLeft;
    const width = sliderWrapper.clientWidth;
    const index = Math.round(scrollLeft / width);
    imageSliderIndex = index;
    updateSliderDots(index);
  });
}

// ✅ Service Option Toggle (if used)
function toggleOptions() {
  const options = document.getElementById("serviceOptions");
  options.classList.toggle("show");
}
