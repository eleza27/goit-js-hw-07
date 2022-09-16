import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery')
console.log(galleryRef);

const markup = galleryItems.map(item => `<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`)
    .join('')

galleryRef.insertAdjacentHTML('afterbegin', markup)
 
const handler = event => {
  event.preventDefault()

  const imageEl = event.target
  console.log(imageEl.classList.contains) 
  if (imageEl.classList.contains('gallery__image')) {
    const instance = basicLightbox.create(`
	<img
      class="gallery__image"
      src=${imageEl.getAttribute('data-source')}
      alt=${imageEl.alt}
    />
`)
    
    const modalIsOpen = () => {
      const handlerKeydown = event => {
        if (event.key === 'Escape') {
          instance.close()
        }
      }
      document.addEventListener('keydown', handlerKeydown)
    }
    instance.show(modalIsOpen)
  }
  
  console.log(event.target) 
  console.log(event.currentTarget)    
}

galleryRef.addEventListener('click', handler)



