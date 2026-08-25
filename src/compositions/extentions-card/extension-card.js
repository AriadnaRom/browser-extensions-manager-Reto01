import { LitElement, html, css, unsafeCSS } from "lit";
import styles from "./extension-card.scss?inline";
import "../../components/type-text/type-text.js";
import "../../components/type-button/type-button.js";
import "../../components/type-icon/type-icon.js";
import "../../components/type-switch/type-switch.js";
//funcionalidad completa de todo  de cada card ,puesto eso  es lo que es la
//la estrucuta de los card
export class ExtensionCard extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static properties = {
    titleName: {
      type: String,
      attribute: "title-name",
    },

    description: {
      type: String,
      attribute: "description",
    },

    icon: {
      type: String,
      attribute: "icon",
    },

    isActive: {
      type: Boolean,
      attribute: "is-active",
    },
  };
  //lo que conteine el card
  constructor() {
    super();
    this.titleName = "";
    this.description = "";
    this.icon = "";
    this.isActive = false;
  }

  //hace que se  elimine la card
  _handleRemove() {
    this.dispatchEvent(
      new CustomEvent("remove-extension", {
        detail: this.titleName,
        bubbles: true,
        composed: true,
      }),
    );
  }
  // hace que se valide que el switch sea activo o inactivo dentro del card
  _handleToggle(event) {
    this.isActive = Boolean(event.detail);
    this.dispatchEvent(
      new CustomEvent("extension-card-toggle-extension", {
        detail: {
          titleName: this.titleName,
          isActive: this.isActive,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }
  _renderContent() {
    return html`
      <div class="card">
        <div class="extension-content">
          <div class="extension-icon">
            <type-icon .src=${this.icon}></type-icon>
          </div>

          <div class="extension-info">
            <type-text
              size="l"
              weight="semibold"
              .text=${this.titleName}
            ></type-text>
            <type-text
              size="m"
              weight="medium"
              .text=${this.description}
            ></type-text>
          </div>
        </div>

        <div class="extension-actions">
          <type-button
            text="Remove"
            size="m"
            variant="secondary"
            @type-button-click=${this._handleRemove}
          ></type-button>

          <type-switch
            .typeChecked=${this.isActive}
            @type-switch-change=${this._handleToggle}
          ></type-switch>
        </div>
      </div>
    `;
  }

  render() {
    return html`${this._renderContent()}`;
  }
}

customElements.define("extension-card", ExtensionCard);
