class main extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

   <main class="main-element" id="demo"> 
   
<div class="grid-container">

  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>

  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>

  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>

  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>
  <a href="" target="_blank"><div class="grid-item"></div></a>

  


</div>
   
   
   </main>
    `;
  }
}
customElements.define('main-component', main);

