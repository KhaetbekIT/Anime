const ScrollerFunc = () => {
    const scrollerButton = document.querySelector("#scrollToTopButton")

    scrollerButton.addEventListener("click", e => {
        e.preventDefault()

        seamless.scrollIntoView(document.querySelector(".header"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    })
}

export default ScrollerFunc;