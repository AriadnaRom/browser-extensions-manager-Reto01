import { LitElement, html, css, unsafeCSS } from "lit";
import styles from "./extension-card.scss?inline";
import "../../components/type-text/type-text.js";
import "../../components/type-button/type-button.js";
import "../../components/type-icon/type-icon.js"
import "../../components/type-switch/type-switch.js"
//funcionalidad completa de todo  de cada card ,puesto eso  es lo que es la 
//la estrucuta de los card 
export class ExtensionCard extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static properties = {
    extensionName: { type: String },
    extensionDescription: { type: String },
    extensionLogo:{type:String},
    isActive:{type:Boolean},
  };

  constructor() {
    super();
    this.extensionName = "";
    this.extensionDescription = "";
    this.extensionLogo="";
    this.isActive=false;//es booleano ojo
  }

  _renderContent() {
    return html`
      <div class="card">
        <div class="extension-content">
       <type-icon
          .src=${this.extensionLogo}
         
        ></type-icon>

          <div class="extension-info">
            <type-text
              size="l"
              weight="semibold"
              .text=${this.extensionName}
            ></type-text>

            <type-text
              size="m"
              weight="medium"
              .text=${this.extensionDescription}
            ></type-text>
          </div>
        </div>

        <div class="extension-actions">
          <type-button
            text="Remove"
            size="s"
            variant="primary"
            @button-click=${this._handleRemove}
          ></type-button>

         <type-switch .Typechecked=${this.isActive}>
         </type-switch>
        </div>
      </div>
    `;
  }

  _handleRemove() {
    this.dispatchEvent(
      new CustomEvent(
        "remove-extension",
        {
          bubbles: true,
          composed: true,
        },
      ),
    );
  }

  render() {
    return html`${this._renderContent()}`;
  }
}

customElements.define("extension-card", ExtensionCard);
