(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e){e.exports=JSON.parse('[{"id":"20","name":"zoro","age":"21","dateCreated":"2020-06-20T14:30:22+08:00"},{"id":"2","name":"nami","age":"20","dateCreated":"2020-06-20T17:25:28+08:00"},{"id":"3","name":"usopp","age":"19","dateCreated":"2020-06-20T17:58:19+08:00"},{"id":"4","name":"sanji vinsmoke","age":"21","dateCreated":"2020-06-22T23:12:00+08:00"},{"id":"5","name":"chopper","age":"17","dateCreated":"2020-06-23T00:35:54+08:00"},{"id":"6","name":"robin","age":"30","dateCreated":"2020-06-23T00:36:20+08:00"},{"id":"7","name":"franky","age":"36","dateCreated":"2020-06-23T00:37:41+08:00"},{"id":"8","name":"brook","age":"90","dateCreated":"2020-06-23T00:37:57+08:00"},{"id":"9","name":"jinbe","age":"46","dateCreated":"2020-06-23T00:58:53+08:00"}]')},39:function(e,a,t){e.exports=t(69)},44:function(e,a,t){},45:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(36),o=t.n(l),i=(t(44),t(9)),r=(t(45),t(2)),m=t(11),d=t(23),s=t.n(d),u=t(37),p=t(14),g=t.n(p),h=t(21),E=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1],o="".concat(window.location.protocol,"//").concat(window.location.hostname);return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var a,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(o,"/clients/data"),e.next=3,g.a.get(a);case 3:t=e.sent,l(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(t),console.log(o),t.length,c.a.createElement("div",null,c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"main-wrapper header-container"},c.a.createElement("p",null,"Client Status"),c.a.createElement(m.b,{to:"/login",className:"login-btn"},"Login"))),c.a.createElement("div",{className:"main-wrapper"},c.a.createElement("div",{className:"client-container"})))},f=t(15),b=t(13),v=function(e,a,t){var c=Object(n.useState)({name:"",age:"",id:""}),l=Object(i.a)(c,2),o=l[0],r=l[1],m=Object(n.useState)({name:"",age:"",id:""}),d=Object(i.a)(m,2),s=d[0],u=d[1],p=Object(n.useState)({name:"",password:""}),g=Object(i.a)(p,2),h=g[0],E=g[1];return{handleChange:function(e){var a=e.target,t=a.name,n=a.value;r(Object(b.a)(Object(b.a)({},o),{},Object(f.a)({},t,n)))},handleSubmit:function(a){a.preventDefault(),e()},client:o,handleEditChange:function(e){var a=e.target,t=a.name,n=a.value;u(Object(b.a)(Object(b.a)({},s),{},Object(f.a)({},t,n)))},handleGetEdit:function(e){u({name:e.name,age:e.age,id:e.id})},handleEditSubmit:function(e){e.preventDefault(),a()},editClient:s,handleLoginChange:function(e){var a=e.target,t=a.name,n=a.value;E(Object(b.a)(Object(b.a)({},h),{},Object(f.a)({},t,n))),console.log(h.name),console.log(h.password)},user:h}},C=function(e){var a=v((function(){d()})),t=a.user,n=a.handleLoginChange,l=a.handleSubmit;var o="admin",i="123456",d=function(){var a=t.name,n=t.password;a===o&&n===i&&(console.log("WELCOME admin"),e.login())};return"true"===e.isLogin?(console.log("you're login"),c.a.createElement(r.a,{to:"/admin"})):c.a.createElement("div",{className:"admin-login-container"},c.a.createElement("h1",null,"Admin Login"),c.a.createElement("div",{className:"form-container"},c.a.createElement("form",{className:"login-form",onSubmit:l},c.a.createElement("input",{type:"text",placeholder:"name",name:"name",value:t.name,onChange:n}),c.a.createElement("input",{type:"password",placeholder:"password",name:"password",value:t.password,onChange:n}),c.a.createElement("button",{type:"submit"},"login")),c.a.createElement(m.b,{to:"/",className:"login-home-btn"},"Go to Home Page")))},w=t(8),N=function(e){return c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"main-wrapper header-container"},c.a.createElement("p",null,"Client Status"),c.a.createElement("div",{className:"header-btn-wrapper"},c.a.createElement("div",{onClick:e.showAddForm},c.a.createElement(w.a,{icon:"plus-circle",size:"2x",className:"add-btn"}),c.a.createElement("p",null,"Add Client")),c.a.createElement("div",null,c.a.createElement(w.a,{icon:"info-circle",size:"2x"}),c.a.createElement("p",null,"Help")),c.a.createElement("div",{className:"logout-btn",title:"logout",onClick:e.loggedOut},c.a.createElement(w.a,{icon:"user-circle",size:"2x"}),c.a.createElement("p",null,"Logout")))))},O=function(e){return c.a.createElement("form",{className:"client-form",onSubmit:e.handleSubmit},c.a.createElement(w.a,{className:"close-btn",icon:"times-circle",size:"lg",title:"close form",onClick:e.closeAddForm}),c.a.createElement("h2",null,"Add Clients"),c.a.createElement("input",{name:"name",type:"text",placeholder:"name",value:e.clientName,onChange:e.handleChange}),c.a.createElement("input",{name:"age",type:"text",placeholder:"age",value:e.clientAge,onChange:e.handleChange}),c.a.createElement("input",{name:"id",type:"text",placeholder:"id",value:e.clientId,onChange:e.handleChange}),c.a.createElement("input",{type:"submit",placeholder:"submit"}))},j=function(e){return c.a.createElement("form",{className:"client-form",onSubmit:e.handleUpdateSubmit},c.a.createElement(w.a,{className:"close-btn",icon:"times-circle",size:"lg",title:"close form",onClick:e.closeUpdateForm}),c.a.createElement("h2",null,"Update Form"),c.a.createElement("input",{name:"name",type:"text",placeholder:"name",value:e.clientName,onChange:e.handleUpdateChange}),c.a.createElement("input",{name:"age",type:"text",placeholder:"age",value:e.clientAge,onChange:e.handleUpdateChange}),c.a.createElement("input",{type:"submit",placeholder:"submit"}))},S=function(e){var a=v((function(){A();var e={name:o.name,age:o.age,id:o.id};g.a.post("".concat(y,"/clients/data"),e).then((function(e){return console.log(e.data)}))}),(function(){k(),g.a.put("".concat(y,"/clients/data/").concat(s.id),s).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))})),t=a.handleChange,l=a.handleSubmit,o=a.client,r=a.handleEditChange,m=a.handleGetEdit,d=a.handleEditSubmit,s=a.editClient,u=Object(n.useState)(!1),p=Object(i.a)(u,2),E=p[0],f=p[1],b=Object(n.useState)(!1),C=Object(i.a)(b,2),S=C[0],x=C[1],y="".concat(window.location.protocol,"//").concat(window.location.hostname);console.log("current url: ".concat(y));var k=function(){x(!1)},A=function(){f(!1)};var L=h.map((function(e){return c.a.createElement("div",{className:"client-box",key:e.id},c.a.createElement("div",{className:"client-btn-wrapper"},c.a.createElement(w.a,{className:"client-btn",icon:"edit",size:"xs",title:"update client",onClick:function(a){a.preventDefault(),x(!0),m(e)}}),c.a.createElement(w.a,{className:"client-btn",icon:"trash",size:"xs",title:"delete client",onClick:function(a){var t;a.preventDefault(),t=e.id,g.a.delete("".concat(y,"/clients/data/").concat(t)).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))}})),c.a.createElement("p",null,e.name),c.a.createElement("p",null,e.age))}));return c.a.createElement("div",{className:"admin-container"},c.a.createElement("div",{className:"sidebar"}),c.a.createElement("div",{className:"main-container2"},c.a.createElement(N,{showAddForm:function(){f(!0)},loggedOut:function(){e.logout()}}),c.a.createElement("h2",null,"Hello Admin"),c.a.createElement("div",{className:"main-wrapper"},c.a.createElement("div",{className:"client-container"},L))),c.a.createElement("div",{className:E?"client-form-container":"hide-form"},c.a.createElement(O,{handleSubmit:l,handleChange:t,closeAddForm:A,clientName:o.name,clientAge:o.age,clientId:o.id})),c.a.createElement("div",{className:S?"client-form-container":"hide-form"},c.a.createElement(j,{handleUpdateSubmit:d,handleUpdateChange:r,closeUpdateForm:k,clientName:s.name,clientAge:s.age})))},x=t(17),y=t(22),k=t(10);x.b.add(k.g,k.b,k.e,k.c,k.a,k.f,k.d);var A=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1],o=new y.a,d=(function(e){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e})),a.current}(t),o.get("isLogin"));Object(n.useEffect)((function(){console.log("welcome")}),[]);var s=function(){o.set("isLogin",!0,{path:"/",expires:0}),l(d)},u=function(){o.set("isLogin",!1,{path:"/",expires:0}),l(d)};console.log(d);var p=function(e){return c.a.createElement(r.b,{path:e.path,render:function(a){return"true"===d?c.a.createElement(e.component,a):c.a.createElement(r.a,{to:{pathname:"/login"}})}})};return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null,c.a.createElement(r.d,null,c.a.createElement(r.b,{exact:!0,path:"/",component:E}),c.a.createElement(r.b,{exact:!0,path:"/login",component:function(){return c.a.createElement(C,{login:s,isLogin:d})}}),c.a.createElement(p,{exact:!0,path:"/admin",component:function(){return c.a.createElement(S,{logout:u})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.71e04bd2.chunk.js.map