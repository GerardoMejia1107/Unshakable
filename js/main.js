const burgerMenuIcon = document.querySelector(".burger");
const menuBar = document.querySelector(".navbar");

burgerMenuIcon.addEventListener("click", (e) => {
  menuBar.classList.toggle("visibility");
});
