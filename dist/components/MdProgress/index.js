/*!
 * vue-material v1.0.0-beta-11
 * Made with <3 by marcosmoura 2019
 * Released under the MIT License.
 */
!(function(e,t){var r,n;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{r=t("object"==typeof exports?require("vue"):e.Vue);for(n in r)("object"==typeof exports?exports:e)[n]=r[n]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=538)})({0:function(e,t){e.exports=function(e,t,r,n,i,s){var o,u,a,c,l,f=e=e||{},d=typeof e.default;return"object"!==d&&"function"!==d||(o=e,f=e.default),u="function"==typeof f?f.options:f,t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId=i),s?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=a):n&&(a=n),a&&(c=u.functional,l=c?u.render:u.beforeCreate,c?(u._injectStyles=a,u.render=function(e,t){return a.call(t),l(e,t)}):u.beforeCreate=l?[].concat(l,a):[a]),{esModule:o,exports:f,options:u}}},1:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i,s,o,u;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=s.default.enabled,t=s.default.getThemeName,r=s.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||r(this)):null}}};return(0,u.default)(t,e)},i=r(4),s=n(i),o=r(6),u=n(o)},196:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i,s,o,u,a;Object.defineProperty(t,"__esModule",{value:!0}),i=Object.assign||function(e){var t,r,n;for(t=1;t<arguments.length;t++){r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=r(1),o=n(s),u=r(8),a=n(u),t.default=new o.default({name:"MdProgressBar",props:{mdValue:{type:Number,default:0},mdBuffer:{type:Number,default:0},mdMode:i({type:String,default:"determinate"},(0,a.default)("md-mode",["determinate","indeterminate","query","buffer"]))},computed:{isDeterminate:function(){return"determinate"===this.mdMode},isBuffer:function(){return"buffer"===this.mdMode},hasAmountFill:function(){return this.isBuffer||this.isDeterminate},progressClasses:function(){return"md-"+this.mdMode},progressValueStyle:function(){if(this.hasAmountFill)return"width: "+this.mdValue+"%"},progressTrackStyle:function(){if(this.hasAmountFill)return"width: "+this.mdBuffer+"%"},progressBufferStyle:function(){if(this.hasAmountFill)return"left: calc("+this.mdBuffer+"% + 8px)"}}})},197:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s,o,u,a,c;Object.defineProperty(t,"__esModule",{value:!0}),s=Object.assign||function(e){var t,r,n;for(t=1;t<arguments.length;t++){r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(1),u=n(o),a=r(8),c=n(a),new Set,t.default=new u.default({name:"MdProgressSpinner",props:{mdValue:{type:Number,default:0},mdDiameter:{type:Number,default:60},mdStroke:{type:Number,default:6},mdMode:s({type:String,default:"determinate"},(0,c.default)("md-mode",["determinate","indeterminate"]))},computed:{isDeterminate:function(){return"determinate"===this.mdMode},isIndeterminate:function(){return"indeterminate"===this.mdMode},isIE:function(){return!this.$isServer&&navigator.userAgent.toLowerCase().includes("trident")},progressClasses:function(){var e,t="md-progress-spinner-indeterminate";return this.isIE&&(t+="-fallback"),e={},i(e,t,!0),i(e,"md-"+this.mdMode,!0),e},circleRadius:function(){return(this.mdDiameter-this.mdStroke)/2},circleStrokeWidth:function(){return this.mdStroke+"px"},circleCircumference:function(){return 2*Math.PI*this.circleRadius},circleStrokeDashArray:function(){return this.circleCircumference+"px"},circleStrokeDashOffset:function(){return this.isDeterminate?this.circleCircumference*(100-this.mdValue)/100+"px":this.isIndeterminate&&this.isIE?.2*this.circleCircumference+"px":null}},watch:{mdValue:function(){this.attachCircleStyle()},mdDiameter:function(){this.attachSvgStyle(),this.attachCircleStyle()},mdStroke:function(){this.attachCircleStyle()}},methods:{attachSvgStyle:function(){var e=this.$refs["md-progress-spinner-draw"],t=this.mdDiameter+"px";e.style.width=t,e.style.height=t},attachCircleStyle:function(){var e=this.$refs["md-progress-spinner-circle"];e.style.strokeDashoffset=this.circleStrokeDashOffset,e.style.strokeDasharray=this.circleStrokeDashArray,e.style.strokeWidth=this.circleStrokeWidth,e.style.setProperty("--md-progress-spinner-start-value",.95*this.circleCircumference),e.style.setProperty("--md-progress-spinner-end-value",.2*this.circleCircumference)}},mounted:function(){this.attachSvgStyle(),this.attachCircleStyle()}})},2:function(t,r){t.exports=e},3:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i,s,o,u,a;Object.defineProperty(t,"__esModule",{value:!0}),r(7),i=r(5),s=n(i),o=r(4),u=n(o),a=function(){var e=new s.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"yyyy-MM-dd",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return u.default.metaColors},set:function(e){u.default.metaColors=e}},theme:{get:function(){return u.default.theme},set:function(e){u.default.theme=e}},enabled:{get:function(){return u.default.enabled},set:function(e){u.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=a(),e.prototype.$material=e.material)}},4:function(e,t,r){"use strict";var n,i,s,o,u;Object.defineProperty(t,"__esModule",{value:!0}),n=r(2),i=(function(e){return e&&e.__esModule?e:{default:e}})(n),s=null,o=null,u=null,t.default=new i.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,r=this.enabled;t&&(r?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var r=this.getThemeName,n=this.themeTarget;e=r(e),n.classList.remove(r(t)),n.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,r=this;return e?(t=e.mdTheme,(function e(n){if(n){var i=n.mdTheme,s=n.$parent;return i&&i!==t?i:e(s)}return r.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){s&&s.setAttribute("content",e)},setThemeColors:function(e){o&&o.setAttribute("content",e)},setMaskColors:function(e){u&&u.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,r="#fff";e&&(t=window.getComputedStyle(document.documentElement),r=t.getPropertyValue("--"+e+"-primary")),r&&(this.setMicrosoftColors(r),this.setThemeColors(r),this.setMaskColors(r))}},mounted:function(){var e=this;s=document.querySelector('[name="msapplication-TileColor"]'),o=document.querySelector('[name="theme-color"]'),u=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},406:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i,s,o,u,a,c;Object.defineProperty(t,"__esModule",{value:!0}),i=r(3),s=n(i),o=r(407),u=n(o),a=r(410),c=n(a),t.default=function(e){(0,s.default)(e),e.component(u.default.name,u.default),e.component(c.default.name,c.default)}},407:function(e,t,r){"use strict";function n(e){r(408)}var i,s,o,u,a,c,l,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),i=r(196),s=r.n(i);for(o in i)"default"!==o&&(function(e){r.d(t,e,(function(){return i[e]}))})(o);u=r(409),a=r(0),c=!1,l=n,f=null,d=null,m=a(s.a,u.a,c,l,f,d),t.default=m.exports},408:function(e,t){},409:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"md-progress-bar",appear:""}},[r("div",{staticClass:"md-progress-bar",class:[e.progressClasses,e.$mdActiveTheme]},[r("div",{staticClass:"md-progress-bar-track",style:e.progressTrackStyle}),e._v(" "),r("div",{staticClass:"md-progress-bar-fill",style:e.progressValueStyle}),e._v(" "),r("div",{staticClass:"md-progress-bar-buffer",attrs:{Style:e.progressBufferStyle}})])])},i=[],s={render:n,staticRenderFns:i};t.a=s},410:function(e,t,r){"use strict";function n(e){r(411)}var i,s,o,u,a,c,l,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),i=r(197),s=r.n(i);for(o in i)"default"!==o&&(function(e){r.d(t,e,(function(){return i[e]}))})(o);u=r(412),a=r(0),c=!1,l=n,f=null,d=null,m=a(s.a,u.a,c,l,f,d),t.default=m.exports},411:function(e,t){},412:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"md-progress-spinner",appear:""}},[r("div",{staticClass:"md-progress-spinner",class:[e.progressClasses,e.$mdActiveTheme]},[r("svg",{ref:"md-progress-spinner-draw",staticClass:"md-progress-spinner-draw",attrs:{preserveAspectRatio:"xMidYMid meet",focusable:"false",viewBox:"0 0 "+e.mdDiameter+" "+e.mdDiameter}},[r("circle",{ref:"md-progress-spinner-circle",staticClass:"md-progress-spinner-circle",attrs:{cx:"50%",cy:"50%",r:e.circleRadius}})])])])},i=[],s={render:n,staticRenderFns:i};t.a=s},5:function(e,t,r){"use strict";var n,i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return i.default.util.defineReactive(t,"reactive",e),t.reactive},n=r(2),i=(function(e){return e&&e.__esModule?e:{default:e}})(n)},538:function(e,t,r){e.exports=r(406)},6:function(e,t,r){!(function(t,r){e.exports=r()})(0,(function(){"use strict";function e(e){return!!e&&"object"==typeof e}function t(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||r(e)}function r(e){return e.$$typeof===f}function n(e){return Array.isArray(e)?[]:{}}function i(e,t){return!1!==t.clone&&t.isMergeableObject(e)?a(n(e),e,t):e}function s(e,t,r){return e.concat(t).map((function(e){return i(e,r)}))}function o(e,t){if(!t.customMerge)return a;var r=t.customMerge(e);return"function"==typeof r?r:a}function u(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach((function(t){n[t]=i(e[t],r)})),Object.keys(t).forEach((function(s){r.isMergeableObject(t[s])&&e[s]?n[s]=o(s,r)(e[s],t[s],r):n[s]=i(t[s],r)})),n}function a(e,t,r){var n,o,a;return r=r||{},r.arrayMerge=r.arrayMerge||s,r.isMergeableObject=r.isMergeableObject||c,n=Array.isArray(t),o=Array.isArray(e),a=n===o,a?n?r.arrayMerge(e,t,r):u(e,t,r):i(t,r)}var c=function(r){return e(r)&&!t(r)},l="function"==typeof Symbol&&Symbol.for,f=l?Symbol.for("react.element"):60103;return a.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,r){return a(e,r,t)}),{})},a}))},7:function(e,t){},8:function(e,t,r){"use strict";var n,i;Object.defineProperty(t,"__esModule",{value:!0}),n=r(2),i=(function(e){return e&&e.__esModule?e:{default:e}})(n),t.default=function(e,t){return{validator:function(r){return!!t.includes(r)||(i.default.util.warn("The "+e+" prop is invalid. Given value: "+r+". Available options: "+t.join(", ")+".",void 0),!1)}}}}})}));