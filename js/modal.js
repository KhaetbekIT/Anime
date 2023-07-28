const ModalFunc = () => {
    const modal = document.querySelector(".search-model")

    const modalBtn = document.querySelector(".icon_search")

    const modalClose = modal.querySelector(".search-close-switch")

    const modalInput = modal.querySelector("#search-input")

    modalBtn.addEventListener("click", () => {
        modal.classList.toggle("d-block")
    })

    modalClose.addEventListener("click", () => {
        modal.classList.remove("d-block")
    })

    modalInput.addEventListener("keyup", e => {
        console.log(e.target.value);
    })
}

ModalFunc()