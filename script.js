const bar = document.getElementById("bar");
const list = document.getElementById("list");
const home = document.getElementById("home-section");
const arrow = document.getElementById("arrow");
const listContainer = document.getElementById("list-container");
bar.addEventListener("click", () => {
  bar.style.display = "none";
  list.style.display = "block";
  cancel.style.display = "block";
  arrow.style.display = "none";
  listContainer.style.left = "0%";
  listContainer.style.transition = "all 1s ease-in-out";
});

cancel.addEventListener("click", () => {
  bar.style.display = "block";
  list.style.display = "none";
  cancel.style.display = "none";
  arrow.style.display = "block";
  listContainer.style.left = "100%";
  listContainer.style.transition = "all 1s ease-in-out";
});
