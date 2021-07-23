(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  font-size: 20px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background: #e5e7e9;\r\n  color: rgb(119, 113, 113);\r\n}\r\n\r\ni {\r\n  font-size: 15px;\r\n  color: rgb(119, 113, 113);\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.container {\r\n  background: #fff;\r\n  border: 1px solid #ccc;\r\n  width: 500px;\r\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.todo-header,\r\n.add-todo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #ccc;\r\n  padding: 15px;\r\n  color: #222;\r\n}\r\n\r\n.todo-footer {\r\n  text-align: center;\r\n  background: #e5e7e9;\r\n  padding: 15px;\r\n}\r\n\r\n.add-todo-input {\r\n  border: none;\r\n  outline: none;\r\n  border-color: transparent;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n}\r\n\r\n.list-item {\r\n  padding: 15px;\r\n}\r\n\r\n.list-item:not(:last-child) {\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.list-item label {\r\n  padding-left: 15px;\r\n  color: #222;\r\n}\r\n\r\n.fa-ellipsis-v,\r\n.fa-trash-alt {\r\n  float: right;\r\n}\r\n\r\n.draggable {\r\n  padding: 1rem;\r\n  background-color: white;\r\n  cursor: move;\r\n}\r\n\r\n.draggable.dragging {\r\n  opacity: 0.5;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=n(u),f={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:u,updater:o(f,r),references:1}),i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=r(e,o),c=0;c<a.length;c++){var l=n(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),d=n.n(s),c=n(216),l=n.n(c),u=n(589),p=n.n(u),f=n(426),g={};function m(e){const{li:t,arr:n,actions:r}=e,o=n.find((e=>e.description===t.textContent));o.completed=!o.completed,r.updateOne(o)}g.styleTagTransform=p(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;class h{constructor(e,t){this.description=e,this.completed=!1,this.index=t}}const v=new class{constructor(){this.localStorage=localStorage}add(e){this.localStorage.setItem("Todos",JSON.stringify(e))}remove(e,t){const n=e.filter(((e,n)=>n!==t));this.localStorage.setItem("Todos",JSON.stringify(n))}updateOne(e){const t=this.get(),n=t.findIndex((t=>t.description===e.description));t.splice(n,1,e),this.add(t)}updateAll(e){this.localStorage.removeItem("Todos"),this.add(e)}get(){let e=JSON.parse(this.localStorage.getItem("Todos"));return null===e&&(e=[]),e}},b=new class{constructor(e){this.actions=e}getTasks(){return this.actions.get()}addTask(e){const t=this.getTasks();t.push(e),this.actions.add(t)}editTaskDesc(e,t){const n=this.getTasks();n[t].description=e,this.actions.updateAll(n)}deleteTask(e){const t=this.getTasks();t.splice(e,1);for(let e=0;e<t.length;e++)t[e].index=e+1;this.actions.updateAll(t)}}(v),x=v.get(),y=e=>{const{li:t,labelMenu:n,deleteIcon:r,label:o}=e;n.classList.add("hidden"),r.classList.remove("hidden");const a=t.textContent,i=document.createElement("input");i.type="text",i.className="edit-todo-input",i.value=a,i.addEventListener("keyup",(e=>{if("Enter"===e.key){e.preventDefault();const t=x.findIndex((e=>e.description===a));b.editTaskDesc(i.value,t),window.location.reload()}})),t.removeChild(o),t.appendChild(i)},k=e=>{const t=e.querySelector(".edit-todo-input").value,n=x.findIndex((e=>e.description===t));b.deleteTask(n),window.location.reload()};!function(e,t){const n=document.querySelector(".task-list"),r=document.createElement("ul");r.className="task-ul",n.appendChild(r),e.forEach((n=>{const o=document.createElement("li");o.className="list-item draggable",o.setAttribute("draggable","true");const a=document.createElement("input");a.setAttribute("type","checkbox"),a.checked=n.completed;const i=document.createElement("label"),s=document.createElement("i");s.className="fas fa-ellipsis-v";const d=document.createElement("i");d.className="far fa-trash-alt hidden";const c={li:o,arr:e,actions:t};a.addEventListener("click",m.bind(null,c)),s.addEventListener("click",y.bind(null,{li:o,labelMenu:s,deleteIcon:d,label:i})),d.addEventListener("click",k.bind(null,o)),i.appendChild(document.createTextNode(n.description)),o.appendChild(a),o.appendChild(i),o.appendChild(s),o.appendChild(d),r.appendChild(o)})),function(e,t){const n=document.querySelector(".task-ul");n.querySelectorAll(".draggable").forEach((e=>{e.addEventListener("dragstart",(()=>{e.classList.add("dragging")})),e.addEventListener("dragend",(()=>{e.classList.remove("dragging")}))})),n.addEventListener("dragover",(r=>{r.preventDefault();const o=(a=n,i=r.clientY,[...a.querySelectorAll(".draggable:not(dragging)")].reduce(((e,t)=>{const n=t.getBoundingClientRect(),r=i-n.top-n.height/2;return r<0&&r>e.offset?{offset:r,element:t}:e}),{offset:Number.NEGATIVE_INFINITY}).element);var a,i;const s=document.querySelector(".dragging");null==o?n.appendChild(s):n.insertBefore(s,o),(()=>{const r=n.querySelectorAll(".draggable");e.forEach((e=>{e.index=((e,t)=>{let n;for(let r=0;r<t.length;r++)if(t[r].textContent===e){n=r;break}return n+1})(e.description,r)})),t.updateAll(e)})(),(e=>{e.sort(((e,t)=>e.index-t.index))})(e)}))}(e,t)}(x,v);const E=document.querySelector(".fa-level-down-alt"),T=document.querySelector(".add-todo-input");E.addEventListener("click",(()=>{const e=T.value,t=x.length+1,n=new h(e,t);e.length>0&&(b.addTask(n,v),window.location.reload())})),T.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),E.click())}))})()})();