(this["webpackJsonpvoting-calc"]=this["webpackJsonpvoting-calc"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(6),r=n.n(l),o=(n(14),n(8)),u=n(4),i=n.n(u),s=n(7),m=n(1),b=(n(16),function(){var e=function(e,t){var n,a=localStorage.getItem(e);n="true"===a||"false"!==a&&t;var l=c.a.useState(n),r=Object(m.a)(l,2),o=r[0],u=r[1];return c.a.useEffect((function(){localStorage.setItem(e,o)}),[e,o]),[o,u]},t=Object(a.useState)([["Loading...",1]]),n=Object(m.a)(t,2),l=n[0],r=n[1],u=Object(a.useState)(0),b=Object(m.a)(u,2),d=b[0],f=b[1],h=Object(a.useState)("http://nymillennials.rocks"),v=Object(m.a)(h,2),p=v[0],O=v[1],j=Object(a.useState)("?"),E=Object(m.a)(j,2),y=E[0],g=E[1],w=Object(a.useState)({}),k=Object(m.a)(w,2),S=k[0],C=k[1],W=Object(a.useState)(0),M=Object(m.a)(W,2),x=M[0],I=M[1],N=Object(a.useState)(!1),T=Object(m.a)(N,2),V=T[0],B=T[1],F=Object(a.useState)("our team"),H=Object(m.a)(F,2),J=H[0],P=H[1],Y=Object(a.useState)([]),_=Object(m.a)(Y,2),z=_[0],D=_[1],G=Object(a.useState)(Math.floor(100*Math.random())+1),K=Object(m.a)(G,2),L=K[0],R=(K[1],Object(a.useState)(!1)),$=Object(m.a)(R,2),q=$[0],A=$[1],Q=Object(a.useState)([]),U=Object(m.a)(Q,2),X=U[0],Z=U[1],ee=Object(a.useState)([]),te=Object(m.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)(!1),le=Object(m.a)(ce,2),re=le[0],oe=le[1],ue=e("includeWills",!0),ie=Object(m.a)(ue,2),se=ie[0],me=ie[1],be=e("orderWimdys",!1),de=Object(m.a)(be,2),fe=de[0],he=de[1],ve=e("showWimdyPct",!1),pe=Object(m.a)(ve,2),Oe=pe[0],je=pe[1],Ee=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,a,c,l,o,u,s,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/voting-calc","/config.json"));case 2:return s=e.sent,e.next=5,s.json();case 5:m=e.sent,r(m.votetypes),O(null!==(t=m.guideurl)&&void 0!==t?t:"http://nymillennials.rocks"),g(null!==(n=m.season)&&void 0!==n?n:"?"),B(null!==(a=m.reverse)&&void 0!==a&&a),P(null!==(c=m.guideowner)&&void 0!==c?c:"our team"),D(null!==(l=m.idols)&&void 0!==l?l:[]),A(null!==(o=m.siesta)&&void 0!==o&&o),Z(null!==(u=m.wimdys)&&void 0!==u?u:[]);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){Ee()}),[]),Object(a.useEffect)((function(){X.length&&ae(fe?X:Object(o.a)(X).sort((function(){return Math.random()-.5})))}),[fe,X]),Object(a.useEffect)((function(){var e=d,t=l.map((function(e){var t=e.type,n=e.value;return se||"will"!==t?n:0})).reduce((function(e,t){return e+t}),0),n=1,a=0,c={};l.filter((function(e){return se||"will"!==e.type})).forEach((function(r,o){var u=r.label,i=r.value,s=r.includeInTotal;r.type;if(o===l.length-1)c[u]=e,s&&(a+=e);else{var m=i*(1/t),b=Math.round(m/n*e)||Math.min(e,1);c[u]=b,s&&(a+=b),n-=m,e-=c[u]}})),C(c),I(a)}),[d,l,se]);var ye=function(){for(var e=z[0],t=1;t<z.length;t++){if(z[t].value>=L)return e;e=z[t]}return e}();return c.a.createElement("div",{className:"container"},c.a.createElement("label",null,"How many votes do you have?"),c.a.createElement("input",{id:"votes",type:"number",inputMode:"numeric",pattern:"[0-9]*",min:"0",step:"1",value:d,onChange:function(e){return f(e.target.value)}}),c.a.createElement("button",{className:"showOptions",onClick:function(){return oe(!re)}},re?"Hide":"Show"," Options"),c.a.createElement("br",null),re&&c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("label",{className:"option"},c.a.createElement("input",{type:"checkbox",defaultChecked:se,onClick:function(){return me(!se)}})," Include Wills"),c.a.createElement("label",{className:"option"},c.a.createElement("input",{type:"checkbox",defaultChecked:fe,onClick:function(){return he(!fe)}})," Keep Wimdys In Order"),c.a.createElement("label",{className:"option"},c.a.createElement("input",{type:"checkbox",defaultChecked:Oe,onClick:function(){return je(!Oe)}})," Show Wimdy Percentage Split"),c.a.createElement("br",null)),c.a.createElement("br",null),(V?l.slice(0).reverse():l).sort((function(e,t){return e.order-t.order})).filter((function(e){return se||"will"!==e.type})).map((function(e){return function(e){var t,n,a=Oe&&X.length?" (~".concat((S["WIMDY!"]/X.length).toFixed(2)," votes each)"):"";return c.a.createElement("div",{key:"".concat(e.label),className:"voteType",style:{color:e.value>.8?"white":"black",backgroundColor:"hsl(".concat(115,", ").concat(100,"%, ").concat((n=e.value,45-30*n),"%)")}},"".concat(e.label+("wimdy"===e.type?" *":""),": ").concat(null!==(t=S[e.label])&&void 0!==t?t:0," vote").concat(1===S[e.label]?"":"s").concat("").concat("wimdy"===e.type?a:""))}(e)})),c.a.createElement("br",null),c.a.createElement("div",null,"Total Votes to Cast: ",x),!!z.length&&c.a.createElement("h2",null,"Idolize: ",c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.blaseball.com/player/".concat(ye.id)},ye.name)," (rolled ",L,")"),c.a.createElement("br",null),ne.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,"* Vote with your heart on any of the following: ",c.a.createElement("br",null),c.a.createElement("ul",null,ne.map((function(e){return c.a.createElement("li",{key:e},e)}))))):"",q?c.a.createElement("div",null,c.a.createElement("span",{style:{color:"red"}},"<3"),", The New York Millennials Voting Guide Team"):c.a.createElement("div",null,"Why these picks? ",c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:p},"Read ".concat(J,"'s awesome voting guide for Season ").concat(y,"!"))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.044decf1.chunk.js.map