"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{493:function(t,n,e){e.r(n);var r=e(439),i=e(747),o=e(791),c=e(87),u=e(975),a=e(184);n.default=function(){var t=(0,o.useState)([]),n=(0,r.Z)(t,2),e=n[0],h=n[1],f=(0,o.useState)(null),s=(0,r.Z)(f,2),l=s[0],d=s[1],p=(0,o.useState)(!1),m=(0,r.Z)(p,2),v=m[0],k=m[1];return(0,o.useEffect)((function(){(0,i.hM)().then((function(t){h(t.results)})).catch((function(t){return d(t.message)})).finally((function(){return k(!1)}))}),[]),(0,a.jsxs)(a.Fragment,{children:[l&&(0,a.jsx)("h1",{children:l}),(0,a.jsx)("h1",{children:"Trending today"}),v&&(0,a.jsx)("div",{children:(0,a.jsx)(u.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})}),(0,a.jsx)("ul",{children:e.map((function(t){var n;return(0,a.jsx)("li",{children:(0,a.jsx)(c.rU,{to:"/movies/".concat(t.id),children:null!==(n=t.title)&&void 0!==n?n:t.name})},t.id)}))})]})}},747:function(t,n,e){e.d(n,{OT:function(){return o},TP:function(){return u},g0:function(){return c},hM:function(){return i},y3:function(){return a}});var r="bd090e5d17933448065d52d55259f1d4",i=function(){return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(r)).then((function(t){if(t.ok)return t.json()}))},o=function(t){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&query=").concat(t)).then((function(t){if(t.ok)return t.json()}))},c=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(r)).then((function(t){if(t.ok)return t.json()}))},u=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(r)).then((function(t){if(t.ok)return t.json()}))},a=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(r)).then((function(t){if(t.ok)return t.json()}))}}}]);
//# sourceMappingURL=493.54deac62.chunk.js.map