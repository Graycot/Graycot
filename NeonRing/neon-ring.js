const styles = `

.neon-ring{

  box-shadow:
  0 0 0.1rem  0.1rem #fff7f7,   
  0 0 0.4rem  0.2rem #c4bdbd, 
  0 0   4rem  0.2rem #4e4d4d,

  inset 0 0 1.5rem  0.1rem #4e4d4d,
  inset 0 0 0.4rem  0.05rem #c4bdbd,
  inset 0 0 0.5rem  0.05rem #fff7f7;
    
  border-radius: 0.5rem;

  width:max-content;
  height:max-content;
  display: block;
  margin: 10px auto;

}
.neon-ring:hover, .neon-ring:focus { box-shadow: none;  }

  .neon-ring a {
  font: 500 1rem "Poppins"; color: #f5f5f5;

  border: 1px solid #b3b6b3;
  border-radius: 0.5rem;
  margin: 5px;
  padding: 5px 10px;
  display: inline;
  white-space: nowrap ;
  line-height: 3rem;

  box-shadow:
  0 0 0.1rem  0.1rem #fff7f7,   
  0 0 0.4rem  0.2rem #c4bdbd, 
  0 0   4rem  0.2rem #4e4d4d,

  inset 0 0 1.5rem  0.1rem #4e4d4d,
  inset 0 0 0.4rem  0.05rem #c4bdbd,
  inset 0 0 0.5rem  0.05rem #fff7f7;

  margin: auto;
  line-height: unset;
  box-shadow: none;
  border-radius: 0.0rem;
  display: flex;
  justify-content: center;
  
}
.neon-ring a:hover, .neon-ring a:focus {  
  color: #777777;
  box-shadow:
  0 0 1px  1px #fff7f7,   
  0 0 4px  2px #c4bdbd, 
  0 0 40px 2px #4e4d4d,

  inset 0 0 1px  0.1rem #4e4d4d,
  inset 0 0 2px  0.05rem #c4bdbd,
  inset 0 0 2px  0.05rem #fff7f7;
}

.neon-bin{
  display: flex;
}
`
// Applies the CSS above to the HTML page
const styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

// Imports the list of member sites from sites.js:
import { sites } from "./sites.js";

console.log(`sites: ${sites}`);


// Sets thisSite to the address of the site the user is currently on:
let thisSite = window.location.href;

console.log(`thisSite: ${thisSite}`);


// Finds the index of thisSite on the site list
let thisIndex;
let i;
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) {
    thisIndex = i;
    console.log(`i: ${i}`);
    break;
  }
}
console.log(`sites.length: ${sites.length}`);
console.log(`ThisIndex: ${thisIndex}`);
console.log(`i (Final): ${i}`);

//Calculate Random site:
let otherSites;
otherSites = sites.slice();
otherSites.splice(thisIndex, 1);
let randomIndex = Math.floor(Math.random() * otherSites.length);

console.log(`otherSites: ${otherSites}`);

//Calculate Previous and Next sites
let previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
let nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

console.log(`previousIndex: ${previousIndex}`);
console.log(`nextIndex: ${nextIndex}`);
console.log(`previousSite: ${sites[previousIndex]}`);
console.log(`nextSite: ${sites[nextIndex]}`);


// If the site that the user is currently on is not part of the web ring, set the Previous and Next links to be Random.
if (thisIndex == null) {
  previousIndex = randomIndex;
  nextIndex = randomIndex;
}


// Insert HTML next to id="LoopRing":
let tag = document.getElementById('NeonRingJS');
tag.insertAdjacentHTML('afterbegin', ` 
    <div class="neon-ring override">
    <a href="https://graycot.com/neonring/index.html">Neon Ring</a>
    <div class="neon-bin">
      <a href='${sites[previousIndex]}'> < </a>
      <a href="https://graycot.com/neonring/index.html#list"> ... </a>
      <a href='${sites[randomIndex]}'> ? </a>
      <a href='${sites[nextIndex]}'> > </a>
    </div>
  </div>
  </div>






`);