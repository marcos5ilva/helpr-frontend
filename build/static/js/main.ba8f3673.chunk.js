(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/logo.762b3ee6.svg"},30:function(e,t,a){e.exports=a.p+"static/media/heroes.4e9cbc65.png"},33:function(e,t,a){e.exports=a(66)},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=a(7),u=a(12),i=a(5),s=a.n(i),m=a(10),p=a(2),E=a(9),f=a(29),h=a.n(f).a.create({baseURL:"http://localhost:5555/"}),v=(a(56),a(11)),b=a.n(v),g=a(30),d=a.n(g),y=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(u.f)(),i=function(){var e=Object(m.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={id:a},e.prev=2,e.next=5,h.post("sessions",n);case 5:r=e.sent,localStorage.setItem("ngoId",a),localStorage.setItem("ngoName",r.data.name),l.push("/profile"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),alert("Login fail, please try again");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"logon-container"},r.a.createElement("section",{className:"form",onSubmit:i},r.a.createElement("img",{src:b.a,alt:"helpr logo"}),r.a.createElement("form",{action:""},r.a.createElement("h1",null,"Sign in to your account"),r.a.createElement("input",{placeholder:"Your ID",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Enter"),r.a.createElement(o.b,{className:"back-link",to:"/register"},r.a.createElement(E.b,{size:16,color:"#E02041"}),"Create your account"))),r.a.createElement("img",{src:d.a,alt:""}))},O=(a(62),function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(p.a)(l,2),f=i[0],v=i[1],g=Object(n.useState)(""),d=Object(p.a)(g,2),y=d[0],O=d[1],j=Object(n.useState)(""),x=Object(p.a)(j,2),S=x[0],N=x[1],k=Object(n.useState)(""),w=Object(p.a)(k,2),C=w[0],I=w[1],A=Object(u.f)();function D(){return(D=Object(m.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:a,email:f,whatsapp:y,city:S,state:C},e.prev=2,e.next=5,h.post("ngos",n);case 5:r=e.sent,alert("Your ID: ".concat(r.data.id)),A.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),alert("Register fail, please try again");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"register-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:b.a,alt:"helpr logo"}),r.a.createElement("h1",null,"Sign Up"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur."),r.a.createElement(o.b,{className:"back-link",to:"/"},r.a.createElement(E.a,{size:16,color:"#E02041"}),"Already have an account")),r.a.createElement("form",{onSubmit:function(e){return D.apply(this,arguments)}},r.a.createElement("input",{placeholder:"NGO name",type:"text",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{placeholder:"email",type:"text",value:f,onChange:function(e){return v(e.target.value)}}),r.a.createElement("input",{placeholder:"whatsapp",type:"text",value:y,onChange:function(e){return O(e.target.value)}}),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{placeholder:"city",type:"text",value:S,onChange:function(e){return N(e.target.value)}}),r.a.createElement("input",{placeholder:"province",type:"text",style:{width:120},value:C,onChange:function(e){return I(e.target.value)}})),r.a.createElement("button",{className:"button",type:"submit"},"Sign Up"))))}),j=(a(63),function(){var e=localStorage.getItem("ngoName"),t=localStorage.getItem("ngoId"),a=Object(u.f)(),c=Object(n.useState)([]),l=Object(p.a)(c,2),i=l[0],f=l[1];Object(n.useEffect)((function(){h.get("profile",{headers:{Authorization:t}}).then((function(e){f(e.data)}))}),[t]);var v=function(){var e=Object(m.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.delete("event/".concat(a),{headers:{Authorization:t}});case 3:f(i.filter((function(e){return e.id!==a}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Delete error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"profile-container"},r.a.createElement("header",null,r.a.createElement("img",{src:b.a,alt:"helpr logo"}),r.a.createElement("span",null,"Welcome ",e),r.a.createElement(o.b,{className:"button",to:"/events/new"},"Add new helpr event"),r.a.createElement("button",{type:"button",onClick:function(){localStorage.clear(),a.push("/")}},r.a.createElement(E.c,{size:18,color:"#e02041"}))),r.a.createElement("h1",null,"Registered Events"),r.a.createElement("ul",null,i.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("strong",null,"EVENT:"),r.a.createElement("p",null,e.title),r.a.createElement("strong",null,"DESCRIPTION:"),r.a.createElement("p",null,e.description),r.a.createElement("strong",null,"VALUE:"),r.a.createElement("p",null,Intl.NumberFormat("en-CA",{style:"currency",currency:"CAD"}).format(e.value)),r.a.createElement("button",{type:"button",onClick:function(){v(e.id)}},r.a.createElement(E.d,{size:20,color:"#a8a8b3"})))}))))}),x=(a(64),function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(p.a)(l,2),f=i[0],v=i[1],g=Object(n.useState)(""),d=Object(p.a)(g,2),y=d[0],O=d[1],j=localStorage.getItem("ngoId"),x=Object(u.f)(),S=function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:a,description:f,value:y},e.prev=2,e.next=5,h.post("event",n,{headers:{Authorization:j}});case 5:x.push("/profile"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert("Event creation fail, please try again");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"new-event-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:b.a,alt:"helpr logo"}),r.a.createElement("h1",null,"Add new case"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."),r.a.createElement(o.b,{className:"back-link",to:"/profile"},r.a.createElement(E.a,{size:16,color:"#E02041"}),"Back to home")),r.a.createElement("form",{onSubmit:S},r.a.createElement("input",{placeholder:"Case title",type:"text",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("textarea",{placeholder:"Description",type:"text",value:f,onChange:function(e){return v(e.target.value)}}),r.a.createElement("input",{placeholder:"Value $",type:"text",value:y,onChange:function(e){return O(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Add Event"))))}),S=function(){return r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:y}),r.a.createElement(u.a,{path:"/register",component:O}),r.a.createElement(u.a,{path:"/profile",component:j}),r.a.createElement(u.a,{path:"/events/new",component:x})))};a(65);var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.ba8f3673.chunk.js.map