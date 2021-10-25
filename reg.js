

function errorMsg(errorType, message) {
    document.getElementById(errorType).innerHTML = message;
};

function validateForm() {
    /***************************UserName Validation****************************************/
    var username = document.registration.username.value;
    var usernameError = true;
    var userNamePatt = /^[a-zA-Z]/;
    if (username == "") {
        errorMsg("usernameError", "Please enter a Username.");
        console.log("User Blank");
    } else {
        if (userNamePatt.test(username) === false) {
            errorMsg("usernameError", "Username must start with a letter.");
        } else if (username.length < 3) {
            errorMsg("usernameError", "Username must have 3 or more alphanumeric characters.");
        } else {
            errorMsg("usernameError", "");
            usernameError = false;
        }
    }

    /***************************Password Validation****************************************/
    var password = document.registration.password.value;
    var passwordError = true;
    var passwordPatt1 = /\d/;            //digit?       
    var passwordPatt2 = /[A-Z]/;
    var passwordPatt3 = /[/*-+!@#$^&*]/;



    if (password == "") {
        errorMsg("passwordError", "Please create a password that is 8 or more characters.");
    } else {
        if (password.length < 8) {
            errorMsg("passwordError", "Enter a password that is 8 or more characters ");
        }
        else if (passwordPatt1.test(password) === false) {
            errorMsg("passwordError", "Password must contain at least one digit. ");
        } else if (passwordPatt2.test(password) === false) {
            errorMsg("passwordError", "Password must contain at least one capital letter. ");
        } else if (passwordPatt3.test(password) === false) {
            errorMsg("passwordError", "Password must contain at least special character. ");
        }
        else {
            errorMsg("passwordError", "");
            passwordError = false;
        }
    }
    /***************************Confirm Password Validation****************************************/
    var confirm = document.registration.confirm.value;
    var confirmError = true;
    if(confirm == password){
        errorMsg("confirmError", "");
        passwordError = false;
    }else{
        errorMsg("confirmError", "Password must contain at least special character. ");

    }


    /* Stop submit if any field is false */
    if ((usernameError || passwordError || confirmError) == true) {
        return false;
    }
};

