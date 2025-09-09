const users = {
  "admin": "admin",
  "jasonnguyen": "furrylover123",
  "justinpham": "siscogae",
  "davido": "davido",
  "unblocked101": "unblocked101"
};

function checkLogin() {
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value;

  if (users[u] && users[u] === p) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById('error').textContent = "Invalid username or password";
  }
}