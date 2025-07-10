const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const mobileRegisterBtn = document.getElementById("mobile-register");
const mobileLoginBtn = document.getElementById("mobile-login");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

mobileRegisterBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.add("active");
});

mobileLoginBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.remove("active");
});

function adjustForScreenSize() {
    const mobileToggleElements = document.querySelectorAll(".mobile-toggle");
    const display = window.innerWidth <= 768 ? "block" : "none";
    mobileToggleElements.forEach((el) => (el.style.display = display));
}

window.addEventListener("load", adjustForScreenSize);
window.addEventListener("resize", adjustForScreenSize);
