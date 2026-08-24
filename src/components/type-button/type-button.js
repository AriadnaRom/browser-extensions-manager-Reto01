import { LitElement, html, css, unsafeCSS } from "lit";
import styles from "./type-button.scss?inline";

export class TypeButton extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;
  static properties = {
    text: { type: String },
    size: { type: String },
    variant: { type: String },
  };

  constructor() {
    super();
    this.text = "";
    this.size = "";
    this.variant = "primary";
  }
  //los booleanos  su sola presencia es true
_handleClick() {
    this.dispatchEvent(
      new CustomEvent("button-click", {
        bubbles: true,
        composed: true,
      })
    );
  }
  _renderContent() {
    const className = `
    ${this.size} 
    ${this.variant}`;

    return html` 
    <button 
    class=${className}
     @click=${this._handleClick}
    >
    ${this.text}
    
    </button> `;
  }

  render() {
    return html` ${this._renderContent()} `;
  }
}

customElements.define("type-button", TypeButton);
