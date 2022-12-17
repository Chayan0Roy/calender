const monthEl = document.querySelector(".calender_top h1");
const fullDateEl = document.querySelector(".calender_top h3");
const daysEl = document.querySelector(".days");
let days = "";

const monthInx = new Date().getMonth();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() -1;
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

monthEl.innerText = months[monthInx];
fullDateEl.innerText = new Date().toDateString();


for(let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`
}

for(let i = 1; i <= lastDay; i++) {
    if(i === new Date().getDate()) {
        days += `<div class="today">${i}</div>`
    } else {
        days += `<div>${i}</div>`
    }
}

daysEl.innerHTML = days;