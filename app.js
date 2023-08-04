// write Current Time

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




// write static table in JS: (for test)

let records = [
    {firstName: "Mohammad", lastName: "Flahati", age: 21, email: "mfalahat2002Gmail.com"},
    {firstName: "Alireza", lastName: "Akbari", age: 22, email: "alirea1232@gmail.com"},
    {firstName: "Melika", lastName: "Ahmadi", age: 25, email: "melika44@gmail.com"},
    {firstName: "Sepideh", lastName: "Hasani", age: 19, email: "Sdfvcgmail.com"},
    {firstName: "Arash", lastName: "Aslani", age: 39, email: "arash22gmail.com"}
];

let tableBody = document.querySelector("#table-body");

records.forEach(function (item) {
    var row = document.createElement("tr");

    var firstNameCell = document.createElement("td");
    var firstNameText = document.createTextNode(item.firstName);
    firstNameCell.appendChild(firstNameText);

    var lastNameCell = document.createElement("td");
    var lastNameText = document.createTextNode(item.lastName);
    lastNameCell.appendChild(lastNameText);
    
    var ageCell = document.createElement("td");
    var ageText = document.createTextNode(item.age);
    ageCell.appendChild(ageText);
  
    var emailCell = document.createElement("td");
    var emailText = document.createTextNode(item.email);
    emailCell.appendChild(emailText);
  
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(ageCell);
    row.appendChild(emailCell);
  
    tableBody.appendChild(row);
});



