const button = document.getElementById('runaway-button')
const OFFSET = 100

var check = true
document.addEventListener('mousemove', (e) => {
    if (check) {
        const x = e.pageX
        const y = e.pageY
        const buttonBox = button.getBoundingClientRect()
        const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
        const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)

        const horizontalOffset = buttonBox.width / 2 + OFFSET
        const verticalOffset = buttonBox.height / 2 + 10
        if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
            setButtonPosition(
                buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10)
        }
    }
})

var speed = 100
function setButtonPosition(left) {
    const boundingBox = document.getElementById("container").getBoundingClientRect()
    const buttonBox = button.getBoundingClientRect()

    if (distanceFromCenter(left, boundingBox.left, buttonBox.width) < 100) {
        check = false
        left = boundingBox.right - buttonBox.width - OFFSET
    }
    if (distanceFromCenter(left, boundingBox.right, buttonBox.width) > -100) {
        check = false
        left = boundingBox.left + OFFSET
    }

    document.documentElement.style.setProperty("--move-here", left)
    button.className = "move"

    if (!check) {
        setTimeout(() => {
            if (!check) {
                check = true
            }
        }, 500)
    }

    if (check) {
        button.style.left = `${document.documentElement.style.getPropertyValue("--move-here")}px`
        button.className = ""
    }
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}

const user = {
    "darrenprasetya40@gmail.com": "Bruh1234"
}
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
const validateEmail = (email) => {
    return emailRegex.test(email.toLowerCase())
};

const validatePassword = (password) => {
    return passRegex.test(password)
};
const loginEle = document.getElementById("login")

loginEle.addEventListener("input", (e) => {
    const email = loginEle.email.value
    const password = loginEle.password.value

    if (password == user[email]) {
        check = false
        button.style.cursor = "pointer"
    }
})

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

    alert("Logged in Successfully")
    disableButton()
    loginEle.email.value = ""
    loginEle.password.value = ""

})