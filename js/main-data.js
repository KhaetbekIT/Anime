const MainDataFunc = async () => {

    const RenderAnimeList = (array = [], ganres = {}) => {
        console.log(array, ganres);
    }

    const RenderTopANime = (array = []) => {
        const container = document.querySelector("#fillter-gallery-js")

        container.innerHTML = ""

        array.forEach(item => {
            // day years
            container.insertAdjacentHTML("afterbegin", `
                <div class="product__sidebar__view__item set-bg mix day years"
                    data-setbg="${item.image}">
                    <div class="ep">${item.rating} / 10</div>
                    <div class="view"><i class="fa fa-eye"></i>${item.views}</div>
                    <h5><a href="/anime-details.html">${item.title}</a></h5>
                </div>
            `)
        })

        container.querySelectorAll('.set-bg').forEach(element => element.style.backgroundImage = `url(${element.dataset.setbg})`)
    }

    await fetch("https://anime-b7fa6-default-rtdb.firebaseio.com/anime.json").then(response => response.json()).then(data => {

        const ganres = new Set()

        RenderTopANime(data.sort((a, b) => b.views - a.views).slice(0, 5))

        data.forEach(item => ganres.add(item.ganre))

        RenderAnimeList(data, ganres)
    }).catch(error => console.error(error))
}

MainDataFunc()