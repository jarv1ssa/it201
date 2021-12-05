import Component from "./Component";
import categories from "../common/categories";

export default class extends Component {
  static list = [];

  static generateStyleSheet() {
    const sheet = document.createElement("style");

    categories.forEach((category) => {
      const style = `
        #${category.id} {
          color: ${category.textColor};
        }

        #${category.id}:hover {
          background-color: ${category.hoverBgColor};
          color: ${category.hoverTextColor};
        }
      `;

      sheet.innerHTML += style;
    });

    const param = new URLSearchParams(location.search).get("categories");
    let specificStyle = "";

    if (param) {
      specificStyle = `
        #${param} {
          background-color: ${
            categories.find((category) => category.id === param).selectedBgColor
          };
          color: #fff;
        }
      `;
    }

    sheet.innerHTML += specificStyle;

    document.body.appendChild(sheet);
  }

  static getCategories() {
    this.list = [];

    categories.forEach((category) => {
      this.list.push(`
        <li>
          <a href="/search?categories=${category.id}" id="${category.id}" data-link="${category.id}">
            <img src="./images/${category.icon}">
            <span>${category.name}</span>
          </a>
        </li>
      `);
    });

    return this.list.join("");
  }

  static render() {
    return `
      <ul>
        ${this.getCategories()}
      </ul>
    `;
  }
}
