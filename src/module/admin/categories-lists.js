const RenderGanreListFunc = (ganres) => {
    const dropDownBlock = document.querySelector("#dropdown-js")

    dropDownBlock.innerHTML = ""

    ganres.forEach(ganre => {
        dropDownBlock.insertAdjacentHTML("beforeend", `
            <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
        `)
    })
}

export default RenderGanreListFunc;