import Router from "./Router";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.currentTarget.getAttribute("data-link")) {
        event.preventDefault();
        Router.navigate(null, null, event.currentTarget.href);
      }
    });
  });

  Router.render();
});

window.onpopstate = () => {
  Router.render();
};
