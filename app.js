// import "./styles.scss";

// document.addEventListener("DOMContentLoaded", getExternal);

setInterval(getExternal, 2000);

const btn = document.querySelector("#btn");
btn.addEventListener("click", getExternal);

function getExternal() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      document.getElementById("city").value +
      "&units=metric&APPID=5d066958a60d315387d9492393935c19"
  )
    .then((res) => res.json())
    .then((data) => {
      // temp - температура
      // pressure - тиск
      // description - опис
      // humidity - вологість
      // speed - швидкість вітру
      // deg - напрям в градусах
      // icon - іконка, де 10d код іконки
      if (data.main.temp > 0) {
        document.getElementById("temp").textContent =
          "+" + data.main.temp + "°";
      } else {
        document.getElementById("temp").textContent = data.main.temp + "°";
      }

      document.getElementById("description").textContent =
        data.weather[0].description;
      document.getElementById("pressure").textContent =
        data.main.pressure + " Pa";
      document.getElementById("humidity").textContent =
        data.main.humidity + " %";
      document.getElementById("speed").textContent = data.wind.speed + " m/s";
      document.getElementById("deg").textContent = data.wind.deg + " deg";
      document.getElementById("icon").src =
        "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      document.getElementsByClassName("arrow")[0].style =
        "transform: rotate(" + data.wind.deg + "deg)";

      console.log(data);
      console.log(document.getElementById("city").value);
    })
    .catch((error) => console.log(error));
}
