!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r=document.querySelector(".form"),u=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]');function l(e,n){var t=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}r.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(u.value),t=Number(a.value),o=Number(c.value),r=n,d=1;d<=o;d+=1)l(d,r+=t).then((function(e){var n=e.position,t=e.delay;setTimeout((function(){i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))}),t)})).catch((function(e){var n=e.position,t=e.delay;setTimeout((function(){i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}),t)}))}))}();
//# sourceMappingURL=03-promises.cad3ae16.js.map
