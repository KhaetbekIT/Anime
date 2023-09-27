import axios from "axios"
import { API } from "./api"

const DetailDataFunc = async () => {

    const preloder = document.querySelector(".preloder")

    const RenderGanreList = (ganres) => {
        const dropDownBlock = document.querySelector("#dropdown-js")

        dropDownBlock.innerHTML = ""

        ganres.forEach(ganre => {
            dropDownBlock.insertAdjacentHTML("beforeend", `
                <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `)
        })
    }

    const RenderAnimeDetails = (array = [], itemId = 1) => {
        const animeObject = array.find(item => item.id == itemId)
        const imageBlock = document.querySelector("#anime__details__pic-js")
        const animeText = document.querySelector(".anime__details__text")
        const viewBlock = imageBlock.querySelector(".view")
        const titleBlock = animeText.querySelector(".anime__details__title")
        const desc = animeText.querySelector("p")
        const widgetList = animeText.querySelector("#widget-list-js")
        const breadCrumb = document.querySelector(".breadcrumb__links span")

        const videoBackdrop = document.querySelector("#video-backdrop")
        const video = videoBackdrop.querySelector("#video")

        if (animeObject) {
            imageBlock.dataset.setbg = animeObject.image
            viewBlock.innerHTML = ""
            viewBlock.insertAdjacentHTML("beforeend", `
                <i class="fa fa-eye"> ${animeObject.views} </i>
            `)

            titleBlock.innerHTML = ""

            titleBlock.insertAdjacentHTML("beforeend", `
                <h3> ${animeObject.title} </h3>
                <span> ${animeObject['original-title']} </span>
            `)

            desc.textContent = animeObject.description

            widgetList.innerHTML = ""

            widgetList.insertAdjacentHTML("beforeend", `
                <ul>
                    <li><span>Date aired:</span> ${animeObject.date}</li>
                    <li><span>Status:</span> ${animeObject.rating} </li>
                    <li><span>Genre:</span> ${animeObject.tags.join(", \t")} </li>
                </ul>
            `)

            breadCrumb.textContent = animeObject.ganre

            document.querySelectorAll('.set-bg').forEach(element => element.style.backgroundImage = `url(${element.dataset.setbg})`)

            setTimeout(() => {
                preloder.classList.remove("active")
            }, 10000)
        } else {
            console.log("error 2");
        }

        imageBlock?.addEventListener("click", () => {
            videoBackdrop.classList.add("show")
        })

        videoBackdrop?.addEventListener("click", e => {
            const target = e.target

            if (target && target.classList.contains("show")) {
                videoBackdrop.classList.remove("show")
                video?.pause()
            }
        })
    }

    await axios.get(API + "/anime").then(response => {
        const data = response.data;

        const ganres = new Set()

        const ganreParams = new URLSearchParams(window.location.search).get('itemId')

        data.forEach(item => ganres.add(item.ganre))

        if (ganreParams) {
            RenderAnimeDetails(data, ganreParams)
        } else {
            window.location.replace("/categories.html")
        }

        RenderGanreList(ganres)
    }).catch(error => {
        throw new Error(error)
    })
}

export default DetailDataFunc;