const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const testimonials = document.querySelectorAll(".testimonial");

let currentPosition = 0;
const cardWidth = "1000";
const numCards = testimonials.length;

prevButton.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition--;
    carousel.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
  }
});

nextButton.addEventListener("click", () => {
  if (currentPosition < numCards - 1) {
    currentPosition++;
    carousel.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
  }
});
// for array display
const displayArray = document.getElementById("rpl-qualification-array");
const viewBar = document.getElementById("array-one");

function viewArray() {
  viewBar.style.display = "grid";
}

displayArray.addEventListener("mouseenter", viewArray);

// close array
function closeViewArray() {
  viewBar.style.display = "none";
}

displayArray.addEventListener("mouseout", closeViewArray);

// for Array two
const displayArray2 = document.getElementById("rpl-industry");
const viewBar2 = document.getElementById("array-two");

function viewArray2() {
  viewBar2.style.display = "grid";
}

displayArray2.addEventListener("mouseenter", viewArray2);

// close Array two
function closeViewArray2() {
  viewBar2.style.display = "none";
}

displayArray2.addEventListener("mouseout", closeViewArray2);

// for Array three
const displayArray3 = document.getElementById("trade");
const viewBar3 = document.getElementById("trade-array");

function viewArray3() {
  viewBar3.style.display = "grid";
}

displayArray3.addEventListener("mouseenter", viewArray3);

// close Array three
function closeViewArray3() {
  viewBar3.style.display = "none";
}

displayArray3.addEventListener("mouseout", closeViewArray3);
