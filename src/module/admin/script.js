import axios from "axios";
import { API } from "../api";
import RenderGanreListFunc from "./categories-lists";
import { DisbleFunc } from "../disable";
import { RenderCategoriesFunc, RenderSelectFunc, RenderVideosFunc } from "./render-lists";

const AdminScriptFunc = () => {

    const CategoryFunc = async () => {
        const categories = document.querySelector("#category-wrapper-js")
        const categoryTitle = categories.querySelector("#category-name")
        const categoryImage = categories.querySelector("#category-image")
        const categoryAddBtn = categories.querySelector("#category-add-btn")

        const tableContainer = categories.querySelector("#category-container")

        const select = document.querySelector("#video-category")

        const categoriesItem = {
            name: null,
            image: null
        }

        const inputArray = [categoryTitle, categoryImage]

        DisbleFunc(inputArray, categoryAddBtn)

        await axios.get(`${API}/categories/`).then(response => {
            const data = response.data;
            RenderSelectFunc(data, select)
        })

        RenderGanreListFunc()

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

        await axios.get(`${API}/categories/`).then(response => {
            const data = response.data;
            RenderCategoriesFunc(data, tableContainer)
        })

        categoryAddBtn?.addEventListener("click", () => {
            axios.post(`${API}/categories/`, categoriesItem).then(async () => {
                alert(`CATEGORY IS ADDED`)

                await axios.get(`${API}/categories/`).then(response => {
                    const data = response.data;
                    RenderCategoriesFunc(data, tableContainer)
                })

                RenderGanreListFunc()

                await axios.get(`${API}/categories/`).then(response => {
                    const data = response.data;
                    RenderSelectFunc(data, select)
                })

                categoryTitle.value = ""
                categoryImage.value = ""
            }).catch(error => {alert(`ERROR: error on posting category`); console.error(error)})
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

                    RenderGanreListFunc()

                    axios.get(`${API}/categories/`).then(response => {
                        const data = response.data;
                        RenderSelectFunc(data, select)
                    })


                }).catch(() => alert("ERROR: error from delete"))
            }
        })
    }

    const VideosListFunc = () => {
        const videosWrapper = document.querySelector("#video-wrapper-js")
        const videoContainer = videosWrapper.querySelector("#video-container")
        const form = videosWrapper.querySelector("#form-js")
        const select = form[0]
        const image = form[1]
        const title = form[2]
        const originalTitle = form[3]
        const tags = form[4]
        const year = form[5]
        const rating = form[6]
        const videoFile = form[7]
        const desc = form[8]
        const addVideoBtn = form[9]

        const animeItem = {
            image: undefined,
            title: null,
            "original-title": null,
            ganre: null,
            tags: [],
            date: `0000`,
            views: 0,
            rating: 0,
            description: "",
            video: undefined
        }

        const formValues = [select, image, title, originalTitle, tags, year, rating, videoFile, desc]

        form?.addEventListener("submit", e => {
            e.preventDefault()
        })

        DisbleFunc(formValues, addVideoBtn)

        select?.addEventListener("change", () => {
            DisbleFunc(formValues, addVideoBtn)

            if (select?.value !== "default") {
                axios.get(`${API}/categories/${select.value}`).then(response => {
                    const data = response.data;
                    animeItem.ganre = data.name;
                })
            }
        })

        image?.addEventListener("input", () => {
            DisbleFunc(formValues, addVideoBtn)
            const fileReader = new FileReader()

            const file = image.files[0]

            if (
                file.type === "image/jpeg" ||
                file.type === "image/jpg" ||
                file.type === "image/png" ||
                file.type === "image/webp" ||
                file.type === "image/svg" ||
                file.type === "image/jfif"
            ) {
                fileReader.addEventListener("load", () => {
                    animeItem.image = fileReader.result
                })

                fileReader.addEventListener("error", () => {
                    animeItem.image = null
                    image.value = ""
                    alert(`ERROR: error onload file. Try again!`)
                })

                fileReader.readAsDataURL(file)

            } else {
                alert(`TYPE FILE IS NOT CORRECT`)
                image.value = ""
            }
        })

        title?.addEventListener("input", () => {
            DisbleFunc(formValues, addVideoBtn)

            animeItem.title = title.value

        })

        originalTitle?.addEventListener("input", () => {
            DisbleFunc(formValues, addVideoBtn)

            animeItem["original-title"] = originalTitle.value
        })

        tags?.addEventListener("input", () => {
            DisbleFunc(formValues, addVideoBtn)

            animeItem.tags = tags.value.split(" ")
        })

        year?.addEventListener("input", () => {
            DisbleFunc(formValues, addVideoBtn)

            animeItem.date = year.value
        })

        rating?.addEventListener("input", () => {
            DisbleFunc(formValues, addVideoBtn)

            animeItem.rating = rating.value
        })

        videoFile?.addEventListener("input", () => {
            DisbleFunc(formValues, addVideoBtn)
            const fileReader = new FileReader()

            const file = videoFile.files[0]

            if (
                file.type === "video/mp4"
            ) {
                fileReader.addEventListener("load", () => {
                    animeItem.video = fileReader.result

                    let videoBlob = new Blob([new Uint8Array(animeItem.video)], { type: 'video/mp4' });

                    animeItem.video = window.URL.createObjectURL(videoBlob);
                })

                fileReader.addEventListener("error", () => {
                    animeItem.video = undefined
                    videoFile.value = ""
                    alert(`ERROR: error onload file. Try again!`)
                })

                fileReader.readAsDataURL(file)

            } else {
                alert(`TYPE FILE IS NOT CORRECT`)
                videoFile.value = ""
            }
        })

        desc?.addEventListener("input", () => {
            DisbleFunc(formValues, addVideoBtn)

            animeItem.description = desc.value
        })

        addVideoBtn?.addEventListener("click", () => {

            axios.post(`${API}/anime/`, animeItem,).then((response) => {
                alert(`VIDEO WAS ADDED`)

                axios.get(`${API}/anime/`).then(response => {
                    const data = response.data;

                    RenderVideosFunc(data, videoContainer)
                })
            }).catch((error) => { alert(`ERROR: error on adding video`); console.error(error) })
        })

        videoContainer.addEventListener("click", e => {
            if (e.target && e.target.tagName === "BUTTON") {
                const target = e.target

                const deleteIndex = target.dataset.buttonIndex;

                axios.delete(`${API}/anime/${deleteIndex}`).then(() => {
                    alert(`VIDEO WAS DELETED`);

                    axios.get(`${API}/anime/`).then(response => {
                        const data = response.data;

                        RenderVideosFunc(data, videoContainer)
                    })


                }).catch(() => alert("ERROR: error from delete"))
            }
        })

        axios.get(`${API}/anime/`).then(response => {
            const data = response.data;

            RenderVideosFunc(data, videoContainer)
        })
    }

    CategoryFunc()

    VideosListFunc()
}

export default AdminScriptFunc;