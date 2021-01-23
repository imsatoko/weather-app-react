export function CurrentTime() {
  let today = new Date();

  let month = formatMonth(today.getMonth());
  let date = today.getDate();
  let day = formatDay(today.getDay());
  let hour = formatTime(today.getHours());
  let minute = formatTime(today.getMinutes());

  return `${day} ${month} ${date}, ${hour}:${minute}`;
}

function formatMonth(month) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months[month];
}

function formatDay(day) {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return days[day];
}

function formatTime(time) {
  if (time < 10) {
    return `0${time}`;
  }

  return time;
}
