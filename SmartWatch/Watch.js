window.addEventListener("DOMContentLoaded", () => {
    const clock = document.querySelector(".clock");
  
    function getCurrentTime12HourWithSeconds() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      hours = hours % 12;
      hours = hours ? hours : 12;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
  
      var currentTimeString = hours + ":" + minutes;
      return currentTimeString;
    }
  
    setInterval(() => {
      clock.textContent = getCurrentTime12HourWithSeconds();
    }, 1000);
  
    const currentDate = new Date();
  
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
  
    var day = currentDate.getDate();
    var month = months[currentDate.getMonth()];
    var dayOfWeek = days[currentDate.getDay()];
  
    if (day < 10) {
      day = "0" + day;
    }
  
    const formattedDate = day + "-" + month + "-" + dayOfWeek;
  
    document.querySelector(".date").textContent = formattedDate;
  
    document.querySelector(".button").addEventListener("click", () => {
      document
        .querySelector(".screen_components")
        .classList.toggle("turnOffScreen");
    });
  });
  