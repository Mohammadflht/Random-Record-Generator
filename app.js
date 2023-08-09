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

var firstNameCharacters = "abcdefghijklmnopqrstuvwxyz";
var lastNameCharacters = "abcdefghijklmnopqrstuvwxyz";
var emailCharacters = "abcdefghijklmnopqrstuvwxyz";
var upercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789"
var symbols = "!@#$%&"



// Filter checkbox
// Filter firstName , lastName and email => Upercase / Numbers / Symbols:
const firstNameUpercase = document.querySelector('.first-name-upercase');
const firstNameNumbers = document.querySelector('.first-name-numbers');
const firstNameSymbols = document.querySelector('.first-name-symbols');
const lastNameUpercase = document.querySelector('.last-name-upercase');
const lastNameNumbers = document.querySelector('.last-name-numbers');
const lastNameSymbols = document.querySelector('.last-name-symbols');
const emailUpercase = document.querySelector('.email-upercase');
const emailNumbers = document.querySelector('.email-numbers');
const emailSymbols = document.querySelector('.email-symbols');

firstNameUpercase.value = "0";
firstNameNumbers.value = "0";
firstNameSymbols.value = "0";
lastNameUpercase.value = "0";
lastNameNumbers.value = "0";
lastNameSymbols.value = "0";
emailUpercase.value = "0";
emailNumbers.value = "0";
emailSymbols.value = "0";


// min and max ranges:
function showValue(range, id) {
  let ranges = document.querySelector(`#${range}`);
  let value = document.querySelector(`#${id}`);
  value.innerHTML = "Value: " + ranges.value;
}

// console.log(firstNameMinValue);

// Generate Random  Records (Functionality):
const generateButton = document.querySelector(".generator-btn");
const tableBody = document.querySelector("#table-body");
const pagination = document.querySelector(".pagination");
const recordsNumber = document.querySelector(".records-number");
const recordsTime = document.querySelector(".records-time");
const rowSelect = document.querySelector("#row-number-select");
const tableView = document.querySelector("#record");
const dataDetails = document.querySelector(".data-details");
const historyText = document.querySelector(".history-text");
var numRows = "";
var timeToRecord = "";



rowSelect.value = ""; //For Testing



