document.addEventListener('DOMContentLoaded', function () {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
    if (currentUser) {
      document.getElementById('name').innerText = currentUser.name;
      document.getElementById('age').innerText = currentUser.age;
      document.getElementById('location').innerText = currentUser.location;
      document.getElementById('phoneNumber').innerText = currentUser.phoneNumber;
      document.getElementById('email').innerText = currentUser.email;
    }
  });
  