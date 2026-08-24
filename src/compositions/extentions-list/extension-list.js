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
    extensionsdev: { type: Array },
  };
  constructor() {
    super();
    this.extensionsdev = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadExtensions();
  }

  async _loadExtensions() {
    this.extensionsdev = await getExtensions();
  }
//.extensionLogo  propiedad de la card y extension.logo es  , extension  es dato del JSon
  _renderContent() {
    return html`
      <div class="container-list">
        ${repeat(
          this.extensionsdev,
          (extension) => extension.name,
          (extension) =>
           html`
            <extension-card
              .extensionLogo=${extension.logo}
              .extensionName=${extension.name}
              .extensionDescription=${extension.description}
              .isActive=${extension.isActive}
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
