// interactable buttons
document.querySelectorAll(".skeuo-button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Yooo, I didn't make this button do anything yet!");
    });
});

function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-image");
    
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("active");
}
