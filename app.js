let formWrapper = document.querySelector(".form-wrapper"),
  form = document.querySelector("#form"),
  searchInput = document.querySelector("#searchInput"),
  buttonWrapper = document.querySelector(".button-wrapper"),
  searchBtn = document.querySelector("#search"),
  clearBtn = document.querySelector("#clear"),
  imageListWrapper = document.querySelector(".imageList-wrapper");

runEvents();

function runEvents() {
    form.addEventListener("submit", search);
    clearBtn.addEventListener("click",clear)
}
function search(e) {
  const value = searchInput.value.trim();
  fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
    method: "GET",
    headers: {
      Authorization: "Client-ID Tq7pi5S-wJ28NP2mFF2wRscFICpoA-l1tnMWeQFTOJw",
    },
  })
    .then((res) => res.json())
      .then((data) => {
          Array.from(data.results).forEach((image)=>{
              addImageToUi(image.urls.small)
        })
    })
    .catch((err) => console.log(err));
  e.preventDefault();
}

function addImageToUi(url) {
    const div = document.createElement("div");
    div.className = "card";
    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.height = "400"
    img.width="400"
    div.appendChild(img)
    imageListWrapper.appendChild(div)
}
function clear() {
    searchInput.value = "";
  // Array.from(imageListWrapper.children).forEach((child)=>child.remove())
  imageListWrapper.innerHTML=''
}