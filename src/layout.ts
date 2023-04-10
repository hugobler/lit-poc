import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import './dropdown.js';

@customElement('screen-layout')
export class Layout extends LitElement {
  override render() {
    return html`
      <div>
        <drop-down optionsArray="d1, d2, d3"></drop-down>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'screen-layout': Layout;
  }
}
