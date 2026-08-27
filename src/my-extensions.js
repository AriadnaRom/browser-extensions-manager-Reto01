import { LitElement, html } from "lit";
import "./compositions/app-header/HeaderInfo/header-info.js";
import "./components/type-text/type-text.js";
import "./components/type-button/type-button.js";
import "./compositions/extentions-card/extension-card.js";
import "./compositions/extentions-list/extension-list.js";
import "./compositions/extentions-list/sectionHeader/section-header.js";
import "./components/type-switch/type-switch.js";
import { es } from "./locales/locale_es.js";

export class Extensions extends LitElement {

  _handleFilterChange(event) {
    const extensionList = 
    this.shadowRoot?.querySelector("extension-list");

    //dices dentro del componente (this) , bsucame  el eleemto extension-lsit
    //y guardo en la variable extensionList

    if (extensionList) {
      extensionList.setFilter(event.detail);

      //Al componente <extension-list>, ejecútale su método setFilter()
    }
  }

  _renderContent() {
    return html`
      <main class="app-container">
        <type-header> </type-header>

        <section class="extensions-section">
          <section-header
            title="${es.extensionsList}"
            @section-header-filter-change=${this._handleFilterChange}
          ></section-header>
          <extension-list></extension-list>
        </section>
      </main>
    `;
  }

  render() {
    return html` ${this._renderContent()} `;
  }
}

customElements.define("my-extensions", Extensions);
