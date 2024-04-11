var users = [];

var savedUsers = localStorage.getItem('users');
if (savedUsers) {
  users = JSON.parse(savedUsers);
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('registerForm').addEventListener('submit', registerSubmitHandler);
  document.getElementById('registerPassword').addEventListener('input', validatePassword); // Add input event listener for password validation
});

function registerSubmitHandler(event) {
  event.preventDefault();
  var name = document.getElementById('registerName').value;
  var age = document.getElementById('registerAge').value;
  var location = document.getElementById('registerLocation').value;
  var phoneNumber = document.getElementById('registerPhoneNumber').value;
  var email = document.getElementById('registerEmail').value;
  var password = document.getElementById('registerPassword').value;

  if (password.length < 6) {
    document.getElementById('passwordMessage').innerText = 'Password must be at least 6 characters long.'; // Show password message
    return;
  }

  var existingUser = users.find(function(user) {
    return user.email === email;
  });

  if (existingUser) {
    alert('Email already exists. Please use a different email address.');
    return;
  }

  users.push({ email: email, password: password, name: name, age: age, location: location, phoneNumber: phoneNumber });

  localStorage.setItem('users', JSON.stringify(users));

  var registerMessage = document.getElementById('registerMessage');
  registerMessage.innerText = 'Registration successful!';
  registerMessage.classList.add('register-success'); 

  registerMessage.style.position = 'fixed';
  registerMessage.style.top = '50%';
  registerMessage.style.left = '50%';
  registerMessage.style.transform = 'translate(-50%, -50%)';

  setTimeout(function() {
    registerMessage.innerText = '';
    registerMessage.classList.remove('register-success');
  }, 3000); 

  localStorage.setItem('currentUser', JSON.stringify({
    name: name,
    age: age,
    location: location,
    phoneNumber: phoneNumber,
    email: email
  }));

  document.getElementById('registerForm').reset();
}

function validatePassword() {
  var password = document.getElementById('registerPassword').value;
  if (password.length >= 6) {
    document.getElementById('passwordMessage').innerText = ''; 
  }
}
