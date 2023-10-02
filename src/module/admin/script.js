import axios from "axios";
import { API } from "../api";
import RenderGanreListFunc from "./categories-lists";
import { DisbleFunc } from "../disable";
import { RenderCategoriesFunc } from "./render-lists";

const AdminScriptFunc = async () => {

    const categories = document.querySelector("#category-wrapper-js")
    const categoryTitle = categories.querySelector("#category-name")
    const categoryImage = categories.querySelector("#category-image")
    const categoryAddBtn = categories.querySelector("#category-add-btn")

    const tableContainer = categories.querySelector("#category-container")

    const categoriesItem = {
        name: null,
        image: null
    }

    const inputArray = [categoryTitle, categoryImage]

    DisbleFunc(inputArray, categoryAddBtn)

    await axios.get(`${API}/anime`).then(response => {
        const data = response.data;

        const genres = new Set()

        data.forEach(item => genres.add(item.ganre));

        RenderGanreListFunc(genres)
    })

    categoryTitle?.addEventListener("input", () => {
        DisbleFunc(inputArray, categoryAddBtn)

        categoriesItem.name = categoryTitle?.value
    })

    categoryImage?.addEventListener("input", () => {
        DisbleFunc(inputArray, categoryAddBtn)

        const fileReader = new FileReader()

        const file = categoryImage.files[0]

        if (
            file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/png" ||
            file.type === "image/webp" ||
            file.type === "image/svg" ||
            file.type === "image/jfif"
        ) {
            fileReader.addEventListener("load", () => {
                categoriesItem.image = fileReader.result
            })

            fileReader.addEventListener("error", () => {
                categoriesItem.image = null
                categoryImage.value = ""
                alert(`ERROR: error onload file. Try again!`)
            })

            fileReader.readAsDataURL(file)

        } else {
            alert(`TYPE FILE IS NOT CORRECT`)
            categoryImage.value = ""
        }
    })

    axios.get(`${API}/categories/`).then(response => {
        const data = response.data;
        RenderCategoriesFunc(data, tableContainer)
    })

    categoryAddBtn?.addEventListener("click", () => {
        axios.post(`${API}/categories/`, categoriesItem).then(() => {
            alert(`CATEGORY IS ADDED`)
            categoryTitle.value = ""
            categoryImage.value = ""

            axios.get(`${API}/categories/`).then(response => {
                const data = response.data;
                RenderCategoriesFunc(data, tableContainer)
            })
        })
    })

    tableContainer?.addEventListener("click", e => {
        if (e.target && e.target.tagName === "BUTTON") {
            const target = e.target

            const deleteIndex = target.dataset.buttonIndex;

            axios.delete(`${API}/categories/${deleteIndex}`).then(() => {
                alert(`CATEGORY WAS DELETED`);

                axios.get(`${API}/categories/`).then(response => {
                    const data = response.data;
                    RenderCategoriesFunc(data, tableContainer)
                })
            }).catch(()=> alert("ERROR: error from delete"))
        }
    })
}

export default AdminScriptFunc;