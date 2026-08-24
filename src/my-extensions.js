import { LitElement, html } from "lit";
import "./compositions/app-header/HeaderInfo/header-info.js";
import "./components/type-text/type-text.js";
import "./components/type-button/type-button.js";
import "./compositions/extentions-card/extension-card.js";
import "./compositions/extentions-list/extension-list.js";
import "./compositions/extentions-list/sectionHeader/section-header.js";
import"./components/type-switch/type-switch.js"
import { es } from "./locales/locale_es.js";


export class Extensions extends LitElement {
  _renderContent() {
    return html`
      <type-header> </type-header> 

      <section-header title="${es.extensionsList}"></section-header>

      <extension-list></extension-list>
    `;
  }

  render() {
    return html` ${this._renderContent()} `;
  }
}

customElements.define("my-extensions", Extensions);
