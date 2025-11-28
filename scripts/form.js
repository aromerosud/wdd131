const copyrightSymbol = "©";
const currentYear = new Date().getFullYear();
const copyrightText = `${copyrightSymbol} ${currentYear}`;

const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const select = document.getElementById("productName");

products.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;  
    option.textContent = item.name;
    select.appendChild(option);
});

document.getElementById("currentyear").textContent = copyrightText;
document.getElementById("lastModified").innerHTML = document.lastModified;

document.querySelector("form").addEventListener("submit", () => {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);
});

