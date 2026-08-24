import { LitElement, html } from "lit";
import "../../components/type-button/type-button.js";
import { es } from "../../locales/locale_es.js";

export class ExtensionFilter extends LitElement {
  static properties = {
    selectedFilter: {
      type: String,
    },
  };

  constructor() {
    super();

    this.selectedFilter = "all";
  }

  _renderContent() {
    return html`
      <div class="filter">
        <type-button
          .text=${es.all}
          size="s"
          variant="secondary"
          @button-click=${() => this._handleFilter("all")}
        ></type-button>

        <type-button
          .text=${es.active}
          size="s"
          variant="secondary"
          @button-click=${() => this._handleFilter("active")}
        ></type-button>

        <type-button
          .text=${es.inactive}
          size="s"
          variant="secondary"
          @button-click=${() => this._handleFilter("inactive")}
        ></type-button>
      </div>
    `;
  }
  render() {
    return html`${this._renderContent()}`;
  }

  _handleFilter(filter) {
    this.selectedFilter = filter;
//cuando presiones un boten este  debe lanzar un evento 
 this.dispatchEvent(
    new CustomEvent("filter-change", {
      detail: filter,
      bubbles: true,
      composed: true,
    })
  );

  }
}

customElements.define("extension-filter", ExtensionFilter);
