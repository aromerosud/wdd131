// Hamburger Menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const titleSpan = document.querySelector("#course-title");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");   
});

// Footer Year & Last Modified
const copyrightSymbol = "©";
const currentYear = new Date().getFullYear();
const copyrightText = `${copyrightSymbol} ${currentYear}`;

document.getElementById("currentyear").textContent = copyrightText;
document.getElementById("lastModified").innerHTML = document.lastModified;




// -------------------------------------------------------------
// JS Dropdown (dynamic)
const reasons = [
    "Ask a Question",
    "Request a Template",
    "Send Feedback",
    "Business Inquiry"
];

const reasonContainer = document.getElementById("reason-container");

if (reasonContainer) {
  const select = document.createElement("select");
  select.id = "reason";

  reasons.forEach(r => {
    const option = document.createElement("option");
    option.value = r;
    option.textContent = r;
    select.appendChild(option);
  });

  reasonContainer.appendChild(select);
}

// -------------------------------------------------------------
// Lazy Loading
const lazyImages = document.querySelectorAll("img.lazy");

const lazyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => lazyObserver.observe(img));

// -------------------------------------------------------------
// Form validation + Localstorage
const form = document.getElementById("contact-form");
const responseMsg = document.getElementById("form-response");

// Review Counter
const reviewsCounter = document.getElementById("reviews-count");
if (reviewsCounter) {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    reviewsCounter.textContent = count;
}

if (form && responseMsg) {
  form.addEventListener("submit", (e) => {
      e.preventDefault();

    const nameValue = document.getElementById("name").value.trim();
    const emailValue = document.getElementById("email").value.trim();
    const msgValue = document.getElementById("message").value.trim();

    if (!nameValue || !emailValue || !msgValue) {
        responseMsg.textContent = "Please fill out all fields.";
        responseMsg.style.color = "red";
    } else {
        // Guardar en localStorage
        localStorage.setItem("contactName", nameValue);

        let count = Number(localStorage.getItem("reviewCount")) || 0;
        count++;
        localStorage.setItem("reviewCount", count);

        responseMsg.textContent = `Thank you, ${nameValue}! Your message has been sent.`;
        responseMsg.style.color = "#2b1a0e";

        form.reset();
    }

    responseMsg.classList.remove("hidden");
  });
}
