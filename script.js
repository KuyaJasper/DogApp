var dogPictureEL = document.querySelector("#dogPicture");
var buttonEl = document.querySelector("#button");
var dogContainer = document.querySelector("#dogPictureContainer");
var dogURL = "https://dog.ceo/api/breeds/image/random";

function reload() {
  window.location.reload();
}

async function renderImage() {
  const response = await fetch(dogURL);
  const data = await response.json();
  var h1 = document.createElement("h1");
  var textNode = document.createTextNode(
    "Here's a picture of a dog to make you feel better!"
  );
  var header= h1.appendChild(textNode)
  dogContainer.appendChild(header);
  dogPictureEL.innerHTML = `<img id="dogStyle" style="border-style: solid" src="${data.message}"/>`;
  
}

buttonEl.addEventListener("click", reload);

renderImage();