generateButton.addEventListener('click', () => {
const p = document.createElement("p");
p.innerHTML = `${timeToRecord} / ${numRows}`;
historyText.appendChild(p);

numRows = Math.floor(Math.random() * (10000 - 500 + 1)) + 500;
var numPages;

// Time Seetings:
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

hours = (hours < 10 ? "0" : "") + hours;
minutes = (minutes < 10 ? "0" : "") + minutes;
seconds = (seconds < 10 ? "0" : "") + seconds;

timeToRecord = hours + ":" + minutes + ":" + seconds;
recordsTime.innerHTML = timeToRecord;


tableView.style.visibility = "visible";
recordsNumber.innerHTML = numRows;
tableBody.innerHTML = '';

var minAge = parseInt(document.getElementById("age-min-length").value);
var maxAge = parseInt(document.getElementById("age-max-length").value);

// Filter firstName , lastName and email => Upercase / Numbers / Symbols:
if(firstNameUpercase.value === "1") {
if(!firstNameCharacters.includes("ABCDEFGHIJKLMNOPQRSTUVWXYZ")){
firstNameCharacters = firstNameCharacters.concat(upercase);
}
}else firstNameCharacters = firstNameCharacters.replace(upercase, "");

if(firstNameNumbers.value === "1") {
if(!firstNameCharacters.includes("0123456789")){
firstNameCharacters = firstNameCharacters.concat(numbers);
}
}else firstNameCharacters = firstNameCharacters.replace(numbers, "");

if(firstNameSymbols.value === "1") {
if(!firstNameCharacters.includes("!@#$%&")){
firstNameCharacters = firstNameCharacters.concat(symbols);
}
}else firstNameCharacters = firstNameCharacters.replace(symbols, "");

if(lastNameUpercase.value === "1") {
if(!lastNameCharacters.includes("ABCDEFGHIJKLMNOPQRSTUVWXYZ")){
lastNameCharacters = lastNameCharacters.concat(upercase);
}
}else lastNameCharacters = lastNameCharacters.replace(upercase, "");

if(lastNameNumbers.value === "1") {
if(!lastNameCharacters.includes("0123456789")){
lastNameCharacters = lastNameCharacters.concat(numbers);
}
}else lastNameCharacters = lastNameCharacters.replace(numbers, "");

if(lastNameSymbols.value === "1") {
if(!lastNameCharacters.includes("!@#$%&")){
lastNameCharacters = lastNameCharacters.concat(symbols);
}
}else lastNameCharacters = lastNameCharacters.replace(symbols, "");

if(emailUpercase.value === "1") {
if(!emailCharacters.includes("ABCDEFGHIJKLMNOPQRSTUVWXYZ")){
emailCharacters = emailCharacters.concat(upercase);
}
}else emailCharacters = emailCharacters.replace(upercase, "");

if(emailNumbers.value === "1") {
if(!emailCharacters.includes("0123456789")){
emailCharacters = emailCharacters.concat(numbers);
}
}else emailCharacters = emailCharacters.replace(numbers, "");

if(emailSymbols.value === "1") {
if(!emailCharacters.includes("!@#$%&")){
emailCharacters = emailCharacters.concat(symbols);
}
}else emailCharacters = emailCharacters.replace(symbols, "");


for (let i = 0; i < numRows; i++) {
const row = document.createElement('tr');
row.innerHTML = `
  <td>${generateRandomFirstName()}</td>
  <td>${generateRandomLastName()}</td>
  <td>${Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge}</td>
  <td>${generateRandomEmail()}</td>`;
tableBody.appendChild(row);
}

const selectDivision = document.querySelector(".select-btn-division");
selectDivision.style.visibility = "visible";


rowSelect.addEventListener('change', () => {
  numPages = Math.ceil(numRows / rowSelect.value);

  console.log(numPages);

    var currentPage = 1;
    // Function to generate pagination buttons
    function generatePaginationButtons() {
      const paginationDiv = document.querySelector(".pagination");

      // Clear previous buttons
      paginationDiv.innerHTML = "";

      // Generate buttons for current page and two pages before/after
      var startPage = currentPage - 2;
      var endPage = currentPage + 2;
      // let endPage = Math.min(currentPage + 2, numPages);

      if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(numPages, startPage + 4);
      }

      if (endPage > numPages) {
        endPage = numPages;
        startPage = Math.max(1, endPage - 4);
      }

      for (let i = startPage; i <= endPage; i++) {
        let button = document.createElement("button");
        button.innerText = i;
        button.addEventListener("click", () => goToPage(i));
        if (i === currentPage) {
          button.classList.add("active");
        }
        paginationDiv.appendChild(button);
      }
    }

    // Function to go to a specific page
    function goToPage(page) {
      currentPage = page;
      generatePaginationButtons();
      updateTable();
    }

    // Function to update the table based on current page
    function updateTable() {
      const table = document.querySelector("#record");
      const rows = table.getElementsByTagName("tr");

      // Hide all rows
      for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = "none";
      }

      // Show rows for current page
      // const startIndex = (currentPage - 1) * rowsPerPageSelect.value;

      // let endIndex = Math.min(startIndex + rowsPerPageSelect.value, numRows);

      let startIndex = (currentPage - 1) * rowSelect.value;
      const endIndex = currentPage * rowSelect.value;

      for (let i = startIndex; i < endIndex; i++) {
        rows[i].style.display = "";
        // rows[i].style.backgroundColor = "blue";
      }
      // console.log(rowsPerPageSelect.value);
    }

    // Function to go to previous page
    function goToPrevPage() {
      if (currentPage > 1) {
        goToPage(currentPage - 1);
      }
    }

    // Function to go to next page
    function goToNextPage() {
      if (currentPage < numPages) {
        goToPage(currentPage + 1);
      }
    }


    // Attach event listeners to prev/next buttons

  let prevBtn = document.getElementById("prev-btn");
  prevBtn.addEventListener("click", goToPrevPage);

  let nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", goToNextPage);

  generatePaginationButtons();
  updateTable();

  prevBtn.style.visibility ="visible";
  nextBtn.style.visibility ="visible";
  });








  // var myTable = document.getElementById("table-body")
  // var myTableRows = myTable.getElementsByTagName("tr");

  // for (let i = 0; i < myTableRows.length; i++){
  //   var row = myTableRows[i];
  //   var cells = row.getElementsByTagName("td");

  //   for(let j = 0; j < cells.length; j++){
  //     var cell = cells[j];
  //     var cellValue = cell.innerText;

  //     console.log(cellValue);
  //   }
  // }


  const tableRows = tableBody.getElementsByTagName('tr');
  for (let i = 0; i < tableRows.length; i++) {
    tableRows[i].addEventListener('click', showDetails);
  }

});



