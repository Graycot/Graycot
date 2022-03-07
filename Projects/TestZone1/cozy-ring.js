import { sitesMod } from "/Projects/TestZone1/sites.js";
const sites = sitesMod();

const styles = `
#CozyRingWrapper {
  display: inline-block;
  color: #e1e1e1;
  border: 1px solid #e1e1e1;
  padding: 0.1rem 0.3rem;
  border-radius: 5px;
}
`
const styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

let tag = document.getElementById('CozyRing');
let thisSite = window.location.href;
let thisIndex;
let i;
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) {
    thisIndex = i;
    break;
  }
}

if (thisIndex == null) {
  tag.insertAdjacentHTML('afterbegin', `
    <div id="CozyRingWrapper"><p>Not yet a member of Cozy Ring.</p></div>
  `);
}
else {
  let previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
  let nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

  tag.insertAdjacentHTML('afterbegin', ` 
    <div id="CozyRingWrapper">
      <a href='${sites[previousIndex]}'> < </a>
      <a href="https://graystea.neocities.org">Cozy Ring</a>
      <a href='${sites[nextIndex]}'> > </a>
    </div>
  `);
}


