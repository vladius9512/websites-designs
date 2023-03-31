const img = document.querySelector("img");
const randomBtn = document.getElementById("random");
const searchInput = document.getElementById("search");

randomBtn.addEventListener("click", () => {
    generateImg();
});

async function generateImg() {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=2n7RwCZLV3Hj4bkudnr1rTN7SgbCMcGJ&s=${searchInput.value}&weirdness=5`,
        { mode: "cors" }
    );
    const responseData = await response.json();
    img.src = responseData.data.images.original.url;
}
