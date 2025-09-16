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

