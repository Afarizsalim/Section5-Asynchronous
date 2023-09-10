import Berita from "./berita.js";


document.addEventListener('DOMContentLoaded', async () => {
    const berita = new Berita('1b9f902748d64ba1979954419097ebd7', 'https://newsapi.org/v2/top-headlines?country=id&apiKey=');

    berita.showBerita();

    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", () => {
        const kataKunci = searchInput.value;
        berita.cariBerita(kataKunci);
    });
    
});