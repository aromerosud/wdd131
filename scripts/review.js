const count = Number(localStorage.getItem("reviewCount")) || 0;
document.getElementById("reviews-count").textContent = count;