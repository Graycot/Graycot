import { sites } from "./sites.js"; 

let thisSite = document.referrer;

let thisIndex;

let i;
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) {
    thisIndex = i;
    break;
  }
}

// Calculates a Random site:
let otherSites;
otherSites = sites.slice();
otherSites.splice(thisIndex, 1);
let randomIndex = Math.floor(Math.random() * otherSites.length);

// Calculates Previous and Next sites
let previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
let nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

// Detects whether user clicked the Previous, List, Home, Next, Random, or other link:
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let value = params.action;

// If the site that the user just came from is not part of the webring, this sets the Previous and Next button to Random.
if (thisIndex == null) {
  previousIndex = randomIndex;
  nextIndex = randomIndex;
} 

// Previous, List, Home, Next, Random, or other actions
if (value == 'prev') {
    window.location.href = sites[previousIndex];
} else if (value == 'next') {
    window.location.href = sites[nextIndex];
} else if (value == 'list') {
    window.location.href = 'https://graycot.com/webring/index.html#list';
} else if (value == 'home') {
    window.location.href = 'https://graycot.com/webring/index.html'; 
} else if (value == 'rand') {
    window.location.href = sites[randomIndex];;
} else {
    window.location.href = sites[randomIndex];; //In-case of value == null
}


