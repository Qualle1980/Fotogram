const gallery = document.getElementById("gallery");

const images = [
    "fuji_sunrise.jpg",
    "japan_by_night.jpg",
    "japan_castle.jpg",
    "japan_forest.jpg",
    "japan_spring.jpg",
    "japan_street.jpg",
    "japan_temple.jpg",
    "japan_tokio_anime.jpg",
    "japan_tokio_skyline.png",
    "japan_tokio_tower.jpg",
    "japan_village.jpg",
    "japan_winter.jpg",
];

images.forEach((imageName) => {
    const img = document.createElement("img");
    img.src = `./assets/img/${imageName}`;
    img.alt = imageName;
    img.classList.add("gallery_image");
    gallery.appendChild(img);
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const imageCounter = document.getElementById("imageCounter");
const imageTitle = document.getElementById("imageTitle");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeBtn = document.getElementById("closeBtn");

let currentIndex = 0;

document.querySelectorAll(".gallery_image").forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
});

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();

    lightbox.classList.remove("hidden");
    lightbox.style.display = "flex";
}

closeBtn.addEventListener("click", () => closeLightbox());

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.add("hidden");
    lightbox.style.display = "none";
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
});

function updateLightbox() {
    const imageName = images[currentIndex];

    lightboxImage.src = `./assets/img/${imageName}`;
    imageCounter.textContent = `${currentIndex + 1}/${images.length}`;
    imageTitle.textContent = imageName;
}
