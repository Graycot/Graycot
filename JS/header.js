class header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

   <header class="header-element">Hi, I'm Graycot</header>
    `;
  }
}

customElements.define('header-component', header);