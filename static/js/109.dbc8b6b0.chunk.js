"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[109],{6053:function(e,t,r){r.d(t,{Eq8:function(){return o}});var n=r(9983);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M2.99787498,6.99999999 L2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L15,23 M16,1 L16,6 L21,6 M8,23 C11.8659932,23 15,19.8659932 15,16 C15,12.1340068 11.8659932,9 8,9 C4.13400675,9 1,12.1340068 1,16 C1,19.8659932 4.13400675,23 8,23 Z M4.5,16.5 L8,13 L11.5,16.5 M8,13.5 L8,20"}}]})(e)}},2043:function(e,t,r){r.d(t,{v:function(){return u}});var n=r(2791),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};function s(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}var i={color:"#38ad48",enabled:!0,size:50,style:{}},a=function(e){return parseFloat(e.toString()).toString()===e.toString()?e+"px":e.toString()},l={speed:100,still:!1,thickness:100};o(o({},l),{secondaryColor:"rgba(0,0,0,0.44)"});!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("@keyframes spinners-react-dotted-center{0%,15%,85%,to{transform:scale(0)}40%,50%{transform:scale(1)}84%{transform:scale(.45)}}@keyframes spinners-react-dotted-shrink{50%{transform:translate(0)}}");var c=[{x:22,y:-20},{x:29,y:0},{x:22,y:20},{x:0,y:30},{x:-23,y:20},{x:-30,y:0},{x:-23,y:-20},{x:0,y:-30}],f=function(e){var t=e.speed,r=e.still,i=e.thickness,a=s(e,["speed","still","thickness"]),l=200/t,f=function(e){return r?{}:{animation:"spinners-react-dotted-shrink "+l+"s cubic-bezier(0, 0.9, 0, 0.9) "+l/20*e+"s infinite"}},u=r?{display:"none"}:{animation:"spinners-react-dotted-center "+l+"s ease-out infinite",transformOrigin:"center"};return n.createElement("svg",o({fill:"none",viewBox:"0 0 66 66"},a),c.map((function(e,t){return n.createElement("circle",{key:e.x+"-"+e.y,cx:"33",cy:"33",fill:"currentColor",r:i/100*3,style:o({transform:"translate("+e.x+"px, "+e.y+"px)"},f(t))})})),n.createElement("circle",{cx:"33",cy:"33",fill:"currentColor",r:i/100*6,style:u}))};f.defaultProps=l;var u=function(e){var t=function(t){var r=t.color,i=t.enabled,l=t.size,c=t.style,f=s(t,["color","enabled","size","style"]),u=o(o({},f),{style:o({color:r,overflow:"visible",width:a(l)},c)});return i?n.createElement(e,o({},u)):null};return t.defaultProps=i,t}(f)}}]);
//# sourceMappingURL=109.dbc8b6b0.chunk.js.map