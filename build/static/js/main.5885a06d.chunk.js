(this["webpackJsonplogin-page"]=this["webpackJsonplogin-page"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(17),a=n.n(s),i=(n(24),n(18)),o=n(2),u=(n(25),n(1));function j(){return Object(u.jsx)("h2",{children:"Dashboard"})}var b=n(10),h=n.n(b),l=n(9),p=n(13);n(28);function d(e){return O.apply(this,arguments)}function O(){return(O=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://localhost:8080/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){var t=e.setToken,n=Object(r.useState)(),c=Object(l.a)(n,2),s=c[0],a=c[1],i=Object(r.useState)(),o=Object(l.a)(i,2),j=o[0],b=o[1],O=function(){var e=Object(p.a)(h.a.mark((function e(n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,d({username:s,password:j});case 3:r=e.sent,t(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"login-wrapper",children:[Object(u.jsx)("h1",{children:"Please Log In"}),Object(u.jsxs)("form",{onSubmit:O,children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{children:"Username"}),Object(u.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)}})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{children:"Password"}),Object(u.jsx)("input",{type:"password",onChange:function(e){return b(e.target.value)}})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"Submit"})})]})]})}function x(){return Object(u.jsx)("h2",{children:"Preferences"})}var g=function(){var e=function(){var e=Object(r.useState)(function(){var e=sessionStorage.getItem("token"),t=JSON.parse(e);return null===t||void 0===t?void 0:t.token}()),t=Object(l.a)(e,2),n=t[0],c=t[1];return{setToken:function(e){sessionStorage.setItem("token",JSON.stringify(e)),c(e.token)},token:n}}(),t=e.token,n=e.setToken;return t?Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("h1",{children:"Application"}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/dashboard",children:Object(u.jsx)(j,{})}),Object(u.jsx)(o.a,{path:"/preferences",children:Object(u.jsx)(x,{})})]})})]}):Object(u.jsx)(f,{setToken:n})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),v()}},[[34,1,2]]]);
//# sourceMappingURL=main.5885a06d.chunk.js.map