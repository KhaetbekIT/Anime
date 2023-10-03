const RenderGanreListFunc = (ganres) => {
    const dropDownBlock = document.querySelector("#dropdown-js")

    dropDownBlock.innerHTML = ""

    const checkAdmin = JSON.parse(localStorage.getItem("admin"))

    if((checkAdmin !== null || checkAdmin !== undefined)){
        dropDownBlock.innerHTML += `<li><a href="./admin.html">Админ панель</a></li>`
    }

    ganres.forEach(ganre => {
        dropDownBlock.insertAdjacentHTML("beforeend", `
            <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
        `)
    })
}

export default RenderGanreListFunc;