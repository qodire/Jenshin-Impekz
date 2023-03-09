const inputText = document.getElementById("inputText");
const inputPassword = document.getElementById("inputPassword");
const inputNumber = document.getElementById("inputNumber");
const inputEmail = document.getElementById("inputEmail");
const inputTerms = document.getElementById("inputTerms");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const passError = document.getElementById("passError");
const ageError = document.getElementById("ageError");
const emailError = document.getElementById("emailError");
const termsError = document.getElementById("termsError");

submitBtn.addEventListener("click", (event)=>{
    event.preventDefault();

    var errorText = "";

    const text = inputText.value;
    var errorName = "";
    if(text == ""){
        errorName = "*Name must be filled";
        errorText += "Name must be filled <br>";
    }
    nameError.innerText = errorName;
    
    const password = inputPassword.value;
    var errorPass = "";
    if(password.length < 8){
        errorPass = "*Password must consist of minimum 8 characters";
        errorText += "Password must consist of minimum 8 characters <br>";
    }
    passError.innerText  = errorPass;

    const number = inputNumber.value;
    var errorAge = "";
    if(number < 12){
        errorAge = "*Still under age"
        errorText += "Still under age <br>";
    }
    ageError.innerHTML = errorAge;

    const email = inputEmail.value;
    var errorEmail = "";
    if(!email.includes("@gmail.com")){
        errorEmail = "*Format must @gmail.com";
        errorText += "Format must @gmail.com <br>";
    }
    emailError.innerHTML = errorEmail;

    const termsPrivacy = inputTerms.checked;
    var errorTerms = "";
    if(!termsPrivacy){
        errorTerms = "*Must agree to Terms & Condition";
        errorText += "Must agree to Terms & Condition <br>";
    }
    termsError.innerHTML = errorTerms;
    
    if(errorText == ""){
        alert("Successfully Registered");
    }
})