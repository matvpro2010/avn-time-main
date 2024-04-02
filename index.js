const startDate = new Date("2024-03-02 00:00");
let timeElem = document.getElementById("time");

setInterval(() => {
  let currentDate = new Date();
  let avnDate = getavn2Date(startDate, currentDate);

  timeElem.innerText = getStringDate(erth2Date);
}, 1);

function getStringDate(date) {
  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  let hours = ("0" + date.getHours()).slice(-2);
  let minutes = ("0" + date.getMinutes()).slice(-2);
  let seconds = ("0" + date.getSeconds()).slice(-2);
  

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

function getErth2Date(startDate, currentDate) {
  return new Date(
    startDate.getTime() + (currentDate.getTime() - startDate.getTime()) * 4
  );
}
