
import { LitElement, css, unsafeCSS } from "lit";
import styles from "./theme-toggle.scss?inline";



export class extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;
render (){

return html`
  <div class="theme-toggle">
    <input type="checkbox" id="theme-toggle-checkbox" />
    <label for="theme-toggle-checkbox" class="theme-toggle-label">
      <span class="theme-toggle-icon">🌙</span>
      <span class="theme-toggle-icon">☀️</span>
    </label>
  </div>
`;

}



}

customElements.define("theme-toggle", ThemeToggle);