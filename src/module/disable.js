const DisbleFunc = (array = [], button) => {
    array.forEach(item => {
        if (item?.value === "") {
            if (button) button.disabled = true;
        } else {
            if (button) button.disabled = false;
        }
    })
}

export { DisbleFunc }