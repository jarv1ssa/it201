import routes from "./common/routes";

export default class Router {
  constructor() {}

  static matchRoute() {
    const matches = routes.map((route) => {
      return {
        route,
        isMatch: location.pathname === route.path,
      };
    });

    let match = matches.find((match) => match.isMatch);

    if (!match) {
      match = {
        route: routes[0],
        isMatch: true,
      };
    }

    return match;
  }

  static navigate(data, unused, url) {
    history.pushState(data, unused, url);
    this.render();
  }

  static render() {
    const route = this.matchRoute().route;
    const main = document.querySelector("main");

    main.classList.replace(
      main.classList[main.classList.length - 1],
      route.name
    );
    main.innerHTML = route.view.getHtml();
  }
}
