document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("requestForm");
  const confirmButton = document.getElementById("confirmButton"); 
  const requestList = document.getElementById("requestList");

  confirmButton.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const datetime = document.getElementById("date").value;
    const number = document.getElementById("number").value;
    const scroll = document.getElementById("scroll").value;

    const request = {
      name: name,
      datetime: datetime,
      number: number,
      scroll: scroll,
    };

    let requests = JSON.parse(localStorage.getItem("requests")) || [];
    requests.push(request);
    localStorage.setItem("requests", JSON.stringify(requests));

    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <strong>Name:</strong> ${name}<br>
    <strong>Date and Time:</strong> ${datetime}<br>
    <strong>Number:</strong> ${number}<br>
    <strong>Scroll:</strong> ${scroll}
`;
    requestList.appendChild(listItem);

    form.reset();
  });
});
