//form event.
let form = document.querySelector("#regForm")

form.addEventListener("submit", function(event){
    //prevent form submission.
    event.preventDefault()

    //getting input values.
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let confirmPassword = document.querySelector("#confirmPassword").value

    //getting error elements.
    let nameError = document.querySelector("#nameError")
    let emailError = document.querySelector("#emailError")
    let passwordError = document.querySelector("#passwordError")
    let confirmPasswordError = document.querySelector("#confirmPasswordError")
    let successMsg = document.querySelector("#successMsg")

    //clear previous messages.
    nameError.textContent = ""
    emailError.textContent = ""
    passwordError.textContent = ""
    confirmPasswordError.textContent = ""
    successMsg.textContent = ""

    //validation flag.
    let isValid = true

    //name validation.
    if(name === ""){
        nameError.textContent = "Name must not be empty"
        isValid = false
    }

    //email validation.
    if(email.indexOf("@") === -1){
        emailError.textContent = "Email must contain @"
        isValid = false
    }

    //password length validation.
    if(password.length < 6){
        passwordError.textContent = "Password must be at least 6 characters"
        isValid = false
    }

    //confirm password validation.
    if(password !== confirmPassword){
        confirmPasswordError.textContent = "Passwords do not match"
        isValid = false
    }

    //success message.
    if(isValid === true){
        successMsg.textContent = "Registration Successful!"
        form.reset()
    }
})