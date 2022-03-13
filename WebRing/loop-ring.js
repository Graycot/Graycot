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

