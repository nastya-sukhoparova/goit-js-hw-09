import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as t}from"./assets/vendor-CgTBfC_f.js";const l=[{preview:"path/to/thumbnail1.jpg",original:"path/to/large-image1.jpg",description:"Image 1 description"},{preview:"path/to/thumbnail2.jpg",original:"path/to/large-image2.jpg",description:"Image 2 description"},{preview:"path/to/thumbnail3.jpg",original:"path/to/large-image3.jpg",description:"Image 3 description"}],r=document.querySelector(".gallery"),o=l.map(({preview:a,original:i,description:e})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img 
          class="gallery-image" 
          src="${a}" 
          alt="${e}" 
        />
      </a>
    </li>`).join("");r.innerHTML=o;new t(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
