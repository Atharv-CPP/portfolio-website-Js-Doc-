console.log("JavaScript Connected Successfully ");

const nameInput = document.querySelector("input[placeholder='Enter Your Name']");
const emailInput = document.querySelector("input[placeholder='Enter Your Email']");
const messageInput = document.querySelector("input[placeholder='Enter Your Message ']");

const submitBtn = document.querySelector("button");

const body = document.body;

submitBtn.addEventListener("mouseover", () => {
  submitBtn.style.backgroundColor = "greenyellow";
  submitBtn.style.color = "black";
});
submitBtn.addEventListener("mouseout", () => {
  submitBtn.style.backgroundColor = "";
  submitBtn.style.color = "";
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
emailInput.addEventListener("input", () => {
  if (!validateEmail(emailInput.value)) {
    emailInput.style.border = "2px solid red";
  } else {
    emailInput.style.border = "2px solid green";
  }
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    messageInput.value.trim() === ""
  ) {
    alert("Please fill all fields!");
    return;
  }

  if (!validateEmail(emailInput.value)) {
    alert("Please enter a valid Email!");
    return;
  }

  alert(" Form Submitted Successfully ");


  saveFormData();
 nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});
const darkBtn = document.createElement("button");
darkBtn.innerText = " Dark Mode";
darkBtn.style.position = "fixed";
darkBtn.style.top = "20px";
darkBtn.style.right = "20px";
darkBtn.style.padding = "10px";
darkBtn.style.borderRadius = "10px";
darkBtn.style.cursor = "pointer";

document.body.appendChild(darkBtn);
darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");


  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    darkBtn.innerText = " Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    darkBtn.innerText = " Dark Mode";
  }
});
const style = document.createElement("style");
style.innerHTML = `
  .dark-mode {
    background-color: black;
    color: white;
  }
  .dark-mode footer {
    background-color: white;
    color: black;
  }
`;
document.head.appendChild(style);
function saveFormData() {
  const userData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem("contactFormData", JSON.stringify(userData));
}
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    darkBtn.innerText = " Light Mode";
  }

  console.log("Page Loaded Successfully ");
});
console.log("All Features Working Perfectly ");
const navItems = document.querySelectorAll("nav ul li");

navItems.forEach((item) => {
  item.style.cursor = "pointer";

  item.addEventListener("click", () => {
    alert("Scrolling feature can be added after fixing section IDs ");
  });
});
