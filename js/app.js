!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},n={},r={},i={}.hasOwnProperty,o=/^\.\.?(\/|$)/,a=function(e,t){for(var n,r=[],i=(o.test(t)?e+"/"+t:t).split("/"),a=0,s=i.length;a<s;a++)n=i[a],".."===n?r.pop():"."!==n&&""!==n&&r.push(n);return r.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},f=function(t){return function(n){var r=a(s(t),n);return e.require(r,t)}},u=function(e,t){var r=null;r=g&&g.createHot(e);var i={id:e,exports:{},hot:r};return n[e]=i,t(i.exports,f(e),i),i.exports},l=function(e){return r[e]?l(r[e]):e},c=function(e,t){return l(a(s(e),t))},d=function(e,r){null==r&&(r="/");var o=l(e);if(i.call(n,o))return n[o].exports;if(i.call(t,o))return u(o,t[o]);throw new Error("Cannot find module '"+e+"' from '"+r+"'")};d.alias=function(e,t){r[t]=e};var p=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,v=function(e){if(p.test(e)){var t=e.replace(p,"");i.call(r,t)&&r[t].replace(p,"")!==t+"/index"||(r[t]=e)}if(h.test(e)){var n=e.replace(h,"");i.call(r,n)||(r[n]=e)}};d.register=d.define=function(e,r){if("object"==typeof e)for(var o in e)i.call(e,o)&&d.register(o,e[o]);else t[e]=r,delete n[e],v(e)},d.list=function(){var e=[];for(var n in t)i.call(t,n)&&e.push(n);return e};var g=e._hmr&&new e._hmr(c,d,t,n);d._cache=n,d.hmr=g&&g.wrap,d.brunch=!0,e.require=d}}(),function(){window;require.register("initialize.js",function(e,t,n){"use strict";document.addEventListener("DOMContentLoaded",function(){})}),require.register("js/3pp/FileSaver.min.js",function(e,t,n){"use strict";var r=r||function(e){if(!("undefined"==typeof e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),i="download"in r,o=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},a=/constructor/i.test(e.HTMLElement),s=/CriOS\/[\d]+/.test(navigator.userAgent),f=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},u="application/octet-stream",l=4e4,c=function(e){var t=function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()};setTimeout(t,l)},d=function(e,t,n){t=[].concat(t);for(var r=t.length;r--;){var i=e["on"+t[r]];if("function"==typeof i)try{i.call(e,n||e)}catch(o){f(o)}}},p=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},h=function y(t,f,l){l||(t=p(t));var h,y=this,v=t.type,g=v===u,w=function(){d(y,"writestart progress write writeend".split(" "))},m=function(){if((s||g&&a)&&e.FileReader){var r=new FileReader;return r.onloadend=function(){var t=s?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;"),n=e.open(t,"_blank");n||(e.location.href=t),t=void 0,y.readyState=y.DONE,w()},r.readAsDataURL(t),void(y.readyState=y.INIT)}if(h||(h=n().createObjectURL(t)),g)e.location.href=h;else{var i=e.open(h,"_blank");i||(e.location.href=h)}y.readyState=y.DONE,w(),c(h)};return y.readyState=y.INIT,i?(h=n().createObjectURL(t),void setTimeout(function(){r.href=h,r.download=f,o(r),w(),c(h),y.readyState=y.DONE})):void m()},v=h.prototype,g=function(e,t,n){return new h(e,t||e.name||"download",n)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=p(e)),navigator.msSaveOrOpenBlob(e,t)}:(v.abort=function(){},v.readyState=v.INIT=0,v.WRITING=1,v.DONE=2,v.error=v.onwritestart=v.onprogress=v.onwrite=v.onabort=v.onerror=v.onwriteend=null,g)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||(void 0).content);"undefined"!=typeof n&&n.exports?n.exports.saveAs=r:"undefined"!=typeof define&&null!==define&&null!==define.amd&&define([],function(){return r})}),require.register("js/common.js",function(e,t,n){"use strict";function r(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}function i(e){switch(e.target.error.code){case e.target.error.NOT_FOUND_ERR:alert("File Not Found!");break;case e.target.error.NOT_READABLE_ERR:alert("Cannot read file");break;case e.target.error.ABORT_ERR:break;default:alert("An error occurred reading this file.")}}function o(e){return e.target.files?e.target.files:(e.stopPropagation(),e.preventDefault(),e.dataTransfer.files)}function a(e){return btoa(String.fromCharCode.apply(null,new Uint8Array(e)))}"undefined"!=typeof n&&n.exports&&(n.exports.selectEventFiles=o,n.exports.handleDragOver=r,n.exports.fileErrorHandler=i,n.exports.base64ArrayBuffer=a)}),require.register("js/ds_two.js",function(e,t,n){"use strict";function r(e,t){this.name=e,this.buffer=t,this.view=new DataView(this.buffer),this.ui={macca:{dom:document.getElementById("macca_input"),offset:1732,len:4}},this.to_disk=function(){var e=new File([new Uint8Array(this.buffer)],this.name,{type:"data:application/octet-stream;base64,"});l(e)},this.init_ui=function(){for(var e in this.ui)this.ui.hasOwnProperty(e)?(this.ui[e].dom.value=this.get_int(this.ui[e].offset,this.ui[e].len),this.ui[e].dom.disabled=!1):console.log("Error: unknown ui key="+e)},this.set_ui_val=function(e,t){if(!(e in this.ui))throw"Invalid UI element '"+e+"' is attempted to be set";this.set_int(this.ui[e].offset,t,this.ui[e].len)},this.set_int=function(e,t,n){if(e>this.buffer.byteLength)throw"offset="+e+" is greater than save length="+this.buffer.byteLength;if(e+n>this.buffer.byteLength)throw"Cannot read "+n+"from save offset="+e+". Length is only "+this.buffer.byteLength;switch(n){case 4:this.view.setUint32(e,t,!0);break;case 2:this.view.setUint16(e,t,!0);break;case 1:this.view.setUint8(e,t,!0);break;default:throw"Unsupported size="+n+" to read from save is given."}},this.get_int=function(e,t){if(e>this.buffer.byteLength)throw"offset="+e+" is greater than save length="+this.buffer.byteLength;if(e+t>this.buffer.byteLength)throw"Cannot read "+t+"from save offset="+e+". Length is only "+this.buffer.byteLength;switch(t){case 4:return this.view.getUint32(e,!0);case 2:return this.view.getUint16(e,!0);case 1:return this.view.getUint8(e,!0);default:throw"Unsupported size="+t+" to read from save is given."}}}function i(e){var t=[68,101,118,105];if(e.length<t.length)return!1;for(var n=0;n<t.length;n++)if(e[n]!==t[n])return!1;return!0}function o(e){var t=c(e),n=t[0],o=new FileReader;o.onerror=d,o.onloadend=function(e){var t=e.target.result;i(new Uint8Array(t,0,4))?(f=new r(n.name,t),f.init_ui(),p()):alert("Invalid Devil Survivor 2 RB save")},o.readAsArrayBuffer(n)}function a(){f?f.to_disk():alert("No save is uploaded")}function s(e){if(f){var t=function(e){e.className.includes("invalid")||(e.className+="invalid",e.title="Allowed values: [0; 4294967295]")},n=function(e){e.className=e.className.replace("invalid",""),e.title=""};if(!e.target.value||isNaN(e.target.value))return void t(e.target);console.log(e.target.value);var r=parseInt(e.target.value);if(console.log(r),r<0||r>4294967295)return void t(e.target);n(e.target);var i=e.target.id.replace("_input","");f.set_ui_val(i,r)}}var f,u=t("./common.js"),l=t("./3pp/FileSaver.min.js").saveAs,c=u.selectEventFiles,d=u.fileErrorHandler,p=function(){document.getElementById("warning").className+=" show",p=function(){}};"undefined"!=typeof n&&n.exports&&(n.exports.saveLoad=o,n.exports.saveNew=a,n.exports.input4bytes=s)}),require.register("___globals___",function(e,t,n){})}(),require("___globals___");var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(e){if("object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.jade=e()}}(function(){return function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var f="function"==typeof require&&require;if(!s&&f)return f(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){"use strict";function r(e){return null!=e&&""!==e}function i(e){return(Array.isArray(e)?e.map(i):e&&"object"===("undefined"==typeof e?"undefined":_typeof(e))?Object.keys(e).filter(function(t){return e[t]}):[e]).filter(r).join(" ")}function o(e){return s[e]||e}function a(e){var t=String(e).replace(f,o);return t===""+e?e:t}n.merge=function u(e,t){if(1===arguments.length){for(var n=e[0],i=1;i<e.length;i++)n=u(n,e[i]);return n}var o=e["class"],a=t["class"];(o||a)&&(o=o||[],a=a||[],Array.isArray(o)||(o=[o]),Array.isArray(a)||(a=[a]),e["class"]=o.concat(a).filter(r));for(var s in t)"class"!=s&&(e[s]=t[s]);return e},n.joinClasses=i,n.cls=function(e,t){for(var r=[],o=0;o<e.length;o++)t&&t[o]?r.push(n.escape(i([e[o]]))):r.push(i(e[o]));var a=i(r);return a.length?' class="'+a+'"':""},n.style=function(e){return e&&"object"===("undefined"==typeof e?"undefined":_typeof(e))?Object.keys(e).map(function(t){return t+":"+e[t]}).join(";"):e},n.attr=function(e,t,r,i){return"style"===e&&(t=n.style(t)),"boolean"==typeof t||null==t?t?" "+(i?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof t?(JSON.stringify(t).indexOf("&")!==-1&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),t&&"function"==typeof t.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(t).replace(/'/g,"&apos;")+"'"):r?(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n.escape(t)+'"'):(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t+'"')},n.attrs=function(e,t){var r=[],o=Object.keys(e);if(o.length)for(var a=0;a<o.length;++a){var s=o[a],f=e[s];"class"==s?(f=i(f))&&r.push(" "+s+'="'+f+'"'):r.push(n.attr(s,f,!1,t))}return r.join("")};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},f=/[&<>"]/g;n.escape=a,n.rethrow=function l(t,n,r,i){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&n||i))throw t.message+=" on line "+r,t;try{i=i||e("fs").readFileSync(n,"utf8")}catch(o){l(t,null,r)}var a=3,s=i.split("\n"),f=Math.max(r-a,0),u=Math.min(s.length,r+a),a=s.slice(f,u).map(function(e,t){var n=t+f+1;return(n==r?"  > ":"    ")+n+"| "+e}).join("\n");throw t.path=n,t.message=(n||"Jade")+":"+r+"\n"+a+"\n\n"+t.message,t},n.DebugItem=function(e,t){this.lineno=e,this.filename=t}},{fs:2}],2:[function(e,t,n){},{}]},{},[1])(1)});