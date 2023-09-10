import Berita from "./berita.js";


document.addEventListener('DOMContentLoaded', async () => {
    const berita = new Berita('1b9f902748d64ba1979954419097ebd7', 'https://newsapi.org/v2/top-headlines?country=id&apiKey=');

    berita.showBerita();

    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");

    searchButton.addEventListener("click", () => {
        const kataKunci = searchInput.value;
        berita.cariBerita(kataKunci);
    });
    
});