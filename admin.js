document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('adminForm').addEventListener('submit', adminSubmitHandler);
  });
  
  function adminSubmitHandler(event) {
    event.preventDefault();
    var adminPassword = document.getElementById('adminPassword').value;
  
    if (adminPassword === 'galamiton123') {
      window.open('adminform.html', '_blank');
    } else {
      alert('Incorrect admin password. Please try again.');
    }
  }
  