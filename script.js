console.log("Script is running");  // Check if script is loaded

// Validate data when form is submitted
document.getElementById("account-form").onsubmit = function () {
    clearErrors();

    let isValid = true;
    // Validate first name
    let first = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let checkbox = document.getElementById("checkbox"); 

    if (first == "") {
        let errSpan = document.getElementById('err-fname');
        errSpan.style.display = "block";
        isValid = false;
    }

    if (email == "") {
        let errSpan = document.getElementById('err-email');
        errSpan.style.display = "block";
        isValid = false;
    }

    if (password.length < 8) {
        let errSpan = document.getElementById('err-password');
        errSpan.style.display = "block";
        isValid = false;
    }

    if (password !== cpassword) {
        let errSpan = document.getElementById('err-cpassword');
        errSpan.style.display = "block";
        isValid = false;
    }

    // Extra Credit
    if (email === "" || email === " ") {
        // Case when the email field is completely empty or just contains a space
        let errSpan = document.getElementById('err-noEmail');
        errSpan.style.display = "block";
        isValid = false;
    } 
    else if (!email.includes("@") || !email.includes(".")) {
        // Case when the email is not valid (missing "@" or ".")
        let errSpan = document.getElementById('err-email');
        errSpan.style.display = "block";
        isValid = false;
    }
    


    

    

    // Check if the checkbox is checked
    if (!checkbox.checked) {
        let errSpan = document.getElementById('err-checkbox');
        errSpan.style.display = "block";
        isValid = false;
    }


    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("err");

    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }

    // Miss spelled id names stop the whole program from running 
}
