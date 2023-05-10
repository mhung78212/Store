// Countdown
const countDown = () => {
    const countDate = new Date("June 20, 2023 00:00:00").getTime(),
        now = new Date().getTime(),
        gap = countDate - now;

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    const textDay = Math.floor(gap / day),
        textHour = Math.floor((gap % day) / hour),
        textMinute = Math.floor((gap % hour) / minute),
        textSecond = Math.floor((gap % minute) / second);

    document.getElementById("day").innerHTML = textDay;
    document.getElementById("hour").innerHTML = textHour;
    document.getElementById("minute").innerHTML = textMinute;
    document.getElementById("second").innerHTML = textSecond;
};
setInterval(countDown, 1000);

// Product sale percent
const qtyAvailable = document.querySelector(".qty-available").innerHTML,
    qtySold = document.querySelector(".qty-sold").innerHTML,
    percent = (qtyAvailable * 100) / qtySold;

document.querySelector(".stock .avilable").style.width = percent + '%'
