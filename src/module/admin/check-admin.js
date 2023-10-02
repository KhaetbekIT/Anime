const CheckAdminFunc = () => {
    const admin = JSON.parse(localStorage.getItem("admin"))

    if ((admin === null) || (admin.admin === null)) window.location.replace("/");
}

export { CheckAdminFunc }