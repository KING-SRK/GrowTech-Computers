const slider = document.querySelector(".image-slider");
const slides = document.querySelector(".slides");
const images = slides.querySelectorAll("img");

const totalSlides = images.length;

// প্রথম আর শেষ ইমেজ কপি করে clone যোগ করা হচ্ছে (infinite loop effect এর জন্য)
const firstClone = images[0].cloneNode(true);
const lastClone = images[totalSlides - 1].cloneNode(true);

slides.appendChild(firstClone); // শেষে প্রথম clone
slides.insertBefore(lastClone, images[0]); // শুরুতে শেষ clone

// সব ইমেজ আবার select করো (clone সহ)
const allImages = slides.querySelectorAll("img");
const totalAllImages = allImages.length; // 4 আসল + 2 clone = 6

let index = 1; // clone এর কারণে আসল শুরু হবে index=1

// স্লাইডার সেটআপ করার জন্য একটি ফাংশন তৈরি করুন
function setupSlider() {
  // স্লাইডারের বর্তমান চওড়া নিন (যা CSS থেকে এসেছে)
  const slideWidth = slider.clientWidth;

  // সমস্ত ইমেজকে স্লাইডারের width এর সমান করুন
  allImages.forEach((img) => {
    img.style.width = slideWidth + "px";
  });

  // slides কন্টেইনার এর মোট width সেট করুন
  slides.style.width = totalAllImages * slideWidth + "px";

  // সঠিক initial পজিশনে নিয়ে আসুন (দ্বিতীয় ইমেজ, যা প্রথম আসল ইমেজ)
  slides.style.transition = "none";
  slides.style.transform = `translateX(-${index * slideWidth}px)`;

  // slider এর height প্রথম আসল ইমেজ অনুযায়ী সেট করুন
  slider.style.height = allImages[index].clientHeight + "px";
}

// পেইজ লোড হওয়ার সাথে সাথে সেটআপ করুন
setupSlider();

// window resize হলে height এবং width adjust করবো
window.addEventListener("resize", setupSlider);

function moveToNextSlide() {
  // প্রতিবার স্লাইড করার আগে slideWidth আবার গণনা করুন (সুরক্ষার জন্য)
  const slideWidth = slider.clientWidth;

  index++;
  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = `translateX(-${index * slideWidth}px)`;

  // clone এ গেলে সাথে সাথে আসল স্লাইডে jump করবে
  setTimeout(() => {
    // যখন শেষ clone এ পৌঁছাবে (index === allImages.length - 1)
    if (index === allImages.length - 1) {
      slides.style.transition = "none";
      index = 1; // আসল প্রথম ইমেজে ফিরবে
      slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    // যেকোনো আসল স্লাইডে গেলে height আপডেট করে দিন
    slider.style.height = allImages[index].clientHeight + "px";
  }, 500);
}

setInterval(moveToNextSlide, 3000); // 3 সেকেন্ড অন্তর স্লাইড হবে
