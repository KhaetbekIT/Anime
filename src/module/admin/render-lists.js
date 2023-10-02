const RenderCategoriesFunc = (array = [], container) => {
    if (container) {
        container.innerHTML = ""
        array.forEach((item, index) => {
            index += 1
            container.insertAdjacentHTML("beforeend", `
                <tr>
                    <th scope="row">${index}</th>
                    <td>${item.name}</td>
                    <td class="text-end">
                        <button type="button" class="btn btn-danger btn-sm" data-button-index="${item.id}">
                            удалить
                        </button>
                    </td>
                </tr>
            `)
        })
    }
}

const RenderVideosFunc = (array = [], container) => {
    if (container) {
        container.innerHTML = ""
        array.forEach((item, index) => {
            index += 1
            container.insertAdjacentHTML("beforeend", `
                <tr>
                    <th scope="row">${index}</th>
                    <td>${item.ganre}</td>
                    <td>${item.title}</td>
                    <td> ${item.views} </td>
                    <td class="text-end">
                        <button type="button" class="btn btn-danger btn-sm" data-button-index="${item.id}">
                            удалить
                        </button>
                    </td>
                </tr>
            `)
        })
    }
}

const RenderSelectFunc = (array = [], container) => {
    if (container) {
        container.innerHTML = `<option value="default" selected>Выберите категорию</option>`
        array.forEach((item) => {
            container.insertAdjacentHTML("beforeend", `<option value="${item.id}">${item.name}</option>`)
        })
    }
}

export { RenderCategoriesFunc, RenderVideosFunc, RenderSelectFunc }