var dogPictureEL= document.querySelector('#dogPicture')


function renderImage () {

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
      .then(data => {
          dogPictureEL.innerHTML = `<img id="dogStyle" src="${data.message}"/>`
      });

}

renderImage();
