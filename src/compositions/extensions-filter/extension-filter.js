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
_getFilterVariant(filterOption) {
  return this.selectedFilter === filterOption
    ? "primary"
    : "secondary";
}

  _handleFilter(filter) {
    this.selectedFilter = filter;
    this.dispatchEvent(
    new CustomEvent("extension-filter-change", {
      detail: filter,
      bubbles: true,
      composed: true,
    })
  );
//cuando presiones un boten este  debe lanzar un evento 
  }

  _renderContent() {
    return html`
      <div class="filter">
        <type-button
          .text=${es.all}
          size="l"
          variant=${this._getFilterVariant("all")}
          @type-button-click=${() => this._handleFilter("all")}
        ></type-button>

        <type-button
          .text=${es.active}
          size="l"
          variant=${this._getFilterVariant("active")}
          @type-button-click=${() => this._handleFilter("active")}
        ></type-button>

        <type-button
          .text=${es.inactive}
          size="l"
          variant=${this._getFilterVariant("inactive")}
          @type-button-click=${() => this._handleFilter("inactive")}
        ></type-button>

         <type-button
          .text=${es.remove}
          size="l"
          variant=${this._getFilterVariant("remove")}
          @type-button-click=${() => this._handleFilter("remove")}
        ></type-button>
      </div>
    `;
  }
  render() {
    return html`${this._renderContent()}`;
  }

  
}

customElements.define("extension-filter", ExtensionFilter);
