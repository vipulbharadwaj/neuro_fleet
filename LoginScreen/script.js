
    function validateLogin() {
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      if (email === "" || password === "") {
        alert("All fields are required");
        return false;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
      }

      alert("Login successful");
      return true;
    }
