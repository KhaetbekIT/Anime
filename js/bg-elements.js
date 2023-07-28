const elements = document.querySelectorAll(".set-bg")


for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    const src = element.dataset.setbg

    element.style.backgroundImage = `url(./${src})`
}