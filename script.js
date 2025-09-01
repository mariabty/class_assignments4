// Toggle navbar in mobile
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Gallery functionality
const displayedImg = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnails img");

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    displayedImg.style.opacity = 0;
    setTimeout(() => {
      displayedImg.src = thumbnail.src;
      displayedImg.alt = thumbnail.alt;
      displayedImg.style.opacity = 1;
    }, 300);
  });
});

// Modal functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

displayedImg.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}
