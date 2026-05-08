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
    "japan_winter.jpg"
];

images.forEach((imageName) => {

    const img = document.createElement("img");

    img.src = `./assets/img/${imageName}`;

    img.alt = imageName;

    img.classList.add("gallery_image");

    gallery.appendChild(img);

});