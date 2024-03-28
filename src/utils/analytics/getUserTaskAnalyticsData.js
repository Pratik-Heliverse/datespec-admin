import { getCategoryDates } from './getCategoryDates';

export function getUserTasknAlyticsData(taskData = {}, from, to, duration) {
    const categories = getCategoryDates(from, to);
    const weekCategories = ['Week 1', 'week 2', 'Week 3', 'Week 4'];

    const total = [];
    const pending = [];
    const rescheduled = [];
    const completed = [];

    if (duration === 'month') {
        for (let i = 0; i <= 3; i++) {
            let totalForWeek = 0;
            let pendingForWeek = 0;
            let rescheduledForWeek = 0;
            let completedForWeek = 0;
            categories.slice(i * 7, (i + 1) * 7).map((ele) => {
                if (ele in taskData) {
                    totalForWeek += taskData[ele]?.total;
                    pendingForWeek += taskData[ele]?.pending;
                    rescheduledForWeek += taskData[ele]?.rescheduled;
                    completedForWeek += taskData[ele]?.completed;
                }
            });
            total.push(totalForWeek);
            pending.push(pendingForWeek);
            rescheduled.push(rescheduledForWeek);
            completed.push(completedForWeek);
        }
    } else {
        categories.forEach((ele) => {
            if (ele in taskData) {
                total.push(taskData[ele]?.total);
                pending.push(taskData[ele]?.pending);
                rescheduled.push(taskData[ele]?.rescheduled);
                completed.push(taskData[ele]?.completed);
            } else {
                total.push(0);
                pending.push(0);
                rescheduled.push(0);
                completed.push(0);
            }
        });
    }

    const series = [].concat([
        { name: 'Total', data: total },
        { name: 'Rescheduled', data: rescheduled },
        { name: 'Pending', data: pending },
        { name: 'Completed', data: completed }
    ]);

    return {
        series,
        categories: duration === 'week' ? categories.map((date) => getDayFromDate(date)) : weekCategories
    };
}

function getDayFromDate(date) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return days[new Date(date).getDay()];
}
