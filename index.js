var users = [];
var savedUsers = localStorage.getItem('users');
if (savedUsers) {
  users = JSON.parse(savedUsers);
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('loginForm').addEventListener('submit', loginSubmitHandler);
});

function loginSubmitHandler(event) {
  event.preventDefault();
  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;

  var user = users.find(function(user) {
    return user.email === email && user.password === password;
  });

var loginMessage = document.getElementById('loginMessage');

loginMessage.classList.remove('login-error');
loginMessage.classList.remove('login-success');

if (user) {
  loginMessage.innerText = 'Login successful. Redirecting...';
  loginMessage.classList.add('login-success');
  loginMessage.classList.add('fadeIn');
  setTimeout(function() {
    window.location.href = 'home.html';
  }, 1500);
} else {
  loginMessage.innerText = 'Incorrect email or password. Please try again.';
  loginMessage.classList.add('login-error');
  loginMessage.classList.add('slideInDown');
}

loginMessage.style.display = 'block';
}
