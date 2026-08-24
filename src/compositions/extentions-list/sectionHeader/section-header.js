import { LitElement, html} from "lit";
import "../../../components/type-text/type-text.js";
import "../../../compositions/extensions-filter/extension-filter.js"

export class SectionHeader extends LitElement {
  static properties = {
    title: { type: String },
    align: { type: String },
  };

  constructor() {
    super();
    this.title = "";
    this.align = "";
  }

  _renderContent() {
    return html`
      <div>
        <type-text
          size="xl"
          weight="bold"
          .text="${this.title}"
          .alignText="${this.align}"
        ></type-text>

<div class =filter> 
  <extension-filter></extension-filter>

</div>
       
  </div>
    `;
  }

  render() {
    return html`${this._renderContent()}`;
  }
}

customElements.define("section-header", SectionHeader);
