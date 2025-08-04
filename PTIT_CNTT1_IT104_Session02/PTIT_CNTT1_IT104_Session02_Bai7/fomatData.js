export const formatDate = (currentTime) => {
    console.log(currentTime);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };  // Note
    console.log(currentTime.toLocaleDateString('vi-VN', options));
}

export const formatDate2 = (dateString) => {
    let today = new Date(dateString);
    let date = today.getDate();
    if (date > 0 && date < 10) {
        date = `0${date}`;
    }
    let month = today.getMonth() + 1;
    if (month > 0 && month < 10) {
        month = `0${month}`;
    }
    let year = today.getFullYear();
    return `${date}/${month}/${year}`
}