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
  static properties = {
    isDark: { type: Boolean },
  };

  constructor() {
    super();
    this.isDark = false;
  }

 _handleThemeChange(event) {
  this.isDark = event.detail; // toma el valor que mandó el hijo
   document.documentElement.setAttribute("data-theme", this.isDark ? "dark" : "light");
}

  _handleFilterChange(event) {
    const extensionList = this.shadowRoot?.querySelector("extension-list");

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
        <type-header
          .isDark=${this.isDark}
          @theme-change=${this._handleThemeChange}
        ></type-header>

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
