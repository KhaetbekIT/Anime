console.clear()

const preloder = document.querySelector(".preloder")

preloder.classList.add("active")

setTimeout(() => {
    preloder.classList.remove("active")
}, 10000)