import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("beforeend", itemOfNewGallery(galleryItems));

galleryRef.addEventListener("click", openModalWindow);

function itemOfNewGallery(ref) {
  return ref
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
         <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

function openModalWindow(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") return;

  const imageSrc = e.target.dataset.source;

  const fullImage = basicLightbox.create(`
    <img src=${imageSrc} width="1280" height="855">
`);

  fullImage.show();
  document.addEventListener("keydown", (e) => closeModalWindow(e, fullImage));
}

function closeModalWindow(e, modalWinow) {
  if (e.code === "Escape") {
    modalWinow.close();
    e.preventDefault;
    document.removeEventListener("keydown", closeModalWindow);
  }
}
