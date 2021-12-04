import Categories from "./Categories";
import Component from "./Component";

export default class extends Component {
  static render() {
    Categories.generateStyleSheet();
    
    return `
      ${Categories.render()}
    `;
  }
}
