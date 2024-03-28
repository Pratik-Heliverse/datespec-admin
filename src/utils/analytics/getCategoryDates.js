import { hoursInADay, minsPerHour, secsPerMin, msPerSec } from 'store/constant';

export function getCategoryDates(from, to) {
    const dates = [];
    let iterations = 0;
    let currDate;
    do {
        currDate = new Date(new Date(from).getTime() + iterations * hoursInADay * minsPerHour * secsPerMin * msPerSec).toISOString();
        dates.push(currDate?.split('T')[0]);
        iterations++;
    } while (currDate !== to);

    return dates;
}
