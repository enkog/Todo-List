(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  font-size: 20px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background: #e5e7e9;\r\n  color: rgb(119, 113, 113);\r\n}\r\n\r\ni {\r\n  font-size: 15px;\r\n  color: rgb(119, 113, 113);\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.container {\r\n  background: #fff;\r\n  border: 1px solid #ccc;\r\n  width: 500px;\r\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.todo-header,\r\n.add-todo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #ccc;\r\n  padding: 15px;\r\n  color: #222;\r\n}\r\n\r\n.todo-footer {\r\n  text-align: center;\r\n  background: #e5e7e9;\r\n  padding: 15px;\r\n}\r\n\r\n.add-todo-input {\r\n  border: none;\r\n  outline: none;\r\n  border-color: transparent;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n}\r\n\r\n.list-item {\r\n  padding: 15px;\r\n}\r\n\r\n.list-item:not(:last-child) {\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.list-item label {\r\n  padding-left: 15px;\r\n  color: #222;\r\n}\r\n\r\n.fa-ellipsis-v {\r\n  float: right;\r\n}\r\n\r\n.draggable {\r\n  padding: 1rem;\r\n  background-color: white;\r\n  cursor: move;\r\n}\r\n\r\n.draggable.dragging {\r\n  opacity: .5;\r\n}",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],s=r.base?c[0]+r.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(n[p].references++,n[p].updater(f)):n.push({identifier:u,updater:o(f,r),references:1}),i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);n[d].references--}for(var c=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),d=t(565),c=t.n(d),s=t(216),l=t.n(s),u=t(589),p=t.n(u),f=t(426),g={};function m(e){const{li:n,arr:t,actions:r}=e,o=t.find((e=>e.description===n.textContent));o.completed=!o.completed,r.updateOne(o)}g.styleTagTransform=p(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),n()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const h=[{description:"Go to the mall",completed:!1,index:1},{description:"Do the laundry",completed:!1,index:2},{description:"Complete todo list project",completed:!1,index:3}];function v(e,n){const t=document.querySelector(".task-list"),r=document.createElement("ul");r.className="task-ul",t.appendChild(r),e.forEach((t=>{const o=document.createElement("li");o.className="list-item draggable",o.setAttribute("draggable","true");const a=document.createElement("input");a.setAttribute("type","checkbox"),a.checked=t.completed;const i={li:o,arr:e,actions:n};a.addEventListener("click",m.bind(null,i));const d=document.createElement("label"),c=document.createElement("i");c.className="fas fa-ellipsis-v",d.appendChild(document.createTextNode(t.description)),o.appendChild(a),o.appendChild(d),o.appendChild(c),r.appendChild(o)})),function(e,n){const t=document.querySelector(".task-ul");t.querySelectorAll(".draggable").forEach((e=>{e.addEventListener("dragstart",(()=>{e.classList.add("dragging")})),e.addEventListener("dragend",(()=>{e.classList.remove("dragging")}))})),t.addEventListener("dragover",(r=>{r.preventDefault();const o=(a=t,i=r.clientY,[...a.querySelectorAll(".draggable:not(dragging)")].reduce(((e,n)=>{const t=n.getBoundingClientRect(),r=i-t.top-t.height/2;return r<0&&r>e.offset?{offset:r,element:n}:e}),{offset:Number.NEGATIVE_INFINITY}).element);var a,i;const d=document.querySelector(".dragging");null==o?t.appendChild(d):t.insertBefore(d,o),(()=>{const r=t.querySelectorAll(".draggable");e.forEach((e=>{e.index=((e,n)=>{let t;for(let r=0;r<n.length;r++)if(n[r].textContent===e){t=r;break}return t+1})(e.description,r)})),n.updateAll(e)})(),(e=>{e.sort(((e,n)=>e.index-n.index))})(e)}))}(e,n)}const b=new class{constructor(){this.localStorage=localStorage}add(e){this.localStorage.setItem("Todos",JSON.stringify(e))}remove(e,n){const t=e.filter(((e,t)=>t!==n));this.localStorage.setItem("Todos",JSON.stringify(t))}updateOne(e){const n=this.get(),t=n.findIndex((n=>n.description===e.description));n.splice(t,1,e),this.add(n)}updateAll(e){this.localStorage.removeItem("Todos"),this.add(e)}get(){let e=JSON.parse(this.localStorage.getItem("Todos"));return null===e&&(e=[]),e}},x=b.get();0===x.length?(b.add(h),v(h,b)):v(x,b)})()})();