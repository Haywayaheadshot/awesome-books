import { timeAndDate } from './Variables.js';
import { DateTime } from './luxon.js';

function dateAndTime() {
  setInterval(() => {
    const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
    timeAndDate.innerHTML = date;
  }, 0);
}

export default dateAndTime;