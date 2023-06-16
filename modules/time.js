import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default function updateTime(timeElement) {
  const currentTime = DateTime.local();
  const { day } = currentTime;
  const month = currentTime.toLocaleString({ month: 'long' });
  const { year } = currentTime;
  let hours = currentTime.hour;
  const minutes = currentTime.minute;
  const seconds = currentTime.second;

  let daySuffix = 'th';
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = 'st';
  } else if (day === 2 || day === 22) {
    daySuffix = 'nd';
  } else if (day === 3 || day === 23) {
    daySuffix = 'rd';
  }

  let ampm = '';
  if (hours >= 12) {
    ampm = 'pm';
  } else {
    ampm = 'am';
  }
  if (hours > 12) {
    hours -= 12;
  }

  const displayedTime = `${month} ${day}${daySuffix} ${year}, ${hours}:${minutes}:${seconds} ${ampm}`;

  timeElement.textContent = displayedTime;
}