function showDetails() {
  // Hide the main table
  tableView.style.display = 'none';
  dataDetails.style.display = "block";

const firstNameValueShow = document.querySelector(".first-name-show-card");
const lastNameValueShow = document.querySelector(".last-name-show-card");
const ageValueShow = document.querySelector(".age-show-card");
const emailValueShow = document.querySelector(".email-show-card");

  // Get values of clicked row
  const cells = this.getElementsByTagName('td');

  // Display values in details section
  // var valuesHtml = '';

  for (let i = 0; i < cells.length; i++) {
    firstNameValueShow.innerHTML = cells[0].innerHTML;
    lastNameValueShow.innerHTML = cells[1].innerHTML;
    ageValueShow.innerHTML = cells[2].innerHTML;
    emailValueShow.innerHTML = cells[3].innerHTML;
  }
}
const backButton = document.querySelector(".back-to-list-btn");
backButton.addEventListener("click", () => {
  tableView.style.display = '';
  dataDetails.style.display = "none";
});





function generateRandomFirstName() {
  var min = parseInt(document.getElementById("first-name-min-length").value);
  var max = parseInt(document.getElementById("first-name-max-length").value);

  var result = "";
  var length = Math.floor(Math.random() * (max - min + 1)) + min;

  for (var i = 0; i < length; i++) {
    result += firstNameCharacters.charAt(Math.floor(Math.random() * firstNameCharacters.length));
  }

  return result;
} 
function generateRandomLastName(){
  var min = parseInt(document.getElementById("last-name-min-length").value);
  var max = parseInt(document.getElementById("last-name-max-length").value);

  var result = "";
  var length = Math.floor(Math.random() * (max - min + 1)) + min;

  for (var i = 0; i < length; i++) {
    result += lastNameCharacters.charAt(Math.floor(Math.random() * lastNameCharacters.length));
  }

  return result;
}
function generateRandomEmail() {
  const domains = ['@gmail.com', '@yahoo.com'];
  const domain = domains[Math.floor(Math.random() * domains.length)];

  var min = parseInt(document.getElementById("email-min-length").value);
  var max = parseInt(document.getElementById("email-max-length").value);

  var result = "";
  var length = Math.floor(Math.random() * (max - min + 1)) + min;

  for (var i = 0; i < length - 10; i++) {
    result += emailCharacters.charAt(Math.floor(Math.random() * emailCharacters.length));
  }

  return `${result}${domain}`;
}



// Constraint part:


const firstNameConstraint = document.querySelector(".firstname-btn");
const lastNameConstraint = document.querySelector(".lastname-btn");
const ageConstraint = document.querySelector(".age-btn");
const emailConstraint = document.querySelector(".email-btn");

const firstNameTools = document.querySelector(".first-name-tools");
const lastNameTools = document.querySelector(".last-name-tools");
const ageTools = document.querySelector(".age-tools");
const emailTools = document.querySelector(".email-tools");

