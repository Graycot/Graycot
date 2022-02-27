class main extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

   <main class="main-element">Placeholder</main>
    `;
  }
}

customElements.define('main-component', main);