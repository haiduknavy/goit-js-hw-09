const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let d=null;function o(){r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.disabled="true",t.addEventListener("click",(function(r){d=setInterval(o,1e3),t.disabled="true",e.removeAttribute("disabled")})),e.addEventListener("click",(function(r){clearInterval(d),e.disabled="true",t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.c7d54543.js.map