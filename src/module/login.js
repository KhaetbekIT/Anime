const LoginInit = () => {
    const LoginElement = document.querySelector("#login-js");

    const User = JSON.parse(localStorage.getItem("user"))

    if (User && User.login && User.password) {
        LoginElement.outerHTML = LoginElement.outerHTML.replace(/a/, "button")
    }
}

const LoginOut = () => {
    const LoginElement = document.querySelector("button#login-js");

    LoginElement?.addEventListener("click", () => {
        localStorage.removeItem("user")
        localStorage.removeItem("admin")
        window.location.replace("/")
    })
}

const CheckUserLogin = () => {
    const User = JSON.parse(localStorage.getItem("user"))

    if (User && User.login && User.password) {
        window.location.replace("/")
    }
}

export { LoginInit, CheckUserLogin, LoginOut }