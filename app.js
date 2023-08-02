// write Current Time

const timePart = document.querySelector(".current-time");
function updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    timePart.innerHTML = hours + ":" + minutes + ":" + seconds;

}
setInterval(updateTime, 1000);


// min and max ranges:

function showValue(range, id) {
    let ranges = document.querySelector(`.${range}`);
    let value = document.querySelector(`#${id}`);
    value.innerHTML = "Value: " + ranges.value;
}





