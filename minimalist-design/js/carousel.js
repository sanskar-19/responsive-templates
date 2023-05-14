let clicks = 0;
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let slider = document.querySelector(".slider");
let slideItem = document.querySelector(".slide-item");
let sliderTrack = document.querySelector(".slider-track");
//   getting widths
let sliderWidth = slider.clientWidth;
let slideItemWidth = slideItem.clientWidth;
let sliderTrackWidth = document.querySelector(".slider-track").clientWidth;
console.log(sliderWidth);
console.log(slideItemWidth);
// Calculating number of slides
let totalSlides = sliderTrackWidth / slideItemWidth;
let slidesInView = sliderWidth / slideItemWidth;

// Attaching event for next click
next.addEventListener("click", (e) => {
  if (totalSlides - (slidesInView + clicks) >= 1) clicks++;
  else if (
    totalSlides - (slidesInView + clicks) > 0 &&
    totalSlides - (slidesInView + clicks) < 1
  )
    clicks += totalSlides - (slidesInView + clicks);
  sliderTrack.style.transform = `translateX(-${clicks * slideItemWidth}px)`;
});

// Attaching event for prev click
prev.addEventListener("click", () => {
  if (clicks >= 1) clicks--;
  else if (clicks > 0 && clicks < 1) clicks = 0;
  sliderTrack.style.transform = `translateX(-${clicks * slideItemWidth}px)`;
});
