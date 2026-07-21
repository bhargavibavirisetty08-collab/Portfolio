document.getElementById("registrationForm").addEventListener("submit", function(event){

    event.preventDefault();

    // Clear all previous errors
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("rollError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("departmentError").innerHTML = "";
    document.getElementById("dobError").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";

    let valid = true;

    // Get values
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let department = document.getElementById("department").value;
    let dob = document.getElementById("dob").value;

    let gender = document.querySelector('input[name="gender"]:checked');

    // Full Name
    if(name === ""){
        document.getElementById("nameError").innerHTML =
        "Full Name is required.";
        valid = false;
    }

    // Roll Number
    let rollPattern = /^[A-Za-z0-9]+$/;

    if(roll === ""){
        document.getElementById("rollError").innerHTML =
        "Roll Number is required.";
        valid = false;
    }
    else if(!rollPattern.test(roll)){
        document.getElementById("rollError").innerHTML =
        "Only letters and numbers are allowed.";
        valid = false;
    }

    // Email
    let emailPattern =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if(email === ""){
        document.getElementById("emailError").innerHTML =
        "Email is required.";
        valid = false;
    }
    else if(!emailPattern.test(email)){
        document.getElementById("emailError").innerHTML =
        "Enter a valid email address.";
        valid = false;
    }

    // Mobile Number
    let mobilePattern = /^[0-9]{10}$/;

    if(mobile === ""){
        document.getElementById("mobileError").innerHTML =
        "Mobile Number is required.";
        valid = false;
    }
    else if(!mobilePattern.test(mobile)){
        document.getElementById("mobileError").innerHTML =
        "Mobile Number must contain exactly 10 digits.";
        valid = false;
    }

    // Password
    if(password === ""){
        document.getElementById("passwordError").innerHTML =
        "Password is required.";
        valid = false;
    }
    else if(password.length < 8){
        document.getElementById("passwordError").innerHTML =
        "Password must be at least 8 characters.";
        valid = false;
    }

    // Confirm Password
    if(confirmPassword === ""){
        document.getElementById("confirmPasswordError").innerHTML =
        "Confirm your password.";
        valid = false;
    }
    else if(password !== confirmPassword){
        document.getElementById("confirmPasswordError").innerHTML =
        "Passwords do not match.";
        valid = false;
    }

    // Gender
    if(gender == null){
        document.getElementById("genderError").innerHTML =
        "Please select your gender.";
        valid = false;
    }

    // Department
    if(department === ""){
        document.getElementById("departmentError").innerHTML =
        "Please select a department.";
        valid = false;
    }

    // Date of Birth
    if(dob === ""){
        document.getElementById("dobError").innerHTML =
        "Please select your Date of Birth.";
        valid = false;
    }

    // Success Message
    if(valid){

        document.getElementById("successMessage").innerHTML =
        "🎉 Registration Successful!";

        document.getElementById("registrationForm").reset();

    }

});