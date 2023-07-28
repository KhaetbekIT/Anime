console.clear()

const PreloaderFunc = () => {
    const preloder = document.querySelector(".preloder")

    const swiper = 1

    preloder.classList.add("active")

    setTimeout(() => {
        preloder.classList.remove("active")
    }, 10000)
}

PreloaderFunc()