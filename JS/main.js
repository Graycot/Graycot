class main extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

<main class="main-element" id="demo"> 
  <div class="grid-container">

  <a href="https://graystea.neocities.org/" target=""><div class="grid-item">Gray's Tea</div></a>
  <a href="../WebRing/index.html" target=""><div class="grid-item">Loop Ring</div></a>
  <a href="../NeonRing/index.html" target=""><div class="grid-item">NeonRing</div></a>
  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>

  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>

  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>

  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>
  <a href="" target=""><div class="grid-item"></div></a>

  </div>
</main>
    `;
  }
}
customElements.define("main-component", main);
