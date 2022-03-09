class main extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

<main class="main-element" id="demo"> 
  <div class="grid-container">

  <a href="../WebRing/index.html" target=""><div class="grid-item">Loop Ring</div></a>
  <a href="/Projects/TestZone1/index.html" target=""><div class="grid-item">JavaScript Testing Zone 1</div></a>
  <a href="/Projects/TestZone2/index.html" target=""><div class="grid-item">JavaScript Testing Zone 2</div></a>
  <a href="/Projects/TestZone3/index.html" target=""><div class="grid-item">JavaScript Testing Zone 3</div></a>
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
customElements.define('main-component', main);

