import axios from "axios"
import { API } from "./api"

const SignUpFunc = () => {
    const formContainer = document.querySelector("#sign-js")

    const email = formContainer.querySelector("#email-js")

    const login = formContainer.querySelector("#login-js")

    const password = formContainer.querySelector("#password-js")

    const addBtn = formContainer.querySelector("#sign-btn-js")

    const user = {
        login: "User",
        password: "1234",
        email: "test@mail.ru"
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
        user.login = login?.value
    })

    password?.addEventListener("input", () => {
        CheckInputs()
        user.password = password?.value
    })

    addBtn?.addEventListener("click", () => {
        axios.post(`${API}/users`, user).then(() => alert("added user")).catch(error => { console.log(error) })
    })
}

export { SignUpFunc };