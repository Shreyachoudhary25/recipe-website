// SIGNUP FUNCTION
function signup() {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill all the fields!");
    return;
  }

  const user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem("foodUser", JSON.stringify(user));
  alert("Signup successful! Please login.");
  window.location.href = "login.html";
}


// LOGIN FUNCTION
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const savedUser = JSON.parse(localStorage.getItem("foodUser"));

  if (!savedUser) {
    alert("No user found. Please sign up first.");
    return;
  }

  if (email === savedUser.email && password === savedUser.password) {
    alert("Login successful! Welcome " + savedUser.name);
    window.location.href = "recipes.html";
  } else {
    alert("Wrong email or password!");
  }
}
