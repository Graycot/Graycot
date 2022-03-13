/* 
O-Ring v1 Copyleft © ALL WRONGS RESERVED © Gray (https://graycot.com/) 2021-2022 unless otherwise noted

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details. (http://www.gnu.org/licenses/)

You may shrink this GNU License notice to a single line, however, THE NOTICE MUST BE KEPT AS PART OF THIS FILE.
*/

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

