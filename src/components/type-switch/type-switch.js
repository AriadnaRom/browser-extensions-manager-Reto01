import { LitElement, html, css, unsafeCSS } from "lit";

import styles from "./type-switch.scss?inline";

export class TypeSwitch extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static properties = {
    Typechecked: {
      type: Boolean,
      reflect: true,
    },
  };

  constructor() {
    super();
    this.Typechecked = false;
  }

  _handleClick() {
    this.Typechecked = !this.Typechecked;
  }

  _renderSwitch() {
    return html`
      <button
        class="switch"
        type="button"
        aria-checked=${this.Typechecked}
        @click=${this._handleClick}
      >
        <span class="switch__thumb"></span>
      </button>
    `;
  }

  render() {
    return html`${this._renderSwitch()}`;
  }
}

customElements.define("type-switch", TypeSwitch);
