const copyrightSymbol = "©";
const currentYear = new Date().getFullYear();
const copyrightText = `${copyrightSymbol} ${currentYear}`;

document.getElementById("currentyeaar").textContent = copyrightText;
document.getElementById("lastModified").innerHTML = document.lastModified;