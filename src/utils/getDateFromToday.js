// This function returns date of the day X days before or after today.

import { hoursInADay, msPerSec, minsPerHour, secsPerMin } from 'store/constant';

export function getDateFromToday(x) {
    return new Date(Date.now() + x * hoursInADay * minsPerHour * secsPerMin * msPerSec).toISOString();
}
