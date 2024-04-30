class CodeDisplay extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: block;
          border: 0.1rem solid #ccc;
          padding: 1rem;
          margin: 1rem 0;
          border-radius: 0.5rem;
        }
  
      </style>
      <slot name="code"></slot>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('code-display', CodeDisplay);
