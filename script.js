const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const endOfCountdown = '1 Jan 2024';

function countdown()
{
    const endDate = new Date(endOfCountdown);
    const currentDate = new Date() - 21600000;

    const totalSecondsLeft = (endDate - currentDate) / 1000;

    const seconds = Math.floor(totalSecondsLeft) % 60;
    const minutes = Math.floor(totalSecondsLeft / 60) % 60 
    const hours = Math.floor(totalSecondsLeft / 3600) % 24
    const days = Math.floor(totalSecondsLeft / 3600 / 24)

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time)
{
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);