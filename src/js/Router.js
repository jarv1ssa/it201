import routes from "./routes";

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

  static render() {
    const View = this.matchRoute().route.view;

    document
      .querySelector("footer")
      .insertAdjacentHTML("beforebegin", View.getHtml());
  }
}
