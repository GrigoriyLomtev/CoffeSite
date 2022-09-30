const openNav = document.getElementById("nav__open");

// function addActive() {
//   document.getElementById("nav").addClass("active");
//   document.getElementById("nav__open").addClass("active");
// }

function toggleActive() {
  const x = document.getElementById("nav");
  x.classList.toggle("active");
  const y = document.getElementById("nav__open");
  y.classList.toggle("active");
  const z = document.getElementById("navNavigation");
  z.classList.toggle("active");
  console.log("toggleComplete");
}

openNav.addEventListener("click", toggleActive);
