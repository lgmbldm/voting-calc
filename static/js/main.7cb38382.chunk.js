(this["webpackJsonpvoting-calc"]=this["webpackJsonpvoting-calc"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),l=n.n(o),r=(n(11),n(2)),u=n.n(r),i=n(5),s=n(1),b=(n(13),function(){var e=Object(a.useState)([["Loading...",1]]),t=Object(s.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(0),r=Object(s.a)(l,2),b=r[0],v=r[1],m=Object(a.useState)("http://nymillennials.rocks"),f=Object(s.a)(m,2),d=f[0],h=f[1],p=Object(a.useState)("?"),g=Object(s.a)(p,2),j=g[0],O=g[1],E=Object(a.useState)({}),w=Object(s.a)(E,2),y=w[0],k=w[1],S=Object(a.useState)(0),M=Object(s.a)(S,2),x=M[0],W=M[1],C=Object(a.useState)(!1),I=Object(s.a)(C,2),N=I[0],T=I[1],B=Object(a.useState)("our team"),J=Object(s.a)(B,2),_=J[0],z=J[1],H=Object(a.useState)(!0),L=Object(s.a)(H,2),R=L[0],V=L[1],$=Object(a.useState)([]),q=Object(s.a)($,2),A=q[0],D=q[1],F=Object(a.useState)(Math.floor(100*Math.random())+1),G=Object(s.a)(F,2),K=G[0],P=(G[1],function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,a,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/voting-calc","/config.json"));case 2:return c=e.sent,e.next=5,c.json();case 5:l=e.sent,o(l.votetypes),h(l.guideurl),O(l.season),T(null!==(t=l.reverse)&&void 0!==t&&t),z(null!==(n=l.guideowner)&&void 0!==n?n:"our team"),D(null!==(a=l.idols)&&void 0!==a?a:[]);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(a.useEffect)((function(){P()}),[]),Object(a.useEffect)((function(){var e=b,t=n.map((function(e){var t=e.type,n=e.value;return R||"will"!==t?n:0})).reduce((function(e,t){return e+t}),0),a=1,c=0,o={};n.filter((function(e){return R||"will"!==e.type})).forEach((function(l,r){var u=l.label,i=l.value,s=l.includeInTotal;l.type;if(r===n.length-1)o[u]=e,s&&(c+=e);else{console.log(u,i);var b=i*(1/t);console.log(b);var v=Math.round(b/a*e);console.log(v);var m=v||Math.min(e,1);o[u]=m,s&&(c+=m,console.log("adding to total",m)),a-=b,e-=o[u]}})),k(o),W(c)}),[b,n,R]);var Q=function(){for(var e=A[0],t=1;t<A.length;t++){if(A[t].value>=K)return e;e=A[t]}return e}();return c.a.createElement("div",{className:"container"},c.a.createElement("label",null,"How many votes do you have?"),c.a.createElement("input",{id:"votes",type:"number",inputMode:"numeric",pattern:"[0-9]*",min:"0",step:"1",value:b,onChange:function(e){return v(e.target.value)}}),c.a.createElement("label",{className:"includeWills"},c.a.createElement("input",{type:"checkbox",checked:R,onClick:function(){return V(!R)}})," Include Wills?"),c.a.createElement("br",null),c.a.createElement("br",null),(N?n.slice(0).reverse():n).filter((function(e){return R||"will"!==e.type})).map((function(e){var t,n;return c.a.createElement("div",{key:e.label,className:"voteType",style:{color:e.value>.8?"white":"black",backgroundColor:"hsl(".concat(115,", ").concat(100,"%, ").concat((n=e.value,45-30*n),"%)")}},"".concat(e.label,": ").concat(null!==(t=y[e.label])&&void 0!==t?t:0," vote").concat(1===y[e.label]?"":"s"))})),c.a.createElement("br",null),c.a.createElement("div",null,"Total Votes to Cast: ",x),!!A.length&&c.a.createElement("h2",null,"Idolize: ",c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.blaseball.com/player/".concat(Q.id)},Q.name)," (rolled ",K,")"),c.a.createElement("br",null),c.a.createElement("div",null,"Why these picks? ",c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:d},"Read ".concat(_,"'s awesome voting guide for Season ").concat(j,"!"))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.7cb38382.chunk.js.map