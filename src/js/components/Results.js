import Component from "./Component";
import categories from "../common/categories";
import client from "../ContentfulClient";

export default class extends Component {
  static results = "";

  static getCategories() {
    const params = new URLSearchParams(location.search);

    return params.get("categories");
  }

  static getResults(searchTerm) {
    this.results = "";

    client
      .getEntries({
        content_type: "nonprofit",
        "fields.category[in]": searchTerm,
      })
      .then(({ items }) => {
        items.forEach((item) => {
          const { category, name, location, description, logo, cover, link } =
            item.fields;

          this.results += `
            <div class="result ${category}">
              <img src="${cover.fields.file.url}">

              <div class="result__body" style="background-color: ${
                categories.find((element) => element.id === category)
                  .hoverBgColor
              };">
                <img src="${logo.fields.file.url}">

                <div>
                  <p class="result__name">${name}</p>
                  <p class="result__location">${location}</p>
                  <p class="result__description">${description}</p>
                </div>
              </div>

              <a href="${link}" target="_blank">Donate</a>
            </div>
          `;
        });

        document.dispatchEvent(
          new CustomEvent("resultsgot", { detail: this.results })
        );
      })
      .catch((err) => {
        throw err;
      });
  }

  static render() {}
}
