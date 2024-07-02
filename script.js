document.addEventListener("DOMContentLoaded", function () {
  let targetDate = new Date().getTime() + 10 * 24 * 60 * 60 * 1000; // Set target date to 10 days from now

  function calculateCountdown() {
    const now = new Date().getTime();
    let remainingTime = targetDate - now;

    // If remaining time is less than or equal to zero, reset the countdown
    if (remainingTime <= 0) {
      targetDate = new Date().getTime() + 10 * 24 * 60 * 60 * 1000; // Reset target date to 10 days from now
      remainingTime = targetDate - now;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function updateCountdown() {
    const dayElement = document.getElementById("countdown-day");
    const hourElement = document.getElementById("countdown-hour");
    const minuteElement = document.getElementById("countdown-minutes");
    const secondElement = document.getElementById("countdown-seconds");

    const { days, hours, minutes, seconds } = calculateCountdown();

    dayElement.textContent = days;
    hourElement.textContent = hours;
    minuteElement.textContent = minutes;
    secondElement.textContent = seconds;
  }

  updateCountdown();

  setInterval(updateCountdown, 1000);
});
