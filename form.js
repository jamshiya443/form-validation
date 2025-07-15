// get form element from html
 document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
   

  
    // Get form element from html
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const terms = document.getElementById("terms").checked;
  
    let isValid = true;
  
    // Username validation
    if (username.length < 4 || !/^[a-zA-Z0-9]+$/.test(username)) {
      displayError("usernameError", "Username must be at least 4 alphanumeric characters.");
      isValid = false;
    } else {
      displaySuccess("usernameError");
    }
  
    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      displayError("emailError", "Enter a valid email address.");
      isValid = false;
    } else {
      displaySuccess("emailError");
    }
  
   // password validation
if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
  displayError("passwordError", "Password must be at least 8 characters, include an uppercase, a lowercase, a number, and a special character.");
  isValid = false;
} else {
  displaySuccess("passwordError");
}

    // Confirm Password validation
    if (confirmPassword !== password) {
      displayError("confirmPasswordError", "Passwords do not match.");
      isValid = false;
    } else {
      displaySuccess("confirmPasswordError");
    }
  
    // Date of Birth validation
    const dobDate = new Date(dob);
    const age = new Date().getFullYear() - dobDate.getFullYear();
    if (isNaN(dobDate.getTime()) || age < 18) {
      displayError("dobError", "You must be at least 18 years old.");
      isValid = false;
    } else {
      displaySuccess("dobError");
    }
  
    // Gender validation
    if (!gender) {
      displayError("genderError", "Please select your gender.");
      isValid = false;
    } else {
      displaySuccess("genderError");
    }
  
    // Terms validation
    if (!terms) {
      displayError("termsError", "You must agree to the terms and conditions.");
      isValid = false;
    } else {
      displaySuccess("termsError");
    }
  
    // If valid, display success message and store data
    if (isValid) {
      localStorage.setItem("userDetails", JSON.stringify({ username, email, dob, gender: gender.value }));
      document.getElementById("successMessage").textContent = "Sign-up successful!";
      document.getElementById("signupForm").reset();
    }
  });
  
  //  functions for displaying error and
  function displayError(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.previousElementSibling.classList.add("is-invalid");
    element.previousElementSibling.classList.remove("is-valid");
  }
  
  function displaySuccess(elementId) {
    const element = document.getElementById(elementId);
    element.textContent = "";
    element.previousElementSibling.classList.remove("is-invalid");
    element.previousElementSibling.classList.add("is-valid");
  }