const RenderCategoriesFunc = (array = [], container, child = "") => {
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

export { RenderCategoriesFunc }