import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('drop-down')
export class Dropdown extends LitElement {
  @property({
    converter: (attrValue: string | null) => {
      if (attrValue) return attrValue.replace(' ', '').split(',');
      else return undefined;
    },
  })
  optionsArray?: string[];

  override render() {
    console.log(this.optionsArray);

    return html`
      <select>
        ${this.optionsArray &&
        this.optionsArray.map((o) => html`<option>${o}</option>`)}
      </select>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'drop-down': Dropdown;
  }
}
