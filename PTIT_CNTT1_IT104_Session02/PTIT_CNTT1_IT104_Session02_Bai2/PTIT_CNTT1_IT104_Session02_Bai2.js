const greetingWithWeather = (name, weather) => {
    if (weather.toLowerCase() == "sunny") {
        return `Chào ${name}! Hôm nay trời nắng tuyệt vời!`;
    } else if (weather.toLowerCase() == "rainy") {
        return `Chào ${name}! Hôm nay trời mưa hãy mang theo ô nhéeee!`;
    } else {
        return `Chào ${name}!Hôm nay thời tiết không xác định.`;
    }
}

console.log(greetingWithWeather("Phanh", "Sunny"));
console.log(greetingWithWeather("Phanh", "Cloudy"));
console.log(greetingWithWeather("Phanh", "Rainy"));