firstNameConstraint.addEventListener('click', () => {
  firstNameConstraint.style.backgroundColor = "#F7FFE5";
  lastNameConstraint.style.backgroundColor = "#f7ffe57b";
  ageConstraint.style.backgroundColor = "#f7ffe57b";
  emailConstraint.style.backgroundColor = "#f7ffe57b";
  firstNameTools.style.display = "block";
  lastNameTools.style.display = "none";
  ageTools.style.display = "none";
  emailTools.style.display = "none";
});
lastNameConstraint.addEventListener('click', () => {
  firstNameConstraint.style.backgroundColor = "#f7ffe57b";
  lastNameConstraint.style.backgroundColor = "#F7FFE5";
  ageConstraint.style.backgroundColor = "#f7ffe57b";
  emailConstraint.style.backgroundColor = "#f7ffe57b";
  firstNameTools.style.display = "none";
  lastNameTools.style.display = "block";
  ageTools.style.display = "none";
  emailTools.style.display = "none";
});
ageConstraint.addEventListener('click', () => {
  firstNameConstraint.style.backgroundColor = "#f7ffe57b";
  lastNameConstraint.style.backgroundColor = "#f7ffe57b";
  ageConstraint.style.backgroundColor = "#F7FFE5";
  emailConstraint.style.backgroundColor = "#f7ffe57b";
  firstNameTools.style.display = "none";
  lastNameTools.style.display = "none";
  ageTools.style.display = "block";
  emailTools.style.display = "none";
});
emailConstraint.addEventListener('click', () => {
  firstNameConstraint.style.backgroundColor = "#f7ffe57b";
  lastNameConstraint.style.backgroundColor = "#f7ffe57b";
  ageConstraint.style.backgroundColor = "#f7ffe57b";
  emailConstraint.style.backgroundColor = "#F7FFE5";
  firstNameTools.style.display = "none";
  lastNameTools.style.display = "none";
  ageTools.style.display = "none";
  emailTools.style.display = "block";
});


firstNameUpercase.addEventListener("change", () => {
  if(firstNameUpercase.value === "1"){
    firstNameUpercase.style.backgroundColor = "#F7FFE5";
  }else if(firstNameUpercase.value === "0") {
    firstNameUpercase.style.backgroundColor = "#f7ffe569"
  }
})
firstNameNumbers.addEventListener("change", () => {
  if(firstNameNumbers.value === "1"){
    firstNameNumbers.style.backgroundColor = "#F7FFE5";
  }else if(firstNameNumbers.value === "0") {
    firstNameNumbers.style.backgroundColor = "#f7ffe569"
  }
})
firstNameSymbols.addEventListener("change", () => {
  if(firstNameSymbols.value === "1"){
    firstNameSymbols.style.backgroundColor = "#F7FFE5";
  }else if(firstNameSymbols.value === "0") {
    firstNameSymbols.style.backgroundColor = "#f7ffe569"
  }
})
lastNameUpercase.addEventListener("change", () => {
  if(lastNameUpercase.value === "1"){
    lastNameUpercase.style.backgroundColor = "#F7FFE5";
  }else if(lastNameUpercase.value === "0") {
    lastNameUpercase.style.backgroundColor = "#f7ffe569"
  }
})
lastNameNumbers.addEventListener("change", () => {
  if(lastNameNumbers.value === "1"){
    lastNameNumbers.style.backgroundColor = "#F7FFE5";
  }else if(lastNameNumbers.value === "0") {
    lastNameNumbers.style.backgroundColor = "#f7ffe569"
  }
})
lastNameSymbols.addEventListener("change", () => {
  if(lastNameSymbols.value === "1"){
    lastNameSymbols.style.backgroundColor = "#F7FFE5";
  }else if(lastNameSymbols.value === "0") {
    lastNameSymbols.style.backgroundColor = "#f7ffe569"
  }
})
emailUpercase.addEventListener("change", () => {
  if(emailUpercase.value === "1"){
    emailUpercase.style.backgroundColor = "#F7FFE5";
  }else if(emailUpercase.value === "0") {
    emailUpercase.style.backgroundColor = "#f7ffe569"
  }
})
emailNumbers.addEventListener("change", () => {
  if(emailNumbers.value === "1"){
    emailNumbers.style.backgroundColor = "#F7FFE5";
  }else if(emailNumbers.value === "0") {
    emailNumbers.style.backgroundColor = "#f7ffe569"
  }
})
emailSymbols.addEventListener("change", () => {
  if(emailSymbols.value === "1"){
    emailSymbols.style.backgroundColor = "#F7FFE5";
  }else if(emailSymbols.value === "0") {
    emailSymbols.style.backgroundColor = "#f7ffe569"
  }
})















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