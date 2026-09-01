import { LitElement, html, css, unsafeCSS } from "lit";
import styles from "./extension-list.scss?inline";
import { repeat } from "lit/directives/repeat.js";
import "../extentions-card/extension-card.js";
import { getExtensions } from "../../service/extension-service.js";

export class ExtensionList extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static properties = {
    extensions: { type: Array },
    selectedFilter: {
      type: String,
      attribute: "selected-filter",
    },
  };

  constructor() {
    super();
    this.extensions = [];
    this.selectedFilter = "all";
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadExtensions();
  }

  async _loadExtensions() {
    this.extensions = await getExtensions();
  }
//se guarda el boton  de parte de extneison filter
  setFilter(filter) {
    this.selectedFilter = filter;
  }

 get filteredExtensions() {
  switch (this.selectedFilter) {
    case "active":
      return this.extensions.filter((extension) => extension.isActive);
    case "inactive":
      return this.extensions.filter((extension) => !extension.isActive);
    default:
      return this.extensions;
  }
}

  _handleToggleExtension(event) {
    const { titleName, isActive } = event.detail; //destructuring  osea saca las propeidas del objeto y los asigna a uno
    //se ahorra codigo
//neuvo array map y llamalo extension 
    this.extensions = this.extensions.map((extension) =>
      extension.name === titleName ? 
    { ...extension, isActive } 
    : extension,
    );
  }

  _handleRemoveExtension(event) {
    const titleName = event.detail;
    this.extensions = this.extensions.filter(
      (extension) => extension.name !== titleName,
    );
  }

  _renderContent() {
    return html`
      <div class="container-list">
        ${repeat(
          this.filteredExtensions,
          (extension) => extension.name,
          (extension) => html`
            <extension-card
              .icon=${extension.logo}
              .titleName=${extension.name}
              .description=${extension.description}
              .isActive=${extension.isActive}
              @extension-card-toggle-extension=${this._handleToggleExtension}
              @extension-card-remove-extension=${this._handleRemoveExtension}
            ></extension-card>
          `,
        )}
      </div>
    `;
  }

  render() {
    return html` ${this._renderContent()} `;
  }
}
customElements.define("extension-list", ExtensionList);
