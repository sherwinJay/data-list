(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e){e.exports=JSON.parse("{}")},39:function(e,t,n){e.exports=n(69)},44:function(e,t,n){},45:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(37),o=n.n(l),r=(n(44),n(7)),i=(n(45),n(2)),m=n(14),u=n(15),s=n.n(u),d=n(20),p=n(11),h=n.n(p),g=(n(35),function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],l=t[1],o="".concat(window.location.protocol,"//").concat(window.location.hostname);Object(a.useEffect)((function(){(function(){var e=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/clients/data"),e.next=3,h.a.get(t);case 3:n=e.sent,l(n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=n.map((function(e){return c.a.createElement("div",{className:"client-box"},c.a.createElement("p",null,e.name),c.a.createElement("p",null,e.age))}));return c.a.createElement("div",null,c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"main-wrapper header-container"},c.a.createElement("p",null,"Client Status"),c.a.createElement(m.b,{to:"/login",className:"login-btn"},"Login"))),c.a.createElement("div",{className:"main-wrapper"},c.a.createElement("div",{className:"client-container"},n.length>0?i:c.a.createElement("h2",null,"NO CLIENT"))))}),f=n(16),E=n(13),b=function(e,t,n){var c=Object(a.useState)({name:"",age:"",id:""}),l=Object(r.a)(c,2),o=l[0],i=l[1],m=Object(a.useState)({name:"",age:"",id:""}),u=Object(r.a)(m,2),s=u[0],d=u[1],p=Object(a.useState)({name:"",password:""}),h=Object(r.a)(p,2),g=h[0],b=h[1];return{handleChange:function(e){var t=e.target,n=t.name,a=t.value;i(Object(E.a)(Object(E.a)({},o),{},Object(f.a)({},n,a)))},handleSubmit:function(t){t.preventDefault(),e()},client:o,handleEditChange:function(e){var t=e.target,n=t.name,a=t.value;d(Object(E.a)(Object(E.a)({},s),{},Object(f.a)({},n,a)))},handleGetEdit:function(e){d({name:e.name,age:e.age,id:e.id})},handleEditSubmit:function(e){e.preventDefault(),t()},editClient:s,handleLoginChange:function(e){var t=e.target,n=t.name,a=t.value;b(Object(E.a)(Object(E.a)({},g),{},Object(f.a)({},n,a))),console.log(g.name),console.log(g.password)},user:g}},v=function(e){var t=b((function(){u()})),n=t.user,a=t.handleLoginChange,l=t.handleSubmit;var o="admin",r="123456",u=function(){var t=n.name,a=n.password;t===o&&a===r&&(console.log("WELCOME admin"),e.login())};return"true"===e.isLogin?(console.log("you're login"),c.a.createElement(i.a,{to:"/admin"})):c.a.createElement("div",{className:"admin-login-container"},c.a.createElement("h1",null,"Admin Login"),c.a.createElement("div",{className:"form-container"},c.a.createElement("form",{className:"login-form",onSubmit:l},c.a.createElement("input",{type:"text",placeholder:"name",name:"name",value:n.name,onChange:a}),c.a.createElement("input",{type:"password",placeholder:"password",name:"password",value:n.password,onChange:a}),c.a.createElement("button",{type:"submit"},"login")),c.a.createElement(m.b,{to:"/",className:"login-home-btn"},"Go to Home Page")))},O=n(9),N=function(e){return c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"main-wrapper header-container"},c.a.createElement("p",null,"Client Status"),c.a.createElement("div",{className:"header-btn-wrapper"},c.a.createElement("div",{onClick:e.showAddForm},c.a.createElement(O.a,{icon:"plus-circle",size:"2x",className:"add-btn"}),c.a.createElement("p",null,"Add Client")),c.a.createElement("div",null,c.a.createElement(O.a,{icon:"info-circle",size:"2x"}),c.a.createElement("p",null,"Help")),c.a.createElement("div",{className:"logout-btn",title:"logout",onClick:e.loggedOut},c.a.createElement(O.a,{icon:"user-circle",size:"2x"}),c.a.createElement("p",null,"Logout")))))},w=function(e){return c.a.createElement("form",{className:"client-form",onSubmit:e.handleSubmit},c.a.createElement(O.a,{className:"close-btn",icon:"times-circle",size:"lg",title:"close form",onClick:e.closeAddForm}),c.a.createElement("h2",null,"Add Clients"),c.a.createElement("input",{name:"name",type:"text",placeholder:"name",value:e.clientName,onChange:e.handleChange}),c.a.createElement("input",{name:"age",type:"text",placeholder:"age",value:e.clientAge,onChange:e.handleChange}),c.a.createElement("input",{name:"id",type:"text",placeholder:"id",value:e.clientId,onChange:e.handleChange}),c.a.createElement("input",{type:"submit",placeholder:"submit"}))},j=function(e){return c.a.createElement("form",{className:"client-form",onSubmit:e.handleUpdateSubmit},c.a.createElement(O.a,{className:"close-btn",icon:"times-circle",size:"lg",title:"close form",onClick:e.closeUpdateForm}),c.a.createElement("h2",null,"Update Form"),c.a.createElement("input",{name:"name",type:"text",placeholder:"name",value:e.clientName,onChange:e.handleUpdateChange}),c.a.createElement("input",{name:"age",type:"text",placeholder:"age",value:e.clientAge,onChange:e.handleUpdateChange}),c.a.createElement("input",{type:"submit",placeholder:"submit"}))},C=function(e){var t=Object(a.useState)([]),n=Object(r.a)(t,2),l=n[0],o=n[1],i="".concat(window.location.protocol,"//").concat(window.location.hostname),m=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e})),t.current}(e.length),u=function(){var e=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i,"/clients/data"),e.next=3,h.a.get(t);case 3:n=e.sent,o(n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){u()}),[]),Object(a.useEffect)((function(){m!=l.length&&console.log("list updated"),u()}));var p=b((function(){G();var e={name:E.name,age:E.age,id:E.id};h.a.post("".concat(i,"/clients/data"),e).then((function(e){return console.log(e.data)}))}),(function(){D(),h.a.put("".concat(i,"/clients/data/").concat(S.id),S).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))})),g=p.handleChange,f=p.handleSubmit,E=p.client,v=p.handleEditChange,C=p.handleGetEdit,x=p.handleEditSubmit,S=p.editClient,y=Object(a.useState)(!1),k=Object(r.a)(y,2),A=k[0],L=k[1],U=Object(a.useState)(!1),z=Object(r.a)(U,2),F=z[0],I=z[1];console.log("current url: ".concat(i)),console.log("client list length: ".concat(m));var D=function(){I(!1)},G=function(){L(!1)};var H=l.map((function(e){return c.a.createElement("div",{className:"client-box",key:e.id},c.a.createElement("div",{className:"client-btn-wrapper"},c.a.createElement(O.a,{className:"client-btn",icon:"edit",size:"xs",title:"update client",onClick:function(t){t.preventDefault(),I(!0),C(e)}}),c.a.createElement(O.a,{className:"client-btn",icon:"trash",size:"xs",title:"delete client",onClick:function(t){var n;t.preventDefault(),n=e.id,h.a.delete("".concat(i,"/clients/data/").concat(n)).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))}})),c.a.createElement("p",null,e.name),c.a.createElement("p",null,e.age))}));return c.a.createElement("div",{className:"admin-container"},c.a.createElement("div",{className:"sidebar"}),c.a.createElement("div",{className:"main-container2"},c.a.createElement(N,{showAddForm:function(){L(!0)},loggedOut:function(){e.logout()}}),c.a.createElement("h2",null,"Hello Admin"),c.a.createElement("div",{className:"main-wrapper"},c.a.createElement("div",{className:"client-container"},l.length>0?H:c.a.createElement("h2",null,"NO CLIENT")))),c.a.createElement("div",{className:A?"client-form-container":"hide-form"},c.a.createElement(w,{handleSubmit:f,handleChange:g,closeAddForm:G,clientName:E.name,clientAge:E.age,clientId:E.id})),c.a.createElement("div",{className:F?"client-form-container":"hide-form"},c.a.createElement(j,{handleUpdateSubmit:x,handleUpdateChange:v,closeUpdateForm:D,clientName:S.name,clientAge:S.age})))},x=n(18),S=n(23),y=n(10);x.b.add(y.g,y.b,y.e,y.c,y.a,y.f,y.d);var k=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],l=t[1],o=new S.a,u=(function(e){var t=Object(a.useRef)();Object(a.useEffect)((function(){t.current=e})),t.current}(n),o.get("isLogin"));Object(a.useEffect)((function(){console.log("welcome")}),[]);var s=function(){o.set("isLogin",!0,{path:"/",expires:0}),l(u)},d=function(){o.set("isLogin",!1,{path:"/",expires:0}),l(u)};console.log(u);var p=function(e){return c.a.createElement(i.b,{path:e.path,render:function(t){return"true"===u?c.a.createElement(e.component,t):c.a.createElement(i.a,{to:{pathname:"/login"}})}})};return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null,c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:"/",component:g}),c.a.createElement(i.b,{exact:!0,path:"/login",component:function(){return c.a.createElement(v,{login:s,isLogin:u})}}),c.a.createElement(p,{exact:!0,path:"/admin",component:function(){return c.a.createElement(C,{logout:d})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.0be9824b.chunk.js.map