(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(48),u=n.n(o),a=n(30),i=n(49),r=n.n(i),l=(n(59),n(50)),s=n(1),f=n(5),b=[[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{list:"ordered"},{list:"bullet"}],["bold","italic","underline"],[{color:[]},{background:[]}],[{script:"sub"},{script:"super"}],[{align:[]}],["image","blockquote","code-block"],["clean"]];function d(){var e=Object(s.g)().id,t=Object(c.useState)(),n=Object(a.a)(t,2),o=n[0],u=n[1],i=Object(c.useState)(),d=Object(a.a)(i,2),j=d[0],O=d[1];Object(c.useEffect)((function(){var e=Object(l.io)("http://localhost:3001");return u(e),function(){e.disconnect()}}),[]),Object(c.useEffect)((function(){null==o|null==j||(o.once("load-document",(function(e){j.setContents(e),j.enable()})),o.emit("get-document",e))}),[o,j,e]),Object(c.useEffect)((function(){if(null!=o&&null!=j){var e=function(e){j.updateContents(e)};return o.on("receive-changes",e),function(){o.off("receive-changes",e)}}}),[o,j]),Object(c.useEffect)((function(){if(null!=o&&null!=j){var e=function(e,t,n){"user"===n&&o.emit("send-changes",e)};return j.on("text-change",e),function(){j.off("text-change",e)}}}),[o,j]),Object(c.useEffect)((function(){if(null!=o&&null!=j){var e=setInterval((function(){o.emit("save-document",j.getContents())}),2e3);return function(){clearInterval(e)}}}),[o,j]);var h=Object(c.useCallback)((function(e){if(null!=e){e.innerHTML="";var t=document.createElement("div");e.append(t);var n=new r.a(t,{theme:"snow",modules:{toolbar:b}});n.disable(),n.setText("Loading..."),O(n)}}),[]);return Object(f.jsx)("div",{className:"container",ref:h})}var j=n(27),O=n(100);var h=function(){return Object(f.jsx)(j.a,{children:Object(f.jsxs)(s.d,{children:[Object(f.jsx)(s.b,{path:"/",exact:!0,children:Object(f.jsx)(s.a,{to:"/documents/".concat(Object(O.a)())})}),Object(f.jsx)(s.b,{path:"/documents/:id",children:Object(f.jsx)(d,{})})]})})};n(97);u.a.render(Object(f.jsx)(h,{}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.86e03c74.chunk.js.map