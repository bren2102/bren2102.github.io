!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=5)}([function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var i=(a=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),r=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[o].concat(r).concat([i]).join("\n")}var a,c,l;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&i[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),t.push(l))}},t}},function(e,t,o){"use strict";t.a=o.p+"bb3805340b329b7da41b318dd696e4bf.svg"},function(e,t,o){"use strict";t.a=o.p+"e170950d741461ccf60a0cc8643b87af.svg"},function(e,t,o){"use strict";t.a=o.p+"0a96fe724bfccc4fb37eac1d2247d8f9.svg"},function(e,t,o){"use strict";o.r(t);o(6);document.querySelectorAll(".collapsible").forEach(e=>{e.addEventListener("click",()=>{const t=e.nextElementSibling;e.classList.toggle("collapsible--active"),e.classList.contains("collapsible--active")?(t.style.maxHeight=t.scrollHeight+"px",e.style.borderBottom="none",e.lastElementChild.style.transform="rotate(90deg)"):(t.style.maxHeight=0,e.lastElementChild.style.transform="rotate(0)",e.style.borderBottom="1px solid #DFE1E6")})}),document.querySelectorAll(".displayMenu").forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("menu--active"),e.classList.contains("menu--active")?(document.querySelector(".menuDisplayed").style.maxHeight="100%",document.querySelector(".displayMenu").style.position="unset"):console.log("no")})}),document.querySelectorAll(".closeMenu").forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("displayed--active"),e.classList.contains("displayed--active")?(document.querySelector(".menuDisplayed").style.maxHeight=0,document.querySelector(".displayMenu").style.position="sticky"):console.log("no")})})},function(e,t,o){var n=o(7),i=o(8);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};n(i,r);e.exports=i.locals||{}},function(e,t,o){"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),a=[];function c(e){for(var t=-1,o=0;o<a.length;o++)if(a[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},n=[],i=0;i<e.length;i++){var r=e[i],l=t.base?r[0]+t.base:r[0],d=o[l]||0,s="".concat(l," ").concat(d);o[l]=d+1;var f=c(s),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:s,updater:h(p,t),references:1}),n.push(s)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=o.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,o,n){var i=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=f(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function u(e,t,o){var n=o.css,i=o.media,r=o.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var g=null,x=0;function h(e,t){var o,n,i;if(t.singleton){var r=x++;o=g||(g=d(t)),n=p.bind(null,o,r,!1),i=p.bind(null,o,r,!0)}else o=d(t),n=u.bind(null,o,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var i=c(o[n]);a[i].references--}for(var r=l(e,t),d=0;d<o.length;d++){var s=c(o[d]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}o=r}}}},function(e,t,o){"use strict";o.r(t);var n=o(1),i=o.n(n),r=o(0),a=o.n(r),c=o(2),l=o(3),d=o(4),s=i()(!1),f=a()(c.a),p=a()(l.a),u=a()(d.a);s.push([e.i,'*{margin:0;padding:0;font-family:"Poppins",sans-serif}a{text-decoration:none;color:#6070ff}a:hover{text-decoration:none;color:#fff}header{background-color:#fff;border-bottom-left-radius:100px;font-family:"Raleway",sans-serif}button,a{cursor:pointer}.menuDisplayed,.displayMenu{overflow:hidden;max-height:0}nav{display:flex;justify-content:space-between;padding:30px 50px;position:sticky;top:0;z-index:100;background-color:#fff}nav div{color:#6070ff;font-weight:bold;font-size:18px}nav ul{color:#344563;list-style:none;display:flex;font-size:15px;font-weight:normal}nav ul a{margin-left:32px}nav ul a:hover{color:#6070ff}#intro{background:url('+f+");background-size:100%;background-repeat:no-repeat;padding:220px 260px}#intro h1{color:#091e42;line-height:60px;font-size:48px}#intro p{color:#344563;margin:20px 0;line-height:28px}#intro h3{color:#7f8cff;font-weight:lighter;font-size:16px;line-height:24px;margin:14px 0}#intro div{display:flex}#intro div>*{margin-right:20px}.main{background-color:#f4f5f7;padding:142px}.main #swap{margin:142px 0}.main #swap .image{order:2}.main .project{display:flex;border-radius:24px;background-color:#fff;padding:24px}.main .project .image{width:50%;background-color:#e6e6e2;border-radius:8px;display:flex;align-items:center;justify-content:center}.main .project .image img{width:100%}.main .project .description{padding:24px 22px 48px 46px;width:50%}.main .project .description h1{font-size:40px;line-height:52px;font-weight:bold;color:#091e42;margin-bottom:32px}.main .project .description span{font-size:16px;line-height:24px;font-weight:normal;color:#344563}.main .project .description .built{display:flex;margin-top:26px;margin-bottom:35px}.main .project .description .built span{padding:4px 12px;background-color:#ebebff;color:#6070ff;font-style:normal;font-weight:500;font-size:12px;line-height:16px;border-radius:8px;margin-right:10px}.main .project .description .actions{display:flex}.main .project .description .actions button{padding:12px;border:1px solid #6070ff;color:#6070ff;font-weight:500;font-size:17px;line-height:24px;border-radius:8px;margin-right:15px;background-color:#fff}.main .project .description .actions button:hover{background-color:#6070ff;color:#fff;cursor:pointer}footer{background-color:#fff;border-top-right-radius:80px}footer .firstSection{padding:142px;background-color:#fff;border-top-right-radius:80px;display:flex}footer .about{width:50%;display:flex;flex-direction:column}footer .about h1{color:#091e42;line-height:60px;font-size:48px}footer .about p{color:#344563;margin:20px 0;line-height:28px}footer .about h3{color:#7f8cff;font-weight:lighter;font-size:16px;line-height:24px;margin:14px 0}footer .about .icons{display:flex;flex-direction:row}footer .about .icons>*{margin-right:20px}footer .about .btn{padding:12px;margin-top:34px;width:max-content;border:1px solid #6070ff;color:#6070ff;font-weight:500;font-size:17px;line-height:24px;border-radius:8px;margin-right:15px;background-color:#fff}footer .about .btn:hover{background-color:#6070ff;color:#fff;cursor:pointer}footer .workDetails{width:50%;display:flex;flex-direction:column}footer .workDetails .collapsible{display:flex;align-items:center;justify-content:space-between;font-style:normal;font-weight:500;font-size:20px;line-height:24px;padding:24px;border:none;color:#091e42;border-bottom:1px solid #dfe1e6;background-color:#fff}footer .workDetails .hiddenFeatures{display:flex;overflow:hidden;max-height:0}footer .workDetails .hiddenFeatures div{margin:12px;display:flex;flex-direction:column;border-radius:8px;font-weight:500;font-size:15px;line-height:20px;background-color:#f4f5f7;padding:14px 14px 24px;color:#091e42;height:110px;display:flex;justify-content:space-between;width:120px}footer .workDetails .hiddenFeatures div :first-child{border-radius:100px;border:1px solid #fff}footer .contactForm{background:url("+p+");background-repeat:no-repeat;background-size:100%;background-color:#6070ff;border-top-left-radius:80px;padding:142px 320px;display:flex;flex-direction:column;align-items:center}footer .contactForm h1{font-style:normal;font-weight:bold;font-size:40px;line-height:52px;color:#fff;text-align:center}footer .contactForm p{font-style:normal;font-weight:normal;font-size:20px;line-height:28px;color:#fff;margin:18px 0;text-align:center}footer .contactForm button:hover{background-color:#6070ff;color:#fff;cursor:pointer}footer .contactForm button{padding:12px;margin-top:34px;width:max-content;border:1px solid #fff;color:#fff;background-color:transparent;font-weight:500;font-size:17px;line-height:24px;border-radius:8px;margin-right:15px}@media only screen and (max-width: 768px){.displayMenu{max-height:100% !important}.menuDisplayed{overflow:hidden;max-height:0;font-style:normal;font-weight:600;font-size:32px;line-height:44px;background-color:rgba(127,140,255,.945);height:100%;position:fixed;top:0;width:100%;z-index:100;display:flex;flex-direction:column}.menuDisplayed ul{display:flex;flex-direction:column}.menuDisplayed a{color:#fff !important;padding:28px}.menuDisplayed .closeMenu{align-self:self-end}nav{padding:30px 24px}nav ul{display:none}#intro{padding:140px 24px 160px;background:url("+u+");background-size:cover;background-repeat:no-repeat}.main{padding:5rem}.main :last-child{margin:0 !important}.main #swap .description{order:2}.main .project{display:flex;flex-direction:column;margin:110px 0}.main .project .image{padding:0;width:100%;height:300px}.main .project .image img{width:80%}.main .project .description{padding:70px 0;width:100%;height:330px}.main .project .actions{justify-content:space-between}.firstSection{flex-direction:column;padding:100px 24px 40px !important}.firstSection .about{width:100%;margin-bottom:24px}.firstSection .workDetails{width:100%}.firstSection .workDetails .hiddenFeatures{flex-direction:column}.firstSection .workDetails .hiddenFeatures div{width:auto;flex-direction:row;height:auto;align-items:center;justify-content:flex-start}.firstSection .workDetails .hiddenFeatures div :nth-child(2){margin-left:16px}.contactForm{padding:100px 24px 40px !important}}@media only screen and (min-width: 769px)and (max-width: 1024px){.menuDisplayed,.displayMenu{overflow:hidden;max-height:0}#intro{padding:140px 40px 160px;background-size:cover}.main{padding:100px}.main #swap .description{order:2}.main .project{display:flex;flex-direction:column}.main .project .image{padding:0;width:100%;height:300px}.main .project .image img{width:80%}.main .project .description{padding:70px 0;width:100%;height:330px}.firstSection{flex-direction:column;padding:80px !important}.firstSection .about{width:100%;margin-bottom:24px}.firstSection .workDetails{width:100%}.firstSection .workDetails .hiddenFeatures{flex-direction:column}.firstSection .workDetails .hiddenFeatures div{width:auto;flex-direction:row;height:auto;align-items:center;justify-content:flex-start}.firstSection .workDetails .hiddenFeatures div :nth-child(2){margin-left:16px}.contactForm{padding:142px 120px !important}}",""]),t.default=s}]);