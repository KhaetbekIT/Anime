import axios from "axios"
import { API } from "./api"

const SignUpFunc = () => {
    const formContainer = document.querySelector("#sign-js")

    const email = formContainer.querySelector("#email-js")

    const login = formContainer.querySelector("#login-js")

    const password = formContainer.querySelector("#password-js")

    const addBtn = formContainer.querySelector("#sign-up-btn-js")

    const user = {
        adminLogin: "User",
        password: "1234",
        email: "test@mail.ru",
        userName: "User name",
        admin: true
    }

    const CheckInputs = () => {
        if (
            email?.value == "" ||
            login?.value == "" ||
            password?.value == ""
        ) {
            addBtn.disabled = true
        } else {
            addBtn.disabled = false
        }
    }

    CheckInputs()

    email?.addEventListener("input", () => {
        CheckInputs()
        user.email = email?.value
    })

    login?.addEventListener("input", () => {
        CheckInputs()
        user.adminLogin = login?.value
        user.userName = login?.value.split(" ")[0]
    })

    password?.addEventListener("input", () => {
        CheckInputs()
        user.password = password?.value
    })

    addBtn.addEventListener("click", () => {
        axios.post(`${API}/admins/`, user).then(() => {alert("admin added"); window.location.replace("/")}).catch(error => alert(error))
    })
}

export { SignUpFunc };