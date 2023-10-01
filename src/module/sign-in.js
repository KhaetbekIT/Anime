import axios from "axios"
import { API } from "./api"
import { CheckUserLogin, LoginInit } from "./login"

const SignInFunc = () => {
    const formContainer = document.querySelector("#sign-js")

    const login = formContainer.querySelector("#login-js")

    const password = formContainer.querySelector("#password-js")

    const signBtn = formContainer.querySelector("#sign-btn-js")

    LoginInit()

    const LoginFunc = () => {
        axios.get(`${API}/users`).then(response => {
            const data = response.data;

            data?.forEach((item) => {
                if (
                    item.login === login?.value &&
                    item.password === password?.value &&
                    login?.value !== "" &&
                    password?.value !== ""
                ) {

                    localStorage.setItem("user", JSON.stringify({
                        login: login?.value,
                        password: password?.value
                    }))
                    CheckUserLogin()
                    LoginInit()

                    login.value = ""
                    password.value = ""
                }
            })
        })

        axios.get(`${API}/admins`).then(response => {
            const data = response.data;

            data?.forEach((item) => {
                if (
                    item.login === login?.value &&
                    item.password === password?.value &&
                    login?.value !== "" &&
                    password?.value !== ""
                ) {

                    localStorage.setItem("admin", JSON.stringify({
                        login: login?.value,
                        password: password?.value,
                        paths: true
                    }))
                    LoginInit()

                    login.value = ""
                    password.value = ""
                }
            })

        })
    }

    signBtn?.addEventListener("click", (e) => {
        e.preventDefault()
        LoginFunc()
    })

    CheckUserLogin()

}

export { SignInFunc };