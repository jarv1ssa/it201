import Router from "./Router";
import UI from "./UI";

const searchInput = document.querySelector("#search");
const overlay = document.querySelector(".overlay");

window.onpopstate = () => {
  Router.render();
};

document.addEventListener("DOMContentLoaded", () => {
  Router.render();
  UI.renderSearchPopup();
});

document.querySelectorAll("a").forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.currentTarget.getAttribute("data-link")) {
      event.preventDefault();
      Router.navigate(null, null, event.currentTarget.href);
    }
  });
});

searchInput.addEventListener("focus", () => {
  UI.toggleOverlay();
  UI.toggleSearchPopup();
});

document.addEventListener("overlaytoggled", (event) => {
  const search = document.querySelector(".header__search");

  event.detail.state
    ? (search.style.borderBottomLeftRadius =
        search.style.borderBottomRightRadius =
          0)
    : (search.style.borderBottomLeftRadius =
        search.style.borderBottomRightRadius =
          "0.5rem");
});

overlay.addEventListener("click", () => {
  UI.toggleOverlay();
  UI.toggleSearchPopup();
});
