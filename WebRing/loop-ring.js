const sites = `./sites.js`;

const styles = `
#LoopRingWrapper {
  display: inline-block;
  color: #e1e1e1;
  border: 1px solid #e1e1e1;
  padding: 0.1rem 0.4rem;
  border-radius: 50px;
}
#LoopRingWrapper a:hover {
  color: #b4b4b4;
}
`
const styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

let tag = document.getElementById('LoopRing');
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
    <div id="LoopRingWrapper" class="OverRide"><p>Not yet in the loop!</p></div>
  `);
}
else {
  let previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
  let nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

  tag.insertAdjacentHTML('afterbegin', ` 
    <div id="LoopRingWrapper" class="OverRide">
      <a href='${sites[previousIndex]}'> < </a>
      <a href="https://graycot.com/webring/index.html">Loop Ring</a>
      <a href='${sites[nextIndex]}'> > </a>
    </div>
  `);
}

