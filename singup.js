  // Signup function
  function signup() {
    // Get input values
    var name = document.getElementById("signup-name").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
  
    // Check if name, email, and password are not empty
    if (name && email && password) {
      // Save user information to local storage
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      
      // Clear input fields
      document.getElementById("signup-name").value = "";
      document.getElementById("signup-email").value = "";
      document.getElementById("signup-password").value = "";
  
      // Display success message
      document.getElementById("signup-message").textContent = "Signup successful. You can now login.";
    } else {
      // Display error message
      document.getElementById("signup-message").textContent = "Please fill in all the fields.";
    }
  }