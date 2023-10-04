import axios from "axios"
import { API } from "./api"
import RenderGanreListFunc from "./admin/categories-lists"

const CategoriesDataFunc = async () => {

    const RenderAnimeList = (array = [], ganres = {}) => {
        const container = document.querySelector("#product-container-js")

        container.innerHTML = ""

        ganres.forEach((ganre) => {
            const productBlock = document.createElement('div')

            const listBlock = document.createElement("div")

            const list = array.filter(item => item.tags.includes(ganre))

            listBlock.classList.add("row")

            productBlock.classList.add("mb-5")

            productBlock.insertAdjacentHTML("beforeend", `
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <div class="section-title">
                            <h4>${ganre}</h4>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="btn__all">
                            <a href="./categories.html?ganre=${ganre}" class="primary-btn">View All <span class="arrow_right"></span></a>
                        </div>
                    </div>
                </div>
            `)

            list.forEach(item => {
                const ulBlock = document.createElement("ul")

                item.tags.forEach(tag => {
                    ulBlock.insertAdjacentHTML("beforeend", `
                        <li>${tag}</li>
                    `)
                })

                listBlock.insertAdjacentHTML("beforeend", `
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="${item.image}">
                                <div class="ep">${item.rating} / 10</div>
                                <div class="view"><i class="fa fa-eye"></i> ${item.views} </div>
                            </div>
                            <div class="product__item__text">
                                ${ulBlock.outerHTML}
                                <h5><a href="./anime-details.html?itemId=${item.id}">${item.title}</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                `)
            })

            productBlock.append(listBlock)

            container.append(productBlock)

            container.querySelectorAll('.set-bg').forEach(element => element.style.backgroundImage = `url(${element.dataset.setbg})`)
        })
    }

    const RenderTopANime = (array = []) => {
        const container = document.querySelector("#fillter-gallery-js")

        array.forEach(item => {
            // day years
            container.insertAdjacentHTML("beforeend", `
                <div class="product__sidebar__view__item set-bg mix "
                    data-setbg="${item.image}">
                    <div class="ep">${item.rating} / 10</div>
                    <div class="view"><i class="fa fa-eye"></i>${item.views}</div>
                    <h5><a href="/anime-details.html">${item.title}</a></h5>
                </div>
            `)
        })

        container.querySelectorAll('.set-bg').forEach(element => element.style.backgroundImage = `url(${element.dataset.setbg})`)
    }

    await axios.get(API + "/anime").then(response => {

        const data = response.data;

        const ganres = new Set()

        const ganreParams = new URLSearchParams(window.location.search).get('ganre')



        data.forEach(item => ganres.add(item.ganre))

        RenderTopANime(data.sort((a, b) => b.views - a.views).slice(0, 5))

        if (ganreParams) {
            RenderAnimeList(data, [ganreParams])
        } else {
            RenderAnimeList(data, ganres)
        }

        RenderGanreListFunc()
    }).catch(error =>{
        throw new Error(error)
    })
}

export default CategoriesDataFunc;