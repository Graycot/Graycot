class footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

   <footer class="footer-element">Want more? Check out my other site, GraysTea</footer>
    `;
  }
}

customElements.define('footer-component', footer);