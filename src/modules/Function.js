import { timeAndDate } from './Variables.js';

function dateAndTime() {
  setInterval(() => {
    const date = new Date().toUTCString();
    timeAndDate.innerHTML = date;
  }, 0);
}

export default dateAndTime;