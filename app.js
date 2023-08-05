// write Current Date & Time
const timePart = document.querySelector(".current-time");
function updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let year = currentTime.getFullYear();
    let dayNumber = currentTime.getDate();
    let mounthNumber = currentTime.getMonth() + 1;

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    dayNumber = (dayNumber < 10 ? "0" : "") + dayNumber;
    mounthNumber = (mounthNumber < 10 ? "0" : "") + mounthNumber;

    timePart.innerHTML = hours + ":" + minutes + ":" + seconds + " " + dayNumber + "/" + mounthNumber + "/" + year;

}
setInterval(updateTime, 1000);


// min and max ranges:
function showValue(range, id) {
    let ranges = document.querySelector(`#${range}`);
    let value = document.querySelector(`#${id}`);
    value.innerHTML = "Value: " + ranges.value;
}


// Generate Random  Records (Functionality):
const generateButton = document.querySelector(".generator-btn");
const tableBody = document.querySelector("#table-body");
const pagination = document.querySelector(".pagination");
const recordsNumber = document.querySelector(".records-number");
const recordsTime = document.querySelector(".records-time");
const rowSelect = document.querySelector("#row-number-select");
const tableHeader = document.querySelector("#table-header");
var numRows = "";
var timeToRecord = "";

  generateButton.addEventListener('click', () => {
  const rowsPerPageSelect = rowSelect;
  const numPages = Math.ceil(numRows / rowsPerPageSelect.value);
  const historyText = document.querySelector(".history-text");
  const p = document.createElement("p");
  p.innerHTML = `${timeToRecord} / ${numRows}`;
  historyText.appendChild(p);

  numRows = Math.floor(Math.random() * (10000 - 500 + 1)) + 500;

  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  timeToRecord = hours + ":" + minutes + ":" + seconds;
  recordsTime.innerHTML = timeToRecord;


  tableHeader.style.visibility = "visible";
  recordsNumber.innerHTML = numRows;
  tableBody.innerHTML = '';

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${generateRandomFirstName()}</td>
      <td>${generateRandomLastName()}</td>
      <td>${Math.floor(Math.random() * (99 - 18 + 1)) + 18}</td>
      <td>${generateRandomEmail()}</td>`;
    tableBody.appendChild(row);
  }

  pagination.innerHTML = `Number of pages: ${numPages}`;

  rowsPerPageSelect.addEventListener('change', () => {
    const newNumPages = Math.ceil(numRows / rowsPerPageSelect.value);
    pagination.innerHTML = `Number of pages: ${newNumPages}`;
  });

});

function generateRandomFirstName() {
  const names = ['Mohammad', 'Negin', 'Alireza', 'Hoda', 'Navid', 'Sepideh', 'Fatemeh', 'Mahsa', 'Saba', 'Sohrab', 'Sadegh', 'Akram', 'Melika', 'Atefeh', 'Majid', 'Amir', 'Ali'];
  return names[Math.floor(Math.random() * names.length)];
}
function generateRandomLastName() {
    const names = ['Hasani', 'Sadeghi', 'Falahati', 'Ahmadi', 'Akbari', 'Nazari', 'Rostami', 'Moradi'];
    return names[Math.floor(Math.random() * names.length)];
}
function generateRandomEmail() {
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
  const name = generateRandomFirstName().toLowerCase();
  const domain = domains[Math.floor(Math.random() * domains.length)];

  return `${name}@${domain}`;
}






























// write static table in JS: (for test)

// let records = [
//     {firstName: "Mohammad", lastName: "Flahati", age: 21, email: "mfalahat2002Gmail.com"},
//     {firstName: "Alireza", lastName: "Akbari", age: 22, email: "alirea1232@gmail.com"},
//     {firstName: "Melika", lastName: "Ahmadi", age: 25, email: "melika44@gmail.com"},
//     {firstName: "Sepideh", lastName: "Hasani", age: 19, email: "Sdfvcgmail.com"},
//     {firstName: "Arash", lastName: "Aslani", age: 39, email: "arash22gmail.com"}
// ];

// records.forEach(function (item) {
//     let row = document.createElement("tr");

//     let firstNameCell = document.createElement("td");
//     let firstNameText = document.createTextNode(item.firstName);
//     firstNameCell.appendChild(firstNameText);

//     let lastNameCell = document.createElement("td");
//     let lastNameText = document.createTextNode(item.lastName);
//     lastNameCell.appendChild(lastNameText);

//     let ageCell = document.createElement("td");
//     let ageText = document.createTextNode(item.age);
//     ageCell.appendChild(ageText);

//     let emailCell = document.createElement("td");
//     let emailText = document.createTextNode(item.email);
//     emailCell.appendChild(emailText);

//     row.appendChild(firstNameCell);
//     row.appendChild(lastNameCell);
//     row.appendChild(ageCell);
//     row.appendChild(emailCell);

//     tableBody.appendChild(row);
// });



