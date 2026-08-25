import { LitElement, html, css, unsafeCSS } from "lit";
import styles from "./header-info.scss?inline";
import "../../../components/type-text/type-text.js";
import "../../../components/type-button/type-button.js";
//import "../../../components/logo/App-logo.js"
import "../../../components/type-icon/type-icon.js";
import logo from "../../../assets/images/logo.svg";

export class TypeHeader extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;
  static properties = {
    titleHeader: { 
      type: String ,
      attribute:"title-header"
    },
    alignHeader: { 
      type: String,
      attribute:"align-header"


    },
  };

  constructor() {
    super();
    this.titleHeader = "";
    this.alignHeader = "";
  }

  _renderContent() {
    return html`
      <header class="header">
        <div class="header__brand">
          <div class="logo">
            <type-icon .src=${logo}></type-icon>
          </div>
        </div>

        <type-button text="🌙" size="l" variant="tertiary"> </type-button>
      </header>
    `;
  }

  render() {
    return html`${this._renderContent()}`;
  }
}

customElements.define("type-header", TypeHeader);
