 // Login function
 function login() {
    // Get input values
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
  
    // Get saved user information from local storage
    var savedEmail = localStorage.getItem("email");
    var savedPassword = localStorage.getItem("password");
  
    // Check if email and password match the saved information
    if (email === savedEmail && password === savedPassword) {
      // Clear input fields
      document.getElementById("login-email").value = "";
      document.getElementById("login-password").value = "";
  
      // Display success message
      document.getElementById("login-message").textContent = "Successfully logged in!";
    } else {
      // Display error message
      document.getElementById("login-message").textContent = "Wrong information. Please try again.";
    }
  }