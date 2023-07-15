import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateTime = document.querySelector('#datetime-picker');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');
const dataStart = document.querySelector('button[data-start]');

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
const days = addLeadingZero(Math.floor(ms / day));
const hours = addLeadingZero(Math.floor((ms % day) / hour));
const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

dataStart.setAttribute('disabled', true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if ( selectedDates[0] <= new Date()) {
        Notify.failure("Please choose a date in the future");
    } else {
          dataStart.removeAttribute('disabled');
    };
    },
  };

const calendar = flatpickr(dateTime, options);

dataStart.addEventListener('click', () => {
  const timerId =  setInterval(() => {
     const timer = calendar.selectedDates[0].getTime() - Date.now();
     const startTimer = convertMs(timer)
     dataDays.textContent = startTimer.days;
     dataHours.textContent = startTimer.hours;
     dataMinutes.textContent = startTimer.minutes;
     dataSeconds.textContent = startTimer.seconds;
     if (timer <= 1000) {
       clearInterval(timerId);
    };
   }, 1000);
   
});

