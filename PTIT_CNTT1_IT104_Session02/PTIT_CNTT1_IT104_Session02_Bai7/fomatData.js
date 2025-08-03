export const formatDate = (currentTime) => {
    console.log(currentTime);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };  // Note
    console.log(currentTime.toLocaleDateString('vi-VN', options));
}