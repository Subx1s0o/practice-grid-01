const date = new Date();

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const dayIndex = date.getDay();

const dayOfWeek = daysOfWeek[dayIndex];

const monthIndex = date.getMonth();

const currentMonth = months[monthIndex];

document.getElementById(
  'date'
).innerHTML = `${dayOfWeek}, ${date.getDate()} ${currentMonth} ${date.getFullYear()}`;

const apiKey = '3b4632484b8479d3f60b7d9b720020f9';
const city = 'New York';

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const temperatureCelsius = Math.round(data.main.temp - 273.15);

    document.getElementById('temperature').innerHTML = temperatureCelsius;
  })
  .catch(error => {
    console.error('Помилка при отриманні даних про погоду:', error);
  });
