var dogPictureEL= document.querySelector('#dogPicture')


async function renderImage () {

   const response= await fetch('https://dog.ceo/api/breeds/image/random')
   const data = await response.json()
    dogPictureEL.innerHTML = `<img id="dogStyle" src="${data.message}"/>`
    
}

renderImage();
