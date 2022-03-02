addEventListener('load', () => {
  showTime();
  setInterval(showTime, 100);
});

function showTime() {
  let date = new Date();

  let localTime = getLocalTime(date);
  let utcTime = getUTCTime(date);

  document.getElementById('local-hour').innerText = localTime.hours;
  document.getElementById('local-minute').innerText = localTime.minutes;
  document.getElementById('local-second').innerText = localTime.seconds;
  document.getElementById('local-ampm').innerText = localTime.ampm;
  document.getElementById('utc-hour').innerText = utcTime.hours;
  document.getElementById('utc-minute').innerText = utcTime.minutes;
  document.getElementById('utc-second').innerText = utcTime.seconds;
  document.getElementById('utc-ampm').innerText = utcTime.ampm;
}

function getLocalTime(date) {
  let ampm = 'am';
  let hours = date.getHours();

  if (hours > 12) {
    hours -= 12;
    ampm = 'pm';
  }

  return {
    hours: formatNumber(hours),
    minutes: formatNumber(date.getMinutes()),
    seconds: formatNumber(date.getSeconds()),
    ampm: ampm
  }
}

function getUTCTime(date) {
  let ampm = 'am';
  let hours = date.getUTCHours();

  if (hours > 12) {
    hours -= 12;
    ampm = 'pm';
  }

  return {
    hours: formatNumber(hours),
    minutes: formatNumber(date.getUTCMinutes()),
    seconds: formatNumber(date.getUTCSeconds()),
    ampm: ampm
  }
}

function formatNumber(number) {
  if (number < 10) {
    return '0' + number;
  }

  return number;
}
