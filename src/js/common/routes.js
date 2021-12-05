import About from "../views/About";
import Home from "../views/Home";
import Search from "../views/Search";

export default [
  { name: "home", path: "/", view: Home },
  { name: "about", path: "/about", view: About },
  { name: "search", path: "/search", view: Search },
];
