/* O-Ring v1 Copyleft © ALL WRONGS RESERVED © Gray (https://graycot.com/) 2021-2022 unless otherwise noted.

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details. (http://www.gnu.org/licenses/)

You may shrink this GNU License notice to a single line, however, THE NOTICE MUST BE KEPT AS PART OF THIS FILE.*/

// Import list of member sites from another file:
import { sites } from "./sites.js";

// Set thisSite to the adress of the site the user was just on:
let thisSite = document.referrer;

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

//Detect whether user clicked the Previous, List, Home, Next, Random, or other link:
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let value = params.action;

// If the site that the user just came from is not part of the webring, set the Previous and Next button to be Random.
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
    window.location.href = 'https://graycot.com/webring/error.html?error=NullValue';
}

