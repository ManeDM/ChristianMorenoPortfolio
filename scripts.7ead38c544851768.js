!function(i,l){if("object"==typeof exports&&"object"==typeof module)module.exports=l(require("tsparticles-plugin-absorbers"),require("tsparticles-updater-destroy"),require("tsparticles-plugin-emitters"),require("tsparticles-interaction-external-trail"),require("tsparticles-updater-roll"),require("tsparticles-slim"),require("tsparticles-updater-tilt"),require("tsparticles-updater-twinkle"),require("tsparticles-updater-wobble"));else if("function"==typeof define&&define.amd)define(["tsparticles-plugin-absorbers","tsparticles-updater-destroy","tsparticles-plugin-emitters","tsparticles-interaction-external-trail","tsparticles-updater-roll","tsparticles-slim","tsparticles-updater-tilt","tsparticles-updater-twinkle","tsparticles-updater-wobble"],l);else{var o="object"==typeof exports?l(require("tsparticles-plugin-absorbers"),require("tsparticles-updater-destroy"),require("tsparticles-plugin-emitters"),require("tsparticles-interaction-external-trail"),require("tsparticles-updater-roll"),require("tsparticles-slim"),require("tsparticles-updater-tilt"),require("tsparticles-updater-twinkle"),require("tsparticles-updater-wobble")):l(i.window,i.window,i.window,i.window,i.window,i.window,i.window,i.window,i.window);for(var p in o)("object"==typeof exports?exports:i)[p]=o[p]}}(this,(i,l,o,p,d,c,w,b,f)=>(()=>{"use strict";var x={955:e=>{e.exports=p},359:e=>{e.exports=i},716:e=>{e.exports=o},353:e=>{e.exports=c},731:e=>{e.exports=l},852:e=>{e.exports=d},95:e=>{e.exports=w},765:e=>{e.exports=b},585:e=>{e.exports=f}},u={};function t(e){var r=u[e];if(void 0!==r)return r.exports;var a=u[e]={exports:{}};return x[e](a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{t.r(n),t.d(n,{loadFull:()=>P});var e=t(359),r=t(731),a=t(716),y=t(955),q=t(852),m=t(353),g=t(95),v=t(765),j=t(585);async function P(s){await(0,m.loadSlim)(s),await(0,r.loadDestroyUpdater)(s),await(0,q.loadRollUpdater)(s),await(0,g.loadTiltUpdater)(s),await(0,v.loadTwinkleUpdater)(s),await(0,j.loadWobbleUpdater)(s),await(0,y.loadExternalTrailInteraction)(s),await(0,e.loadAbsorbersPlugin)(s),await(0,a.loadEmittersPlugin)(s)}})(),n})());