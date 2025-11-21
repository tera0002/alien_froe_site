const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

btn.addEventListener("click", toggleTheme);

function toggleTheme() {
  html.classList.toggle("dark");
}
