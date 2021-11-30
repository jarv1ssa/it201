import Router from "./Router";

window.addEventListener("popstate", Router.render());

document.addEventListener("DOMContentLoaded", () => {
  Router.render();
});
