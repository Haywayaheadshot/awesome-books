import { timeAndDate } from './Variables.js';
import { DateTime } from './luxon.js';

export default function dateAndTime() {
  setInterval(() => {
    const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
    timeAndDate.innerHTML = date;
  }, 0);
}
