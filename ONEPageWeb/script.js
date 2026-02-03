// Get elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Open lightbox when image is clicked
const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = item.src;
        captionText.innerHTML = item.alt;
    });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
