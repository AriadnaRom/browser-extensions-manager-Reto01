import { LitElement, html, css, unsafeCSS } from "lit";

import styles from "./type-switch.scss?inline";

export class TypeSwitch extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;
/*todos usan camelcase-propiedades de componentes*/
  static properties = {
    typeChecked: {
      type: Boolean,
      attribute: "type-checked",
      reflect: true,
    },
  };

  constructor() {
    super();
    this.typeChecked = false;// es booleano ojito , lo cual es inactivo false
  } //typechecked es el togle o switch ques e mueve como on off

  _handleClick() {
    this.typeChecked = !this.typeChecked;//true encendido
    this.dispatchEvent(
      new CustomEvent("type-switch-change", {//etail del evento 
        detail: this.typeChecked,
        bubbles: true,
        composed: true,
      }),
    );
  }
//se muestra el togle o el switch
  _renderSwitch() {
    return html`
      <button
        class="switch"
        type="button"
        aria-pressed=${this.typeChecked}
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
