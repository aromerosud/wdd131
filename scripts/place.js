const temperature = 10; //  °C
const windSpeed = 5; // km/h

function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

let windChillValue;

if (temperature <= 10 && windSpeed > 4.8) {
  windChillValue = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
} else {
  windChillValue = "N/A";
}

const data = [
  { label: "Area", value: "587,041 sq km" },
  { label: "Population", value: "27,691,0118" },
  { label: "Capital", value: "Lima" },
  { label: "Languages", value: "Spanish" },
  { label: "Currency", value: "SOL" },
  { label: "Time Zone", value: "UTC-5" },
  { label: "Calling Code", value: "+551" },
  { label: "Internet TLD", value: ".mg" }
];

const container = document.getElementById("data");

data.forEach(item => {
  const row = document.createElement("div");
  row.classList.add("data-row");

  row.innerHTML = `
    <span class="label">${item.label}:</span>
    <span class="value">${item.value}</span>
  `;

  container.appendChild(row);
});

const weather = [
  { label: "Temperature", value: temperature + "°C" },
  { label: "Conditions", value: "Partly Cloudy" },
  { label: "Wind", value: windSpeed + " Km/h" },
  { label: "Wind Chill", value: windChillValue }
];

const container2 = document.getElementById("weather");

weather.forEach(item => {
  const row = document.createElement("div");
  row.classList.add("weather-row");

  row.innerHTML = `
    <span class="label">${item.label}:</span>
    <span class="value">${item.value}</span>
  `;

  container2.appendChild(row);
});

const copyrightSymbol = "©";
const currentYear = new Date().getFullYear();
const copyrightText = `${copyrightSymbol} ${currentYear}`;

document.getElementById("currentyear").textContent = copyrightText;
document.getElementById("lastModified").innerHTML = document.lastModified;