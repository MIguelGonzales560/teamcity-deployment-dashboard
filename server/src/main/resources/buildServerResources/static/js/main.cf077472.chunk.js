(this.webpackJsonpdeployments=this.webpackJsonpdeployments||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){},22:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(7),c=t.n(o),i=(t(14),t(3)),l=(t(15),function(e){var n=e.filter;return a.a.createElement("div",{className:"search"},a.a.createElement(u,null),a.a.createElement("form",{noValidate:"noValidate",className:"search-form"},a.a.createElement("input",{type:"search",placeholder:"Deployment Search...",onkeypress:"return event.keyCode != 13;",required:"required",className:"search-input",onChange:function(e){return n(e.target.value)}}),a.a.createElement("span",{className:"search-submit"},a.a.createElement("svg",{role:"img","aria-label":"Search"},a.a.createElement("use",{xlinkHref:"#search-icon-magnifier"}))),a.a.createElement("button",{type:"reset",className:"search-reset",onClick:function(){return n("")}},a.a.createElement("svg",{role:"img","aria-label":"Reset"},a.a.createElement("use",{xlinkHref:"#search-icon-cross"})))))}),u=function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"}},a.a.createElement("symbol",{xmlns:"http://www.w3.org/2000/svg",id:"search-icon-magnifier",viewBox:"0 0 40 41"},a.a.createElement("path",{d:"M26.51 28.573c-2.803 2.34-6.412 3.748-10.35 3.748C7.236 32.32 0 25.087 0 16.16 0 7.236 7.235 0 16.16 0c8.926 0 16.16 7.235 16.16 16.16 0 4.213-1.61 8.048-4.25 10.925L40 39.015l-1.524 1.524L26.51 28.572zm-10.35 2.132c8.033 0 14.545-6.512 14.545-14.544S24.193 1.617 16.16 1.617 1.617 8.128 1.617 16.16c0 8.033 6.512 14.545 14.545 14.545z",fillRule:"evenodd"})),a.a.createElement("symbol",{xmlns:"http://www.w3.org/2000/svg",id:"search-icon-cross",viewBox:"0 0 20 20"},a.a.createElement("path",{d:"M8.96 10L.52 1.562 0 1.042 1.04 0l.522.52L10 8.96 18.438.52l.52-.52L20 1.04l-.52.522L11.04 10l8.44 8.438.52.52L18.96 20l-.522-.52L10 11.04l-8.438 8.44-.52.52L0 18.96l.52-.522L8.96 10z",fillRule:"evenodd"})))},s=new Intl.Collator("default").compare,m=function(e){return e.map(f).reduce((function(e,n){return d(e,n)>0?e:n}))},f=function(e){var n=e.indexOf(" "),t=-1===n?e.length:n;return e.slice(0,t)},d=function(e,n){var t=e.split(/[.+]/).map((function(e){return e.padStart(10,"0")})).join("."),r=n.split(/[.+]/).map((function(e){return e.padStart(10,"0")})).join(".");return t===r?0:t<r?-1:1},p=function(e){for(var n=0,t=Object.keys(e);n<t.length;n++){var r=t[n],a=e[r],o=a.map((function(e){return e.version})),c=m(o);v(r,a,c)}return e},v=function(e,n,t){var r=!0,a=!1,o=void 0;try{for(var c,i=n[Symbol.iterator]();!(r=(c=i.next()).done);r=!0){var l=c.value;l.latest=f(l.version)===t}}catch(u){a=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}},h=(t(16),function(e,n,t){return e[n]=t,e}),g=new Intl.DateTimeFormat("default",{day:"numeric",month:"long",year:"numeric"}),E=new Intl.DateTimeFormat("default",{hour:"numeric",minute:"numeric",second:"numeric"}),y=function(e){return e||g},w=function(e){return e||E},b=function(e){return e.toDateString()===(new Date).toDateString()},k=t(8),j=t(2),O=(t(22),function(e){var n=e.environment,t=e.deploys.find((function(e){return e.environment===n}));return void 0===t?a.a.createElement("td",{key:n}):a.a.createElement("td",{key:n},a.a.createElement(L,{deploy:t}))}),L=function(e){var n=e.deploy;return a.a.createElement("a",{href:n.link},a.a.createElement("div",{className:"build"},a.a.createElement("div",{className:"build-status ".concat(S(n.status,n.hanging))},a.a.createElement(N,{status:n.status,running:n.running,hanging:n.hanging,latest:n.latest})),a.a.createElement("div",{className:"build-info"},a.a.createElement("span",{className:"build-version"},n.version),a.a.createElement("span",{className:"build-time"},function(e,n,t){var r=new Date(e);return b(r)?w(n).format(r):y(t).format(r)}(n.time)))))},N=function(e){var n=e.status,t=e.running,r=e.hanging,o=e.latest,c=C(n,t,r),i=t&&!r?"fa-spin":"",l=o?"status-latest":"status-older",u="status-icon ".concat(S(n,r)," ").concat(i," ").concat(l);return a.a.createElement(k.a,{icon:c,className:u})},S=function(e,n){return"status-".concat(n?"HANGING":e)},C=function(e,n,t){return t?j.c:n?j.b:"SUCCESS"===e?j.a:"FAILURE"===e?j.d:j.e},x=function(e){var n=e.embedded;return a.a.createElement("h1",{className:n?"invisible":"visible"},"Deployments")},D=function(e){var n=e.environments,t=e.unfilteredDeploysPerApp,o=Object(r.useState)(""),c=Object(i.a)(o,2),u=c[0],s=c[1],m=Object(r.useMemo)((function(){return function(e,n){var t=e.toLowerCase();return Object.keys(n).filter((function(e){return-1!==e.toLowerCase().indexOf(t)})).reduce((function(e,t){return h(e,t,n[t])}),{})}(u,t)}),[u,t]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(l,{filter:s}),a.a.createElement(A,{environments:n,deploysPerApp:m}))},A=function(e){var n=e.environments,t=e.deploysPerApp;return a.a.createElement("div",{className:"list"},a.a.createElement("table",{style:{"--environment-count":n.length}},a.a.createElement("thead",null,a.a.createElement(I,{environments:n})),a.a.createElement("tbody",null,a.a.createElement(P,{environments:n,deploysPerApp:t}))))},I=function(e){var n=e.environments;return a.a.createElement("tr",null,a.a.createElement("th",null,"DEPLOYMENT"),a.a.createElement("th",null),n.map((function(e){return a.a.createElement("th",{key:e},e)})))},P=function(e){var n=e.environments,t=e.deploysPerApp;return Object(r.useMemo)((function(){return Object.keys(t).sort(s)}),[t]).map((function(e){return a.a.createElement(R,{key:e,app:e,environments:n,deploys:t[e]})}))},R=function(e){var n=e.app,t=e.environments,r=e.deploys;return a.a.createElement("tr",null,a.a.createElement("td",null,n),a.a.createElement("td",null),t.map((function(e){return a.a.createElement(O,{key:e,environment:e,deploys:r})})))},T=function(e){var n=e.configuration,t=n.source,o=Object(r.useState)([]),c=Object(i.a)(o,2),l=c[0],u=c[1],s=Object(r.useState)([]),m=Object(i.a)(s,2),f=m[0],d=m[1],v=Object(r.useState)(""),h=Object(i.a)(v,2),g=h[0],E=h[1],y=function(){return t.fetch().then((function(e){var n=e.environments,t=e.refreshSecs,r=e.deploys;u(n),d(function(e){var n,t=(n=function(e){return e.name},e.reduce((function(e,t){var r=n(t);return e[r]||(e[r]=[]),e[r].push(t),e}),{}));return p(t)}(r)),E(t)}))};return Object(r.useEffect)((function(){y()}),[t]),Object(r.useEffect)((function(){if(g){var e=setInterval((function(){return y()}),1e3*parseInt(g));return function(){return clearInterval(e)}}}),[g]),a.a.createElement("div",null,a.a.createElement(x,{embedded:n.embedded}),a.a.createElement(D,{environments:l,unfilteredDeploysPerApp:f}))},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=function(e){var n=W(window.location.search),t="".concat(e,"/").concat(n);return console.log("Fetching '".concat(n,"' deployments from TeamCity...")),fetch(t,{headers:{Accept:"application/json"}}).then(B)},W=function(e){var n=new URLSearchParams(e).get("projectId");if(null===n)throw new Error("Could not find project id in: ".concat(e));return n},B=function(e){if(e.ok)return e.json();throw new Error("Could not fetch from URL")},z={source:{fetch:function(){return U("/app/deployment-dashboard/")}},embedded:!0};c.a.render(a.a.createElement(T,{configuration:z}),document.getElementById("deploys")),z.embedded||function(){if("serviceWorker"in navigator){if(new URL("/plugins/deployment-dashboard",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/plugins/deployment-dashboard","/service-worker.js");F?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):M(e)}))}}()},9:function(e,n,t){e.exports=t(23)}},[[9,1,2]]]);
//# sourceMappingURL=main.cf077472.chunk.js.map