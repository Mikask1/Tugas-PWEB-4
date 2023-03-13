const button = document.getElementById('runaway-button')
const OFFSET = 100

var check = true
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
const validateEmail = (email) => {
    return emailRegex.test(email.toLowerCase())
};

const validatePassword = (password) => {
    return passRegex.test(password)
};
const loginEle = document.getElementById("login")

button.addEventListener("click", (e) => {
    e.preventDefault()
    const email = loginEle.email.value
    const password = loginEle.password.value
    console.log("test")
    if (!validateEmail(email)) {
        alert("That's not an email")
        return
    }

    if (!validatePassword(password)){
        alert("Password must have minimum eight characters, at least one uppercase letter, one lowercase letter and one number:")
        return
    }

    alert("Signed up Successfully")
    disableButton()
    loginEle.email.value = ""
    loginEle.password.value = ""

})