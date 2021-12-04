import Component from "./Component";
import categories from "../categories";

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

    document.body.appendChild(sheet);
  }

  static getCategories() {
    this.list = [];

    categories.forEach((category) => {
      this.list.push(`
        <li>
          <a href="/search?causes=${category.id}" id="${category.id}">
            <img src="./src/images/${category.icon}">
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
