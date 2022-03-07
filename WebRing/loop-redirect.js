import { sites } from "./sites.js";

let thisSite = document.referrer;
console.log(thisSite);


let thisIndex;
let i;
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) {
    thisIndex = i;
    break;
  }
}

if (thisIndex == null) {
  window.location.href = 'https://graycot.com/webring/error.html';
}
else{
  let nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;
  window.location.href = sites[nextIndex];
}