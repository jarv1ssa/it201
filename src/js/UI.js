import SearchPopup from "./components/SearchPopup";

export default class UI {
  static search = document.querySelector(".header__search");
  static showSearchPopup = false;
  static showOverlay = false;

  static renderSearchPopup() {
    const popup = document.createElement("div");
    popup.className = "header__search--popup";
    popup.innerHTML = SearchPopup.render();

    this.search.appendChild(popup);
  }

  static toggleSearchPopup() {
    this.showSearchPopup
      ? (document.querySelector(".header__search--popup").style.display =
          "none")
      : (document.querySelector(".header__search--popup").style.display =
          "block");
    this.showSearchPopup = !this.showSearchPopup;
  }

  static toggleOverlay() {
    this.showOverlay
      ? (document.querySelector(".overlay").style.display = "none")
      : (document.querySelector(".overlay").style.display = "flex");
    this.showOverlay = !this.showOverlay;

    document.dispatchEvent(
      new CustomEvent("overlaytoggled", { detail: { state: this.showOverlay } })
    );
  }
}
