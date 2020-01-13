const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

const nextPredictedPerihelion = 'Jul 28, 2061 00:00:00';
const nextPredictedPerihelionDate = getnextPredictedPerihelionDate(nextPredictedPerihelion);

let yearsElement = document.getElementById('years');
let daysElement = document.getElementById('days');
let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');

setInterval(timer, second);

function getnextPredictedPerihelionDate(nextPredictedPerihelion) {
    return new Date(nextPredictedPerihelion).getTime();
}

function timer() {
    let differenceDate = getDifferenceDate(nextPredictedPerihelionDate);
    setDateInHTML(differenceDate);
}

function getDifferenceDate(nextPredictedPerihelionDate) {
    let currentDate = new Date().getTime();

    return nextPredictedPerihelionDate - currentDate;
}

function setDateInHTML(differenceDate) {
    yearsElement.innerText = convertTime(differenceDate, differenceDate + 1, year);
    daysElement.innerText = convertTime(differenceDate, year, day);
    hoursElement.innerText = convertTime(differenceDate, day, hour);
    minutesElement.innerText = convertTime(differenceDate, hour, minute);
    secondsElement.innerText = convertTime(differenceDate, minute, second);
}

function convertTime(differenceDate, fromTimeType, toTimeType) {
    return Math.floor((differenceDate % fromTimeType) / toTimeType);
}