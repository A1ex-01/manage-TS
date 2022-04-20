(function(){var e={8283:function(e,t,n){"use strict";var r=n(9963),o=n(6252);const s={class:"app"};function i(e,t,n,r,i,a){const c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(c)])}var a=(0,o.aZ)({}),c=n(3744);const u=(0,c.Z)(a,[["render",i]]);var d=u,l=n(7112),f=n(168);(0,f.zn)(),(0,r.ri)(d).use(f.ZP).use(l.Z).mount("#app")},7112:function(e,t,n){"use strict";var r=n(2119),o=n(2722);const s=[{path:"/",redirect:"/main"},{name:"login",path:"/login",component:()=>Promise.all([n.e(844),n.e(354)]).then(n.bind(n,9634))},{name:"main",path:"/main",component:()=>Promise.all([n.e(844),n.e(638)]).then(n.bind(n,3412))},{name:"notfound",path:"/:pathMatch(.*)*",component:()=>n.e(965).then(n.bind(n,965))}],i=(0,r.p7)({history:(0,r.PO)(""),routes:s});i.beforeEach((e=>{if("/login"!==e.path&&!o.Z.getCache("token"))return"/login"})),t["Z"]=i},3777:function(e,t,n){"use strict";n.r(t);const r=()=>n.e(714).then(n.bind(n,6714));t["default"]={path:"/main/analysis/dashboard",name:"dashboard",component:r,children:[]}},9850:function(e,t,n){"use strict";n.r(t);const r=()=>n.e(238).then(n.bind(n,3238));t["default"]={path:"/main/analysis/overview",name:"overview",component:r,children:[]}},1007:function(e,t,n){"use strict";n.r(t);const r=()=>n.e(631).then(n.bind(n,9631));t["default"]={path:"/main/product/category",name:"category",component:r,children:[]}},6017:function(e,t,n){"use strict";n.r(t);const r=()=>n.e(947).then(n.bind(n,1947));t["default"]={path:"/main/product/goods",name:"goods",component:r,children:[]}},6731:function(e,t,n){"use strict";n.r(t);const r=()=>n.e(366).then(n.bind(n,3366));t["default"]={path:"/main/story/chat",name:"chat",component:r,children:[]}},125:function(e,t,n){"use strict";n.r(t);const r=()=>n.e(646).then(n.bind(n,4646));t["default"]={path:"/main/story/list",name:"list",component:r,children:[]}},5131:function(e,t,n){"use strict";n.r(t);const r=()=>n.e(103).then(n.bind(n,6103));t["default"]={path:"/main/system/department",name:"department",component:r,children:[]}},3997:function(e,t,n){"use strict";n.r(t);const r=()=>n.e(940).then(n.bind(n,2940));t["default"]={path:"/main/system/menu",name:"menu",component:r,children:[]}},8947:function(e,t,n){"use strict";n.r(t);const r=()=>n.e(391).then(n.bind(n,3391));t["default"]={path:"/main/system/role",name:"role",component:r,children:[]}},4612:function(e,t,n){"use strict";n.r(t);const r=()=>n.e(213).then(n.bind(n,1213));t["default"]={path:"/main/system/user",name:"user",component:r,children:[]}},168:function(e,t,n){"use strict";n.d(t,{ZP:function(){return E},zn:function(){return I},oR:function(){return O}});var r=n(3907),o=n(2722),s=n(2482),i=n(9669),a=n.n(i),c=n(3028);n(1617);class u{constructor(e){(0,s.Z)(this,"instance",void 0),(0,s.Z)(this,"interceptors",void 0),(0,s.Z)(this,"loading",void 0),this.instance=a().create(e),this.interceptors=e.interceptors,this.instance.interceptors.request.use(this.interceptors?.requestInterceptor,this.interceptors?.requestIntercetorCatch),this.instance.interceptors.response.use(this.interceptors?.responseInterceptor,this.interceptors?.responseInterceptorCatch),this.instance.interceptors.request.use((e=>e),(e=>e)),this.instance.interceptors.response.use((e=>(console.log("res success"),this.loading?.close(),e.data)),(e=>(console.log("res fail"),this.loading?.close(),e)))}request(e){return new Promise(((t,n)=>{e.interceptors?.requestInterceptor&&(e=e.interceptors.requestInterceptor(e)),!1!==e?.showLoading&&(this.loading=c.kN.service({text:"loading~",lock:!0,background:"rgba(0, 0, 0, .5)"})),this.instance.request(e).then((n=>{e.interceptors?.responseInterceptor&&(n=e.interceptors.responseInterceptor(n)),t(n)})).catch((()=>n))}))}get(e){return this.request({...e,method:"GET"})}post(e){return this.request({...e,method:"POST"})}delete(e){return this.request({...e,method:"DELETE"})}patch(e){return this.request({...e,method:"PATCH"})}}var d=u;const l="http://152.136.185.210:5000",f=5e3,h=new d({baseURL:l,timeout:f,interceptors:{requestInterceptor:e=>{const t=o.Z.getCache("token");return t&&(e.headers={Authorization:`Bearer ${t}`}),e},requestIntercetorCatch:e=>e,responseInterceptor:e=>e,responseInterceptorCatch:e=>e}});var m=h;function p(e){return m.post({url:"/login",data:e,showLoading:!1})}function g(e){return m.get({url:`/users/${e}`,showLoading:!1})}function v(e){return m.get({url:`/role/${e}/menu`})}var y=n(7112);function b(e){const t=[],r=[],o=n(372);o.keys().forEach((e=>{const t=n(7259)("./main"+e.split(".")[1]);console.log(t.default.path.slice(6)),r.push(t.default)}));const s=e=>{for(const n of e)if(2===n.type){const e=r.find((e=>e.path===n.url));e&&t.push(e)}else s(n.children)};return s(e),t}const w={namespaced:!0,state(){return{token:"",userInfo:{},usermenus:[]}},getters:{},mutations:{changeToken(e,t){e.token=t},changeUserInfo(e,t){e.userInfo=t},changeUsermenus(e,t){e.usermenus=t;const n=b(t);console.log(n),n.forEach((e=>{y.Z.addRoute("main",e)}))}},actions:{async accountLoginAction({commit:e},t){const n=await p(t),{id:r,token:s}=n.data;e("changeToken",s),o.Z.setCache("token",s);const i=await g(r);e("changeUserInfo",i.data),o.Z.setCache("userInfo",i.data);const a=await v(i.data.role.id);e("changeUsermenus",a.data),o.Z.setCache("usermenus",a.data),y.Z.push("/main")},initLocalInfo({commit:e}){const t=o.Z.getCache("token");t&&e("changeToken",t);const n=o.Z.getCache("userInfo");n&&e("changeUserInfo",n);const r=o.Z.getCache("usermenus");r&&e("changeUsermenus",r)}}};var k=w;const C=(0,r.MT)({modules:{login:k}});function I(){C.dispatch("login/initLocalInfo")}function O(){return(0,r.oR)()}var E=C},2722:function(e,t){"use strict";class n{setCache(e,t,n=!0){n?window.localStorage.setItem(e,JSON.stringify(t)):window.sessionStorage.setItem(e,JSON.stringify(t))}getCache(e,t=!0){let n=null;if(n=t?window.localStorage.getItem(e):window.sessionStorage.getItem(e),n)return JSON.parse(n)}delCache(e,t=!0){t?window.localStorage.removeItem(e):window.sessionStorage.removeItem(e)}clearCache(){window.localStorage.clear(),window.sessionStorage.clear()}}t["Z"]=new n},372:function(e,t,n){var r={"./analysis/dashboard/dashboard.ts":3777,"./analysis/overview/overview.ts":9850,"./product/category/category.ts":1007,"./product/goods/goods.ts":6017,"./story/chat/chat.ts":6731,"./story/list/list.ts":125,"./system/department/department.ts":5131,"./system/menu/menu.ts":3997,"./system/role/role.ts":8947,"./system/user/user.ts":4612};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=372},7259:function(e,t,n){var r={"./main/analysis/dashboard/dashboard":3777,"./main/analysis/dashboard/dashboard.ts":3777,"./main/analysis/overview/overview":9850,"./main/analysis/overview/overview.ts":9850,"./main/product/category/category":1007,"./main/product/category/category.ts":1007,"./main/product/goods/goods":6017,"./main/product/goods/goods.ts":6017,"./main/story/chat/chat":6731,"./main/story/chat/chat.ts":6731,"./main/story/list/list":125,"./main/story/list/list.ts":125,"./main/system/department/department":5131,"./main/system/department/department.ts":5131,"./main/system/menu/menu":3997,"./main/system/menu/menu.ts":3997,"./main/system/role/role":8947,"./main/system/role/role.ts":8947,"./main/system/user/user":4612,"./main/system/user/user.ts":4612};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=7259}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,s){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],s=e[d][2];for(var a=!0,c=0;c<r.length;c++)(!1&s||i>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,s<i&&(i=s));if(a){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{103:"0536559f",213:"13afbd43",238:"304bd8e3",354:"f01fa51b",366:"7f2be719",391:"66e3c2bf",631:"1ff62655",638:"9801c760",646:"d666c41a",714:"e736a288",844:"9d7cca6e",940:"2b8e03e0",947:"9c23b19e",965:"d15a10da"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{354:"432a6bf6",638:"a03a563e"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ax-cms:";n.l=function(r,o,s,i){if(e[r])e[r].push(o);else{var a,c;if(void 0!==s)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+s){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+s),a.src=r),e[r]=[o];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(s){if(o.onerror=o.onload=null,"load"===s.type)n();else{var i=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=s,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===e||s===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],s=o.getAttribute("data-href");if(s===e||s===t)return o}},r=function(r){return new Promise((function(o,s){var i=n.miniCssF(r),a=n.p+i;if(t(i,a))return o();e(r,a,o,s)}))},o={143:0};n.f.miniCss=function(e,t){var n={354:1,638:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var s=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=s);var i=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",a.name="ChunkLoadError",a.type=s,a.request=i,o[1](a)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,s,i=r[0],a=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var d=c(n)}for(t&&t(r);u<i.length;u++)s=i[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},r=self["webpackChunkax_cms"]=self["webpackChunkax_cms"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8283)}));r=n.O(r)})();
//# sourceMappingURL=app.f0fc5356.js.map