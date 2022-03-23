const styles = `

.neon-ring * {
  margin:           unset;
  box-sizing:       border-box;
  padding:          unset;
  color:            unset;
  text-decoration:  unset;
}
.neon-ring{
  background-color: #252525;
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
  display: inline-block;
  margin: 10px;

}
.neon-ring:hover, .neon-ring:focus { box-shadow: none;  }

.neon-ring a {
  font: 700 1.7rem "Poppins"; color: #f5f5f5;
  font-family: sans-serif;
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
  padding: auto;
  line-height: unset;
  box-shadow: none;
  border-radius: 0.0rem;
  display: flex;
  justify-content: center;
  width: 100%;
}
.neon-ring a:hover, .neon-ring a:focus {  
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

// Sets thisSite to the adress of the site the user is currently on:
let thisSite = window.location.href;
// Finds the index of thisSite on the site list
let thisIndex;
let i;
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) {
    thisIndex = i;
    break;
  }
}

//Calculate Random site:
let otherSites;
otherSites = sites.slice();
otherSites.splice(thisIndex, 1);
let randomIndex = Math.floor(Math.random() * otherSites.length);

//Calculate Previous and Next sites
let previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
let nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

// If the site that the user is currently on is not part of the webring, set the Previous and Next links to be Random.
if (thisIndex == null) {
  previousIndex = randomIndex;
  nextIndex = randomIndex;
}

// Insert HTML next to id="LoopRing":
let tag = document.getElementById('NeonRingJS');
tag.insertAdjacentHTML('afterbegin', ` 
    <div class="neon-ring">
    <a href="./index.html">Neon Ring</a>
    <div class="neon-bin">
      <a href='${sites[previousIndex]}'> < </a>
      <a href="./index.html#list"> ... </a>
      <a href='${sites[randomIndex]}'> ? </a>
      <a href='${sites[nextIndex]}'> > </a>
    </div>
  </div>
  </div>






`);