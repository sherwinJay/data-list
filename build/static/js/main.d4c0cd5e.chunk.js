(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"id":"20","name":"zoro","age":"21","dateCreated":"2020-06-20T14:30:22+08:00"},{"id":"2","name":"nami","age":"20","dateCreated":"2020-06-20T17:25:28+08:00"},{"id":"3","name":"usopp","age":"19","dateCreated":"2020-06-20T17:58:19+08:00"},{"id":"4","name":"sanji vinsmoke","age":"21","dateCreated":"2020-06-22T23:12:00+08:00"},{"id":"5","name":"chopper","age":"17","dateCreated":"2020-06-23T00:35:54+08:00"},{"id":"6","name":"robin","age":"30","dateCreated":"2020-06-23T00:36:20+08:00"},{"id":"7","name":"franky","age":"36","dateCreated":"2020-06-23T00:37:41+08:00"},{"id":"8","name":"brook","age":"90","dateCreated":"2020-06-23T00:37:57+08:00"},{"id":"9","name":"jinbe","age":"46","dateCreated":"2020-06-23T00:58:53+08:00"}]')},37:function(e,a,t){e.exports=t(66)},42:function(e,a,t){},43:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(35),i=t.n(l),o=(t(42),t(9)),r=(t(43),t(2)),m=t(13),d=t(18),s=function(){var e=d.map((function(e){return c.a.createElement("div",{className:"client-box"},c.a.createElement("p",null,e.name),c.a.createElement("p",null,e.age))}));return c.a.createElement("div",null,c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"main-wrapper header-container"},c.a.createElement("p",null,"Client Status"),c.a.createElement(m.b,{to:"/login",className:"login-btn"},"Login"))),c.a.createElement("div",{className:"main-wrapper"},c.a.createElement("div",{className:"client-container"},e)))},u=t(14),p=t(12),g=function(e,a,t){var c=Object(n.useState)({name:"",age:"",id:""}),l=Object(o.a)(c,2),i=l[0],r=l[1],m=Object(n.useState)({name:"",age:"",id:""}),d=Object(o.a)(m,2),s=d[0],g=d[1],h=Object(n.useState)({name:"",password:""}),E=Object(o.a)(h,2),f=E[0],b=E[1];return{handleChange:function(e){var a=e.target,t=a.name,n=a.value;r(Object(p.a)(Object(p.a)({},i),{},Object(u.a)({},t,n)))},handleSubmit:function(a){a.preventDefault(),e()},client:i,handleEditChange:function(e){var a=e.target,t=a.name,n=a.value;g(Object(p.a)(Object(p.a)({},s),{},Object(u.a)({},t,n)))},handleGetEdit:function(e){g({name:e.name,age:e.age,id:e.id})},handleEditSubmit:function(e){e.preventDefault(),a()},editClient:s,handleLoginChange:function(e){var a=e.target,t=a.name,n=a.value;b(Object(p.a)(Object(p.a)({},f),{},Object(u.a)({},t,n))),console.log(f.name),console.log(f.password)},user:f}},h=function(e){var a=g((function(){d()})),t=a.user,n=a.handleLoginChange,l=a.handleSubmit;var i="admin",o="123456",d=function(){var a=t.name,n=t.password;a===i&&n===o&&(console.log("WELCOME admin"),e.login())};return"true"===e.isLogin?(console.log("you're login"),c.a.createElement(r.a,{to:"/admin"})):c.a.createElement("div",{className:"admin-login-container"},c.a.createElement("h1",null,"Admin Login"),c.a.createElement("div",{className:"form-container"},c.a.createElement("form",{className:"login-form",onSubmit:l},c.a.createElement("input",{type:"text",placeholder:"name",name:"name",value:t.name,onChange:n}),c.a.createElement("input",{type:"password",placeholder:"password",name:"password",value:t.password,onChange:n}),c.a.createElement("button",{type:"submit"},"login")),c.a.createElement(m.b,{to:"/",className:"login-home-btn"},"Go to Home Page")))},E=t(8),f=t(19),b=t.n(f),v=function(e){return c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"main-wrapper header-container"},c.a.createElement("p",null,"Client Status"),c.a.createElement("div",{className:"header-btn-wrapper"},c.a.createElement("div",{onClick:e.showAddForm},c.a.createElement(E.a,{icon:"plus-circle",size:"2x",className:"add-btn"}),c.a.createElement("p",null,"Add Client")),c.a.createElement("div",null,c.a.createElement(E.a,{icon:"info-circle",size:"2x"}),c.a.createElement("p",null,"Help")),c.a.createElement("div",{className:"logout-btn",title:"logout",onClick:e.loggedOut},c.a.createElement(E.a,{icon:"user-circle",size:"2x"}),c.a.createElement("p",null,"Logout")))))},C=function(e){return c.a.createElement("form",{className:"client-form",onSubmit:e.handleSubmit},c.a.createElement(E.a,{className:"close-btn",icon:"times-circle",size:"lg",title:"close form",onClick:e.closeAddForm}),c.a.createElement("h2",null,"Add Clients"),c.a.createElement("input",{name:"name",type:"text",placeholder:"name",value:e.clientName,onChange:e.handleChange}),c.a.createElement("input",{name:"age",type:"text",placeholder:"age",value:e.clientAge,onChange:e.handleChange}),c.a.createElement("input",{name:"id",type:"text",placeholder:"id",value:e.clientId,onChange:e.handleChange}),c.a.createElement("input",{type:"submit",placeholder:"submit"}))},N=function(e){return c.a.createElement("form",{className:"client-form",onSubmit:e.handleUpdateSubmit},c.a.createElement(E.a,{className:"close-btn",icon:"times-circle",size:"lg",title:"close form",onClick:e.closeUpdateForm}),c.a.createElement("h2",null,"Update Form"),c.a.createElement("input",{name:"name",type:"text",placeholder:"name",value:e.clientName,onChange:e.handleUpdateChange}),c.a.createElement("input",{name:"age",type:"text",placeholder:"age",value:e.clientAge,onChange:e.handleUpdateChange}),c.a.createElement("input",{type:"submit",placeholder:"submit"}))},w=function(e){var a=g((function(){A();var e={name:i.name,age:i.age,id:i.id};b.a.post("".concat(y,":5000/clients/data"),e).then((function(e){return console.log(e.data)}))}),(function(){k(),b.a.put("".concat(y,":5000/clients/data/").concat(u.id),u).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))})),t=a.handleChange,l=a.handleSubmit,i=a.client,r=a.handleEditChange,m=a.handleGetEdit,s=a.handleEditSubmit,u=a.editClient,p=Object(n.useState)(!1),h=Object(o.a)(p,2),f=h[0],w=h[1],O=Object(n.useState)(!1),j=Object(o.a)(O,2),S=j[0],x=j[1],y="".concat(window.location.protocol,"//").concat(window.location.hostname);console.log("current url: ".concat(y));var k=function(){x(!1)},A=function(){w(!1)};var L=d.map((function(e){return c.a.createElement("div",{className:"client-box",key:e.id},c.a.createElement("div",{className:"client-btn-wrapper"},c.a.createElement(E.a,{className:"client-btn",icon:"edit",size:"xs",title:"update client",onClick:function(a){a.preventDefault(),x(!0),m(e)}}),c.a.createElement(E.a,{className:"client-btn",icon:"trash",size:"xs",title:"delete client",onClick:function(a){var t;a.preventDefault(),t=e.id,b.a.delete("".concat(y,":5000/clients/data/").concat(t)).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))}})),c.a.createElement("p",null,e.name),c.a.createElement("p",null,e.age))}));return c.a.createElement("div",{className:"admin-container"},c.a.createElement("div",{className:"sidebar"}),c.a.createElement("div",{className:"main-container2"},c.a.createElement(v,{showAddForm:function(){w(!0)},loggedOut:function(){e.logout()}}),c.a.createElement("h2",null,"Hello Admin"),c.a.createElement("div",{className:"main-wrapper"},c.a.createElement("div",{className:"client-container"},L))),c.a.createElement("div",{className:f?"client-form-container":"hide-form"},c.a.createElement(C,{handleSubmit:l,handleChange:t,closeAddForm:A,clientName:i.name,clientAge:i.age,clientId:i.id})),c.a.createElement("div",{className:S?"client-form-container":"hide-form"},c.a.createElement(N,{handleUpdateSubmit:s,handleUpdateChange:r,closeUpdateForm:k,clientName:u.name,clientAge:u.age})))},O=t(16),j=t(22),S=t(10);O.b.add(S.g,S.b,S.e,S.c,S.a,S.f,S.d);var x=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1],i=new j.a,d=(function(e){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e})),a.current}(t),i.get("isLogin"));Object(n.useEffect)((function(){console.log("welcome")}),[]);var u=function(){i.set("isLogin",!0,{path:"/",expires:0}),l(d)},p=function(){i.set("isLogin",!1,{path:"/",expires:0}),l(d)};console.log(d);var g=function(e){return c.a.createElement(r.b,{path:e.path,render:function(a){return"true"===d?c.a.createElement(e.component,a):c.a.createElement(r.a,{to:{pathname:"/login"}})}})};return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null,c.a.createElement(r.d,null,c.a.createElement(r.b,{exact:!0,path:"/",component:s}),c.a.createElement(r.b,{exact:!0,path:"/login",component:function(){return c.a.createElement(h,{login:u,isLogin:d})}}),c.a.createElement(g,{exact:!0,path:"/admin",component:function(){return c.a.createElement(w,{logout:p})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.d4c0cd5e.chunk.js.map