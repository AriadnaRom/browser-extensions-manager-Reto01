import { LitElement, html, css, unsafeCSS } from "lit";
import styles from "./header-info.scss?inline";
import "@/components/type-text/type-text.js";
import "@/components/type-button/type-button.js";
import "@/components/type-icon/type-icon.js";
const publicAsset = (fileName) =>`${import.meta.env.BASE_URL}assets/images/${fileName}`;

const logo = publicAsset("logo.svg");
const iconSun = publicAsset("icon-sun.svg");
const iconMoon = publicAsset("icon-moon.svg");

export class TypeHeader extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static properties = {
    isDark: { type: Boolean },
  };

  constructor() {
    super();
   this.isDark = false; // valor inicial
  }

  _toggleTheme() {
    this.dispatchEvent(
      new CustomEvent("header-info-theme-change", {
        detail: !this.isDark,
        bubbles: true,
        composed: true,
      }),
    );
  }
  _renderContent() {
    return html`
      <header class="header">
        <div class="header__brand">
          <div class="logo">
            <type-icon .src=${logo}></type-icon>
          </div>
        </div>
        <type-button
          class="theme-toggle"
          variant="tertiary"
          @type-button-click=${this._toggleTheme}
        >
          <type-icon .src=${this.isDark ? iconSun : iconMoon}></type-icon>
        </type-button>
      </header>
    `;
  }

  render() {
    return html`${this._renderContent()}`;
  }
}

customElements.define("type-header", TypeHeader);
