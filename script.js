var dogPictureEL = document.querySelector("#dogPicture");
var buttonEl = document.querySelector("#button");

function reload() {
  window.location.reload();
}

async function renderImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  dogPictureEL.innerHTML = `<img id="dogStyle" src="${data.message}"/>`;
}

buttonEl.addEventListener("click", reload)

renderImage();
