document.getElementById("personalInfoForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    var selectedService = document.getElementById("serviceSelect").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var location = document.getElementById("location").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    var serviceRequests = JSON.parse(localStorage.getItem("serviceRequests")) || [];

    var serviceID = serviceRequests.length + 1;

    var serviceRequest = {
      serviceID: serviceID,
      service: selectedService,
      name: name,
      age: age,
      location: location,
      number: number,
      email: email,
    };

    serviceRequests.push(serviceRequest);
    localStorage.setItem("serviceRequests", JSON.stringify(serviceRequests));

    var confirmationMessage = `Your request for ${selectedService} has been submitted. We will contact you at ${number} or ${email}.`;
    showModal(confirmationMessage);
});

function showModal(message) {
    var modal = document.getElementById("modal");
    var confirmationMessageElement = document.getElementById("confirmationMessage");
    confirmationMessageElement.textContent = message;
    modal.style.display = "block";

    var closeButton = document.querySelector(".close");
    closeButton.onclick = function () {
        modal.style.display = "none";
    };
}
