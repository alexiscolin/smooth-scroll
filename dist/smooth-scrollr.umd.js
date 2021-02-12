!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SmoothScrollr=e():t.SmoothScrollr=e()}(self,(function(){return(()=>{"use strict";var t={937:(t,e,i)=>{i.r(e),i.d(e,{SmoothScrollr:()=>T});var n={section:document.body,delay:.1,direction:"vertical",speed:1,touchSpeed:1.5,jump:110,touch:!1,fixedClass:!1,resize:!0,preload:!0,multFirefox:15,scrollMax:0,ticking:!1,initFuncs:[]};function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var s,r,c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];this.DOM={},this.events={success:[],fail:[]};var n={success:e,fail:i};this.init(t,n)};c.prototype=(s=function(t){this.events[t].forEach((function(t){return t()}))},r=function(){var t,e=this,i=function(t){if(Array.isArray(t))return o(t)}(t=this.DOM.querySelectorAll("img[src], video"))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();if(i.length<=0)s.call(this,"success");else{var n=!!window.Promise,r=!!window.fetch,c=n?[]:null;i.forEach((function(t,i,o){var l="img"===t.nodeName.toLowerCase()?"load":"loadstart",h=document.createElement(t.nodeName.toLowerCase());if(n){var a;a=r?fetch(t.src).then((function(t){if(t.ok)return t;throw s.call(e,"fail"),new Error(t.url+" Is not a 2xx response")})).catch((function(t){return console.error("Fetch error: "+t.message)})):new Promise((function(i,n){h.src=t.src,h.addEventListener(l,(function(t){return i()}),!1),h.addEventListener("error",(function(t){return s.call(e,"fail"),n(new Error("Media failed loading"))}),!1)})),c.push(a)}else h.onloadstart=h.onload=function(){o.splice(o.indexOf(t),1),0===o.length&&s.call(e,"success")}})),n&&Promise.all(c).then((function(t){s.call(e,"success")})).catch((function(t){console.error(t.message)}))}},{init:function(t,e){Object.assign(this.events,e),this.DOM=t,r.call(this)},destroy:function(){for(var t in this)Object.prototype.hasOwnProperty.call(this,t)&&(this[t]=null,delete this[t]);return null}});var l,h,a,u,d,f=function(t,e){this.config={},this.move={},this.callback=null,this.init(t,e)};f.prototype=(l=function(t){var e=Math.abs(t.deltaY)>Math.abs(t.deltaX)?t.deltaY:t.deltaX;this.move.dest+=this.runFirefox&&1==t.deltaMode?e*this.config.speed*this.config.multFirefox:e*this.config.speed,this.callback()},h=function(t){var e=t.targetTouches?t.targetTouches[0]:t;this.move.touch={pageY:e.pageY,pageX:e.pageX}},a=function(t){var e=t.targetTouches?t.targetTouches[0]:t,i=e.pageY,n=e.pageX,o=Math.abs(e.pageY-this.move.touch.pageY)>Math.abs(e.pageX-this.move.touch.pageX)?"pageY":"pageX",s="pageY"===o?i:n;this.move.dest+=-(s-this.move.touch[o])*this.config.touchSpeed,this.move.touch={pageY:i,pageX:n},this.callback.call(this)},u=function(t){38!==t.keyCode&&40!==t.keyCode||t.preventDefault(),this.move.dest+=38===t.keyCode?-this.config.jump:40===t.keyCode?this.config.jump:0,this.callback.call(this)},d=function(t){this.move.dest=window.scrollY||window.pageYOffset,this.callback.call(this)},{init:function(t,e){Object.assign(this.config,t),this.callback=e,this.move={dest:0,touch:0},this.runFirefox=navigator.userAgent.indexOf("Firefox")>-1,this.deviceHasEvents={wheel:"onwheel"in document,mouseWheel:"onmousewheel"in document,touch:"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,keys:"onkeydown"in document},this.enableSmoothScroll=!this.deviceHasEvents.touch||this.config.touch},domEvent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bind",e="bind"===t?"addEventListener":"unbind"===t?"removeEventListener":null;if(null===e)throw"_domEvent function - wrong method! expect 'bind' || 'unbind' : got "+t;this.enableSmoothScroll?(this.deviceHasEvents.wheel&&(this._wheelFunc||(this._wheelFunc=l.bind(this)))&&document[e]("wheel",this._wheelFunc,!1),this.deviceHasEvents.mouseWheel&&(this._mouWheelFunc||(this._mouWheelFunc=l.bind(this)))&&document[e]("mousewheel",this._mouWheelFunc,!1),this.deviceHasEvents.keys&&(this._keysFunc||(this._keysFunc=u.bind(this)))&&document[e]("keydown",this._keysFunc,!1),this.deviceHasEvents.touch&&(!this._touchStatFunc&&(this._touchStatFunc=h.bind(this)),!this._touchMoveFunc&&(this._touchMoveFunc=a.bind(this)),document[e]("touchstart",this._touchStatFunc),document[e]("touchmove",this._touchMoveFunc))):this.config.parallax&&(!this._scrollFunc&&(this._scrollFunc=d.bind(this)),document[e]("scroll",this._scrollFunc,!1))},enableSmoothScroll:function(){return this.enableSmoothScroll},destroy:function(){for(var t in this)Object.prototype.hasOwnProperty.call(this,t)&&(this[t]=null,delete this[t]);return null}}),Object.defineProperty(f.prototype,"dest",{set:function(t){this.move.dest=t},get:function(){return this.move.dest}});var v=function(t){var e={};if(window.getComputedStyle){var i=getComputedStyle(t),n=i.transform||i.webkitTransform||i.mozTransform,o=n.match(/^matrix3d\((.+)\)$/);return o?parseFloat(o[1].split(", ")[13]):(o=n.match(/^matrix\((.+)\)$/),e.x=o?parseFloat(o[1].split(", ")[4]):0,e.y=o?parseFloat(o[1].split(", ")[5]):0,e)}};function m(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(t){if("string"==typeof t)return g(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var y,b,w,S,x,M,O,F,E,A,j,D,k,_,T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.DOM={},this.config={},this.move={},this.sections=[],this.scrollStatut="start",this.init(t,e)};T.prototype=(y={},b={},w={},S=function(){this.config.ticking||(this.rAF=requestAnimationFrame(x.bind(this)),this.config.ticking=!0)},x=function t(){if(cancelAnimationFrame(this.rAF),this.rAF=requestAnimationFrame(t.bind(this)),this.move.dest>=this.config.scrollMax&&"end"!==this.scrollStatut?(y.collisionBottom&&y.collisionBottom.length>0&&F.call(this,"collisionBottom"),this.scrollStatut="end"):this.move.dest<=0&&"start"!==this.scrollStatut?(y.collisionTop&&y.collisionTop.length>0&&F.call(this,"collisionTop"),this.scrollStatut="start"):this.move.dest>0&&this.move.dest<this.config.scrollMax&&"running"!==this.scrollStatut&&(y.collisionEnded&&y.collisionEnded.length>0&&F.call(this,"collisionEnded"),this.scrollStatut="running"),this.move.dest=this.prevent?this.move.current:Math.round(Math.max(0,Math.min(this.events.dest,this.config.scrollMax))),this.events.dest=this.move.dest,this.prevent?(this.move.prev=this.move.dest,this.events.dest=this.events.dest):(this.move.dest=Math.round(Math.max(0,Math.min(this.events.dest,this.config.scrollMax))),this.events.dest=this.move.dest),this.move.prev!==this.move.dest){this.move.current+=this.prevent?0:(this.move.dest-this.move.current)*this.config.delay,this.move.position=-this.move.current.toFixed(2);for(var e=this.sections.length-1;e>=0;e--)this.move.current>this.sections[e].offset&&this.move.current<this.sections[e].limit?(this.sections[e].el.style.transform=this.events.enableSmoothScroll&&!this.prevent&&"translate3D(".concat("horizontal"===this.config.direction?this.move.position:0,"px,").concat("vertical"===this.config.direction?this.move.position:0,"px, 0)"),!this.sections[e].isInView&&(this.sections[e].el.style.visibility="visible"),this.sections[e].isInView=!0):(this.sections[e].isInView&&(this.sections[e].el.style.visibility="hidden"),this.sections[e].isInView=!1);y.scroll&&y.scroll.length>0&&F.call(this,"scroll"),this.move.prev=Math.round(this.move.current)}else this.config.ticking=!1,cancelAnimationFrame(this.rAF)},M=function(){return this.config.fixedClass?this.DOM.container.classList.add(this.config.fixedClass):(this.DOM.container.style.overflow="hidden",this.DOM.container.style.height="100vh","CSS"in window&&CSS.supports("overscroll-behavior","none")?document.body.style.overscrollBehavior="none":document.body.style.overflow="hidden"),!0},O=function(){var t=this;this.sections=[];var e=this.DOM.scroller.querySelectorAll("[data-scroll-container]");0===e.length&&(e=[this.DOM.scroller]),m(e).forEach((function(e){var i={isInView:!1};i.el=e,i.boundrect=i.el.getBoundingClientRect(),"vertical"===t.config.direction?(i.offset=i.boundrect.top-1.5*window.innerHeight-v(i.el).y,i.limit=i.offset+i.boundrect.height+2*window.innerHeight):(i.offset=i.boundrect.left-1.5*window.innerWidth-v(i.el).x,i.limit=i.offset+i.boundrect.width+2*window.innerWidth),t.sections.push(i)})),this.sections.sort((function(e,i){return"vertical"===t.config.direction?e.boundrect.top-i.boundrect.top:e.boundrect.left-i.boundrect.left}))},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"scroll",e=new Event("on-".concat(t));this.DOM.scroller.dispatchEvent(e)},E=function(t){var e=this,i=t.type.replace("on-",""),n=y[i];n&&0!==n.length&&n.forEach((function(t){if("function"==typeof t)switch(i){case"scroll":return t(e.move);default:return t()}}))},A=function(){this.events.enableSmoothScroll&&M.call(this),this.events.domEvent("bind"),!0===this.config.resize&&(w.resize=k.bind(this),this.on("resize",w.resize,window))},j=function(){var t=this;this.events.domEvent("unbind"),!0===this.config.resize&&this.off("resize",w.resize,window);for(var e=function(){var e,o,s=(e=n[i],o=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var i=[],n=!0,o=!1,s=void 0;try{for(var r,c=t[Symbol.iterator]();!(n=(r=c.next()).done)&&(i.push(r.value),!e||i.length!==e);n=!0);}catch(t){o=!0,s=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw s}}return i}}(e,o)||p(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=s[0],c=s[1];(function t(){_.call(this,r,c[c.length-1]),c.length>0&&t.call(this)}).call(t)},i=0,n=Object.entries(y);i<n.length;i++)e();void 0!==this.rAF&&(cancelAnimationFrame(this.rAF),this.rAF=null)},k=function(){O.call(this),this.config.scrollMax=D.call(this)},{init:function(t,e){var i=this;Object.assign(this.config,n,t),this.DOM.scroller=t.section,this.DOM.container=this.DOM.scroller.parentNode,this.move={current:0,dest:0,prev:0},this.prevent=!1,this.config.preload?this.preload=new c(this.DOM.scroller,[function(t){return i.resize()}].concat(m(this.config.initFuncs))):this.config.initFuncs&&this.config.initFuncs.forEach((function(t){return t()})),k.call(this);var o,s={touch:(o=this.config).touch,parallax:o.parallax,speed:o.speed,multFirefox:o.multFirefox,touchSpeed:o.touchSpeed,jump:o.jump};this.events=new f(s,S.bind(this)),A.call(this)},getSize:D=function(){return"vertical"===this.config.direction?this.DOM.scroller.offsetHeight-(document.documentElement.clientHeight||window.innerHeight):this.DOM.scroller.offsetWidth-(document.documentElement.clientWidth||window.innerWidth)},on:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.DOM.scroller,n=["scroll","collisionTop","collisionBottom","collisionEnded","resize"];if(!n.includes(t))throw"'on' function - wrong event! : got "+t;y[t]||(y[t]=[]);var o=y[t];o.push(e),1===o.length&&(b[t]=E.bind(this),i.addEventListener(i!==window?"on-":""+t,b[t],!1))},off:_=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.DOM.scroller,n=y[t];n.forEach((function(t,i){return t===e&&n.splice(i,1)})),0===n.length&&(i.removeEventListener(i!==window?"on-":""+t,b[t],!1),delete b[t])},resize:k,scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.move.dest=t,e||S.call(this),e&&(this.DOM.scroller.style.transform=this.events.enableSmoothScroll&&"translate3D(".concat("horizontal"===this.config.direction?t:0,"px,").concat("vertical"===this.config.direction?t:0,"px, 0)"))},scrollOf:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.move.dest+=t,e||S.call(this),e&&(this.DOM.scroller.style.transform=this.events.enableSmoothScroll&&"translate3D(".concat("horizontal"===this.config.direction?dir:0,"px,").concat("vertical"===this.config.direction?dir:0,"px, 0)")),"true"},preventScroll:function(t){this.prevent=t},destroy:function(){for(var t in this.preload&&this.preload.destroy(),j.call(this),this.events.destroy(),this)Object.prototype.hasOwnProperty.call(this,t)&&(this[t]=null,delete this[t]);return null}})}},e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,i),o.exports}return i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(937)})()}));