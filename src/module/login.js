const LoginInit = () => {
    const LoginElement = document.querySelector("#login-js");

    const User = JSON.parse(localStorage.getItem("user"))
    const Admin = JSON.parse(localStorage.getItem("admin"))

    if ((User && User.login && User.password) || (Admin && Admin.admin)) {
        if (LoginElement) LoginElement.outerHTML = LoginElement?.outerHTML.replace(/a/, "button");
    }
}

const LoginOut = () => {
    const LoginElement = document.querySelector("button#login-js");

    if (LoginElement) {
        LoginElement?.addEventListener("click", () => {
            localStorage.removeItem("user")
            localStorage.removeItem("admin")
            window.location.replace("/")
        })
    }
}

const CheckUserLogin = () => {
    const User = JSON.parse(localStorage.getItem("user"))
    const Admin = JSON.parse(localStorage.getItem("admin"))

    if ((User && User.login && User.password) || (Admin && Admin.admin)) {
        window.location.replace("/")
    }
}

export { LoginInit, CheckUserLogin, LoginOut }