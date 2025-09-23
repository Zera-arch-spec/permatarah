const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 95) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function myFunction() {
  document.getElementById("frm1").submit();
}
const cards = document.querySelectorAll(".gem-card");
const btn = document.getElementById("colorBtn");

btn.addEventListener("click", () => {
  cards.forEach(card => {
    card.style.color = "violet";
  });
});