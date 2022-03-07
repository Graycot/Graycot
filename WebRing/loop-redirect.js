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

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "action" in eg "https://example.com/?action=some_value"
let value = params.action; // "some_value"
console.log(value);

if (value == 'prev') {
  console.log('prev value');
} else if (value == 'next') {
  console.log('next value');
} else {
  console.log('error value');
}

/*

if (thisIndex == null) {
  window.location.href = 'https://graycot.com/webring/error.html';
}
else{
  let nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;
  window.location.href = sites[nextIndex];
}

*/
