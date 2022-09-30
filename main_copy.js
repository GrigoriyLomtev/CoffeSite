const title = document.getElementById("nav__title");
// const menu = document.getElementById("nav__menu");
const menu = document.getElementById("test");
const contacts = document.getElementById("nav__contacts");

function scrollToMenu() {
  const toMenu__section = document.getElementById("menu__section");
  toMenu__section.scrollIntoView({ behavior: "smooth" });
}
menu.addEventListener("click", scrollToMenu);
contacts.addEventListener("click", scrollToContacts);
