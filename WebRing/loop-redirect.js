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

let previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
let nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let value = params.action;

if (thisIndex == null) {
  window.location.href = 'https://graycot.com/webring/error.html?error=NullIndex';

} else {

  if (value == 'prev') {
      window.location.href = sites[previousIndex];
  } else if (value == 'next') {
      window.location.href = sites[nextIndex];
  } else if (value == 'home') {
      window.location.href = 'https://graycot.com/webring/index.html';
  } else {
      window.location.href = 'https://graycot.com/webring/error.html?error=NullValue';
  }
}

