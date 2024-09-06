
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryItems = [
  {
    preview: 'path/to/thumbnail1.jpg',
    original: 'path/to/large-image1.jpg',
    description: 'Image 1 description',
  },
  {
    preview: 'path/to/thumbnail2.jpg',
    original: 'path/to/large-image2.jpg',
    description: 'Image 2 description',
  },
  {
    preview: 'path/to/thumbnail3.jpg',
    original: 'path/to/large-image3.jpg',
    description: 'Image 3 description',
  }

];


const galleryContainer = document.querySelector('.gallery');


const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img 
          class="gallery-image" 
          src="${preview}" 
          alt="${description}" 
        />
      </a>
    </li>`;
}).join('');


galleryContainer.innerHTML = galleryMarkup;


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', 
  captionPosition: 'bottom', 
  captionDelay: 250, 
});
