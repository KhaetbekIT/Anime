const PreloaderFunc = () => {
    const preloder = document.querySelector(".preloder")

    const swiper = 1

    setTimeout(() => {
        preloder.classList.remove("active")
    }, 1000)
}

export {PreloaderFunc};