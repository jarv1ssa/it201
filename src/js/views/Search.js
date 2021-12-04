import Categories from "../components/Categories";
import View from "./View";

export default class extends View {
  static getHtml() {
    return `
      <div class="container">
        <div class="categories">
          ${Categories.render()}
        </div>

        <div class="results">
          salam
        </div>
      </div>
    `;
  }
}
