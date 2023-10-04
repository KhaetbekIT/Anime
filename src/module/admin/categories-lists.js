import axios from "axios"
import { API } from "./../api"

const RenderGanreListFunc = async () => {
    const dropDownBlock = document.querySelector("#dropdown-js")

    dropDownBlock.innerHTML = ""

    const checkAdmin = JSON.parse(localStorage.getItem("admin"))

    if ((checkAdmin !== null || checkAdmin !== undefined)) {
        dropDownBlock.innerHTML += `<li><a href="./admin.html">Админ панель</a></li>`
    }

    await axios.get(`${API}/categories/`).then(response => {
        const data = response.data
        data.forEach(ganre => {
            dropDownBlock.insertAdjacentHTML("beforeend", `
                <li><a href="./categories.html?ganre=${ganre.name}">${ganre.name}</a></li>
            `)
        })
    })
}

export default RenderGanreListFunc;