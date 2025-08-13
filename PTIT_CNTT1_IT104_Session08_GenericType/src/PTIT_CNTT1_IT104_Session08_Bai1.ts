enum weekDays{
    MONDAY = "Thứ hai",
    TUESDAY = "Thứ ba",
    WEDNESDAY = "Thứ tư",
    THURSDAY = "Thứ năm",
    FRIDAY = "Thứ sáu",
    SARTURDAY = "Thứ bảy",
    SUNDAY = "Chủ nhật",
}
const daysOfWeek = Object.values(weekDays);
daysOfWeek.forEach(day => {
    console.log(day);
    
});

// for (const day in weekDays) {
//     console.log(weekDays[day as keyof typeof weekDays]);
// }

