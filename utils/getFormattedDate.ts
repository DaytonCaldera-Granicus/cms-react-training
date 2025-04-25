const getMonthName = (date: Date) => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[date.getMonth()];
}

export function getFormattedDate(date: Date) {
    console.log(date);
    
    return `${getMonthName(date)} ${date.getDay()}, ${date.getFullYear()}`;
}