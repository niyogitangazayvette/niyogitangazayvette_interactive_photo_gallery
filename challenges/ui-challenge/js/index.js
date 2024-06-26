
// Array containing the gallery data
const galleryData = [
    {
        imgSrc: "./assets/image4.png",
        title: "PHOTO OF FUNNEC",
        location: "central africa",
    },
    {
        imgSrc: "./assets/image 4.png",
        title: "PHOTO OF WHALE ",
        location: "east africa",
    },
    {
        imgSrc: "./assets/Image.png",
        title: "PHOTO OF BABOON",
        location: "east africa"
    },
    {
        imgSrc: "./assets/Image3.png",
        title: "PHOTO OF SPORT DEER",
        location: "belgia",
    },
];

// Function to create gallery cards
function createGalleryCards() {
    const galleryWrapper = document.querySelector(".galleryWrapper");
    galleryData.forEach((data) => {
        const galleryCard = document.createElement("div");
        galleryCard.classList.add("galleryCard");

        galleryCard.innerHTML = `
    <img src="${data.imgSrc}" alt="${data.title}" />
    <div class="galleryOverlay">
      <div class="contents">
        <h1>${data.title.split(" ").join("<br>")}</h1>
        <small class="location">${data.location}</small>
        <p class="more"> <span> Know More </span> <i class="fa-solid fa-arrow-right-long"></i></p>
        
      </div>
    </div>
  `;

        galleryWrapper.appendChild(galleryCard);
    }); 
}

// Call the function to create gallery cards on page load
document.addEventListener("DOMContentLoaded", createGalleryCards);
