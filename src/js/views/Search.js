import Categories from "../components/Categories";
import Results from "../components/Results";
import View from "./View";

document.addEventListener("resultsgot", (event) => {
  document.querySelector(".results").innerHTML = event.detail;
});

export default class extends View {
  static getHtml() {
    Results.getResults(Results.getCategories());

    return `
      <div class="container">
        <div class="categories">
          ${Categories.render()}
        </div>

        <div class="results">
        </div>
      </div>
    `;
  }
}
