const tempButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const titleSpan = document.querySelector("#course-title");
const copyrightSymbol = "©";
const currentYear = new Date().getFullYear();
const copyrightText = `${copyrightSymbol} ${currentYear}`;

document.getElementById("currentyear").textContent = copyrightText;
document.getElementById("lastModified").innerHTML = document.lastModified;

tempButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	tempButton.classList.toggle("open");

	if(navigation.classList.contains("open")){
		titleSpan.style.display = "none";
	}else{
		titleSpan.style.display = "flex";
	}	
});
