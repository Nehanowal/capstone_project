const emailHolder = document.getElementById("form-email")
const passwordHolder = document.getElementById("form-password").value
const message = document.getElementById("message")

emailHolder.addEventListener("input",checkEmail)

function checkEmail(e){
    const emailValue = e.target.value
    if(!emailValue){
        message.innerHTML="Email is required!"
    }else if(!emailValue.includes("@")){
        message.innerHTML = "Enter a valid email!"
    }
    else{
        message.innerHTML=""
    }
}




