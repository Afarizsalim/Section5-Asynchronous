class Berita {
    constructor(apiKey, url) {
        this.apiKey = apiKey;
        this.url = url + apiKey;
    }

    async getDataBerita() {
        try {
            const response = await axios.get(this.url);
            return response.data.articles;
        } catch (error) {
            throw error;
        }
    }

    
    async showBerita() {
        try {
            const dataBerita = await this.getDataBerita();
            const ContainerBerita = document.getElementById("Berita");

            let isiBerita = '';
            dataBerita.forEach(articles => {
                isiBerita +=
                    `
                    <div class="col-3">
                        <div class="thumb-berita card mb-4" style="width: 18rem;">
                            <img src="${articles.urlToImage}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${articles.title}</h5>
                                <p class="card-text">${articles.publishedAt}</p>
                                <a href="${articles.url}" class="btn btn-primary">Cek Berita</a>
                            </div>
                        </div>
                    </div>
                `;
            });
            ContainerBerita.innerHTML = `<div class="row"> ${isiBerita} </div>`
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    }

    async cariBerita(kataKunci) {
        try {
            const dataBerita = await this.getDataBerita();
            const beritaDitemukan = dataBerita.filter(articles => {
                const judulBerita = articles.title.toLowerCase();
                return judulBerita.includes(kataKunci.toLowerCase());
            });

            const ContainerBerita = document.getElementById("Berita");

            if (beritaDitemukan.length > 0) {
                let isiBerita = '';

                beritaDitemukan.forEach(articles => {
                    isiBerita +=
                        `
                        <div class="col-3">
                            <div class="thumb-berita card mb-4" style="width: 18rem;">
                                <img src="${articles.urlToImage}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${articles.title}</h5>
                                    <p class="card-text">${articles.publishedAt}</p>
                                    <a href="${articles.url}" class="btn btn-primary">Cek Berita</a>
                                </div>
                            </div>
                        </div>
                    `
                    ;
                });
                ContainerBerita.innerHTML = `<div class="row"> ${isiBerita} </div>`
            } else {
                ContainerBerita.innerHTML = "Berita tidak ditemukan.";
            }
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    }
}

export default Berita;
