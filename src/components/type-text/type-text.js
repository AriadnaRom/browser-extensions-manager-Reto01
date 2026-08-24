import { LitElement, html, css, unsafeCSS } from "lit";
import styles from "./type-text.scss?inline";

export class TypeText extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static properties = {
    text: { type: String },
    size: { type: String },
    alignText: { type: String },
    weight: { type: String },
  };

  constructor() {
    super();

    this.text = "";
    this.size = "";
    this.alignText = "";
    this.weight = "";
  }

  _renderContent() {
    const className = [
      this.size,
       this.alignText, 
      `weight-${this.weight}`]
      .join( " ",
    );

    return html` 
    <p class=${className}>
    ${this.text}
    </p> `;
  }

  render() {
    return html`${this._renderContent()}`;
  }
}

customElements.define("type-text", TypeText);
