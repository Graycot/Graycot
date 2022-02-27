class footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

   <footer class="footer-element">Want more? Check out my other site, <a href="https://graystea.neocities.org/">Grays Tea</a> </footer>
    `;
  }
}

customElements.define('footer-component', footer);