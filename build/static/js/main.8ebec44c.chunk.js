(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e){e.exports=JSON.parse("{}")},39:function(e,t,a){e.exports=a(69)},44:function(e,t,a){},45:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(37),o=a.n(l),i=(a(44),a(4)),r=(a(45),a(2)),m=a(14),s=a(15),u=a.n(s),d=a(20),p=a(11),h=a.n(p),f=(a(35),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],o="".concat(window.location.protocol,"//").concat(window.location.hostname);Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/clients/data"),e.next=3,h.a.get(t);case 3:a=e.sent,l(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var r=a.map((function(e){return c.a.createElement("div",{className:"client-box"},c.a.createElement("p",null,e.name),c.a.createElement("p",null,e.age))}));return c.a.createElement("div",null,c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"main-wrapper header-container"},c.a.createElement("p",null,"Client Status"),c.a.createElement(m.b,{to:"/login",className:"login-btn"},"Login"))),c.a.createElement("div",{className:"main-wrapper"},c.a.createElement("div",{className:"client-container"},a.length>0?r:c.a.createElement("h2",null,"NO CLIENT"))))}),E=a(16),g=a(13),b=function(e,t,a){var c=Object(n.useState)({name:"",age:"",id:""}),l=Object(i.a)(c,2),o=l[0],r=l[1],m=Object(n.useState)({name:"",age:"",id:""}),s=Object(i.a)(m,2),u=s[0],d=s[1],p=Object(n.useState)({name:"",password:""}),h=Object(i.a)(p,2),f=h[0],b=h[1];return{handleChange:function(e){var t=e.target,a=t.name,n=t.value;r(Object(g.a)(Object(g.a)({},o),{},Object(E.a)({},a,n)))},handleSubmit:function(t){t.preventDefault(),e()},client:o,handleEditChange:function(e){var t=e.target,a=t.name,n=t.value;d(Object(g.a)(Object(g.a)({},u),{},Object(E.a)({},a,n)))},handleGetEdit:function(e){d({name:e.name,age:e.age,id:e.id})},handleEditSubmit:function(e){e.preventDefault(),t()},editClient:u,handleLoginChange:function(e){var t=e.target,a=t.name,n=t.value;b(Object(g.a)(Object(g.a)({},f),{},Object(E.a)({},a,n))),console.log(f.name),console.log(f.password)},user:f}},v=function(e){var t=b((function(){s()})),a=t.user,n=t.handleLoginChange,l=t.handleSubmit,o="admin",i="123456";if("true"===e.isLogin)return c.a.createElement(r.a,{to:"/admin"});var s=function(){var t=a.name,n=a.password;t===o&&n===i&&(console.log("WELCOME admin"),e.login())};return c.a.createElement("div",{className:"admin-login-container"},c.a.createElement("h1",null,"Admin Login"),c.a.createElement("div",{className:"form-container"},c.a.createElement("form",{className:"login-form",onSubmit:l},c.a.createElement("input",{type:"text",placeholder:"name",name:"name",value:a.name,onChange:n}),c.a.createElement("input",{type:"password",placeholder:"password",name:"password",value:a.password,onChange:n}),c.a.createElement("button",{type:"submit"},"login")),c.a.createElement(m.b,{to:"/",className:"login-home-btn"},"Go to Home Page")))},O=a(8),N=function(e){return c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"main-wrapper header-container"},c.a.createElement("p",null,"Client Status"),c.a.createElement("div",{className:"header-btn-wrapper"},c.a.createElement("div",{onClick:e.showAddForm},c.a.createElement(O.a,{icon:"plus-circle",size:"2x",className:"add-btn"}),c.a.createElement("p",null,"Add Client")),c.a.createElement("div",null,c.a.createElement(O.a,{icon:"info-circle",size:"2x"}),c.a.createElement("p",null,"Help")),c.a.createElement("div",{className:"logout-btn",title:"logout",onClick:e.loggedOut},c.a.createElement(O.a,{icon:"user-circle",size:"2x"}),c.a.createElement("p",null,"Logout")))))},j=function(e){return c.a.createElement("form",{className:"client-form",onSubmit:e.handleSubmit},c.a.createElement(O.a,{className:"close-btn",icon:"times-circle",size:"lg",title:"close form",onClick:e.closeAddForm}),c.a.createElement("h2",null,"Add Clients"),c.a.createElement("input",{name:"name",type:"text",placeholder:"name",value:e.clientName,onChange:e.handleChange}),c.a.createElement("input",{name:"age",type:"text",placeholder:"age",value:e.clientAge,onChange:e.handleChange}),c.a.createElement("input",{name:"id",type:"text",placeholder:"id",value:e.clientId,onChange:e.handleChange}),c.a.createElement("input",{type:"submit",placeholder:"submit"}))},w=function(e){return c.a.createElement("form",{className:"client-form",onSubmit:e.handleUpdateSubmit},c.a.createElement(O.a,{className:"close-btn",icon:"times-circle",size:"lg",title:"close form",onClick:e.closeUpdateForm}),c.a.createElement("h2",null,"Update Form"),c.a.createElement("input",{name:"name",type:"text",placeholder:"name",value:e.clientName,onChange:e.handleUpdateChange}),c.a.createElement("input",{name:"age",type:"text",placeholder:"age",value:e.clientAge,onChange:e.handleUpdateChange}),c.a.createElement("input",{type:"submit",placeholder:"submit"}))},C=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],o=a[1],r="".concat(window.location.protocol,"//").concat(window.location.hostname),m=(function(e){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e})),t.current}(e.length),function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(r,"/clients/data"),e.next=3,h.a.get(t);case 3:a=e.sent,o(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(n.useEffect)((function(){m()}),[]);var s=b((function(){R();var e={name:E.name,age:E.age,id:E.id};h.a.post("".concat(r,"/clients/data"),e).then((function(e){console.log(e.data),m(),B(!0)})).catch((function(e){return console.log(e)}))}),(function(){M(),h.a.put("".concat(r,"/clients/data/").concat(S.id),S).then((function(e){console.log(e.data),m()})).catch((function(e){return console.log(e)}))})),p=s.handleChange,f=s.handleSubmit,E=s.client,g=s.handleEditChange,v=s.handleGetEdit,C=s.handleEditSubmit,S=s.editClient,x=Object(n.useState)(!1),y=Object(i.a)(x,2),k=y[0],A=y[1],L=Object(n.useState)(!1),z=Object(i.a)(L,2),U=z[0],F=z[1],I=Object(n.useState)(""),D=Object(i.a)(I,2),G=D[0],H=(D[1],Object(n.useState)(!1)),J=Object(i.a)(H,2),W=J[0],B=J[1],M=function(){F(!1)},R=function(){A(!1)};var T=l.map((function(e){return c.a.createElement("div",{className:"client-box",key:e.id},c.a.createElement("div",{className:"client-btn-wrapper"},c.a.createElement(O.a,{className:"client-btn",icon:"edit",size:"xs",title:"update client",onClick:function(t){t.preventDefault(),F(!0),v(e)}}),c.a.createElement(O.a,{className:"client-btn",icon:"trash",size:"xs",title:"delete client",onClick:function(t){var a;t.preventDefault(),a=e.id,h.a.delete("".concat(r,"/clients/data/").concat(a)).then((function(e){console.log(e.data),m()})).catch((function(e){return console.log(e)}))}})),c.a.createElement("p",null,e.name),c.a.createElement("p",null,e.age))}));return c.a.createElement("div",{className:"admin-container"},c.a.createElement("div",{className:"sidebar"}),c.a.createElement("div",{className:"main-container2"},c.a.createElement(N,{showAddForm:function(){A(!0)},loggedOut:function(){e.logout()}}),c.a.createElement("h2",null,"Hello Admin"),c.a.createElement("div",{className:"main-wrapper"},c.a.createElement("div",{className:"client-container"},l.length>0?T:c.a.createElement("h2",null,"NO CLIENT")))),c.a.createElement("div",{className:k?"client-form-container":"hide-form"},c.a.createElement(j,{handleSubmit:f,handleChange:p,closeAddForm:R,clientName:E.name,clientAge:E.age,clientId:E.id})),c.a.createElement("div",{className:U?"client-form-container":"hide-form"},c.a.createElement(w,{handleUpdateSubmit:C,handleUpdateChange:g,closeUpdateForm:M,clientName:S.name,clientAge:S.age})),c.a.createElement("div",{className:W?"client-form-container":"hide-form"},c.a.createElement("div",{className:"client-form"},c.a.createElement(O.a,{className:"close-btn",icon:"times-circle",size:"lg",title:"close form",onClick:void B(!1)}),c.a.createElement("p",null,G))))},S=a(18),x=a(23),y=a(10);S.b.add(y.g,y.b,y.e,y.c,y.a,y.f,y.d);var k=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],o=new x.a,s=(function(e){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e})),t.current}(a),o.get("isLogin"));Object(n.useEffect)((function(){console.log("welcome")}),[]);var u=function(){o.set("isLogin",!0,{path:"/",expires:0}),l(s)},d=function(){o.set("isLogin",!1,{path:"/",expires:0}),l(s)};console.log(s);var p=function(e){return c.a.createElement(r.b,{path:e.path,render:function(t){return"true"===s?c.a.createElement(e.component,t):c.a.createElement(r.a,{to:{pathname:"/login"}})}})};return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null,c.a.createElement(r.d,null,c.a.createElement(r.b,{exact:!0,path:"/",component:f}),c.a.createElement(r.b,{exact:!0,path:"/login",component:function(){return c.a.createElement(v,{login:u,isLogin:s})}}),c.a.createElement(p,{exact:!0,path:"/admin",component:function(){return c.a.createElement(C,{logout:d})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.8ebec44c.chunk.js.map