(this["webpackJsonpweb-app-dashboard"]=this["webpackJsonpweb-app-dashboard"]||[]).push([[0],{193:function(e,a,t){e.exports=t.p+"static/media/icon-bell.a1b78de6.svg"},202:function(e,a,t){e.exports=t.p+"static/media/icon-dashboard.6e9bdcd2.svg"},203:function(e,a,t){e.exports=t.p+"static/media/icon-members.a7fdf16a.svg"},204:function(e,a,t){e.exports=t.p+"static/media/icon-settings.3df5f6f4.svg"},205:function(e,a,t){e.exports=t.p+"static/media/icon-visits.9da17580.svg"},226:function(e,a,t){e.exports=t(407)},248:function(e,a,t){},249:function(e,a,t){},378:function(e,a,t){},383:function(e,a,t){},384:function(e,a,t){},385:function(e,a,t){},386:function(e,a,t){},387:function(e,a,t){},388:function(e,a,t){},389:function(e,a,t){},403:function(e,a,t){},404:function(e,a,t){},405:function(e,a,t){},406:function(e,a,t){},407:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(42),s=t.n(c),l=t(45),i=t(122),o=t.n(i),m=t(191),u=t(44),d=t(192),_=t.n(d);t(248);function h(e){return r.a.createElement("div",{className:"container"},e.children)}var f=t(69),E=t(419),b=t(193),v=t.n(b);t(249);function p(e){var a,t=e.users,c=Object(n.useState)(!1),s=Object(u.a)(c,2),l=s[0],i=s[1];return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__brand"},"Your",r.a.createElement("span",{className:"header__brand--span"},"App"),r.a.createElement("sup",{className:"header__brand--extra"},"TM")),r.a.createElement("div",{className:"header__notification"},r.a.createElement(f.a,{floating:!0,size:"small",circular:!0,className:"header__notification--label",content:"3"}),r.a.createElement(E.a,{trigger:r.a.createElement("img",{src:v.a,alt:"bell",className:"header__notification--icon"}),content:"You have 3 unread messages",on:"click",position:"bottom right",open:l,onClose:function(){i(!1),clearTimeout(a)},onOpen:function(){i(!0),a=setTimeout((function(){i(!1)}),4e3)}})),function(){if(t.length){var e=t.filter((function(e,a){return 7===a})),a=e[0].name.first+" "+e[0].name.last,n=e[0].picture.medium;return r.a.createElement("div",{className:"header__profile"},r.a.createElement("img",{src:n,alt:"profile",className:"header__profile--img"}),r.a.createElement("h6",{className:"header__profile--title"},a))}return r.a.createElement("div",null,"Logging in...")}())}t(378);var g=t(202),N=t.n(g),k=t(203),C=t.n(k),y=t(204),x=t.n(y),T=t(205),S=t.n(T);function D(){return r.a.createElement("nav",{className:"navigation"},r.a.createElement(l.b,{to:"/",exact:!0,className:"navigation__item",activeClassName:"navigation__item--active"},r.a.createElement("img",{src:N.a,alt:"dashboard",className:"navigation__item--icon"})),r.a.createElement(l.b,{to:"/members",className:"navigation__item",activeClassName:"navigation__item--active"},r.a.createElement("img",{src:C.a,alt:"dashboard",className:"navigation__item--icon"})),r.a.createElement(l.b,{to:"/visits",className:"navigation__item",activeClassName:"navigation__item--active"},r.a.createElement("img",{src:S.a,alt:"dashboard",className:"navigation__item--icon"})),r.a.createElement(l.b,{to:"/settings",className:"navigation__item",activeClassName:"navigation__item--active"},r.a.createElement("img",{src:x.a,alt:"dashboard",className:"navigation__item--icon"})))}var O=t(130),j=t(53),B=t(54),w=t(55),M=t(57),W=t(59),A=t(58),G=(t(383),function(e){function a(){var e,t;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(w.a)(this,(e=Object(M.a)(a)).call.apply(e,[this].concat(c)))).state={chartData:{labels:["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"],datasets:[{data:[750,1250,1e3,2e3,1500,1750,1250,1850,2250,1500,2500],backgroundColor:"rgba(116,119,191,0.35)",borderWidth:1,lineTension:0,pointRadius:5,pointBackgroundColor:"#fff",pointBorderColor:"rgb(116,119,191)",pointBorderWidth:2}]},buttons:[{id:1,name:"Hourly",className:"line-chart__control--item"},{id:2,name:"Daily",className:"line-chart__control--item"},{id:3,name:"Weekly",className:"line-chart__control--item"},{id:4,name:"Monthly",className:"line-chart__control--item"}],activeBtn:3},t.handleClick=function(e){var a=t.state.chartData.datasets[0].data.map((function(e){return e+Math.floor(900*Math.random())}));t.setState((function(t){return{activeBtn:e,chartData:{labels:Object(O.a)(t.chartData.labels),datasets:[{data:Object(O.a)(a),backgroundColor:t.chartData.datasets[0].backgroundColor,borderWidth:t.chartData.datasets[0].borderWidth,lineTension:t.chartData.datasets[0].lineTension,pointRadius:t.chartData.datasets[0].pointRadius,pointBackgroundColor:t.chartData.datasets[0].pointBackgroundColor,pointBorderColor:t.chartData.datasets[0].pointBorderColor,pointBorderWidth:t.chartData.datasets[0].pointBorderWidth}]}}}))},t.renderButtons=function(){var e=t.state,a=e.buttons,n=e.activeBtn;return a.map((function(e){return r.a.createElement("li",{className:e.className+(e.id===n?" active":""),key:e.id,onClick:function(){return t.handleClick(e.id)}},e.name)}))},t}return Object(W.a)(a,e),Object(B.a)(a,[{key:"render",value:function(){var e=this.state.chartData;return r.a.createElement("div",{className:"line-chart"},r.a.createElement("h3",{className:"line-chart__title"},"Traffic"),r.a.createElement("ul",{className:"line-chart__control"},this.renderButtons()),r.a.createElement("div",{className:"line-chart__data"},r.a.createElement(A.c,{data:e,width:100,height:25,options:{legend:{hidden:!0,display:!1},tooltips:{enabled:!1},maintainAspectRatio:!0}})))}}]),a}(r.a.Component)),z=(t(384),{labels:["S","M","T","W","T","F","S"],datasets:[{data:[75,100,175,125,225,200,100],backgroundColor:"rgba(116,119,191)",borderWidth:1}]});function R(){return r.a.createElement("div",{className:"bar-chart"},r.a.createElement("h3",{className:"bar-chart__title"},"Daily Traffic"),r.a.createElement("div",{className:"bar-chart__data"},r.a.createElement(A.a,{data:z,options:{legend:{hidden:!0,display:!1},tooltips:{enabled:!1,cornerRadius:5}}})))}t(385);var P={labels:["Phones","Tablets","Desktop"],datasets:[{data:[10,15,75],backgroundColor:["#74b1bf","#81c98f","rgba(116,119,191)"],borderWidth:0}]},U={legend:{position:"right",labels:{boxWidth:16,fontSize:16,padding:20}},tooltips:{cornerRadius:5}};function q(){return r.a.createElement("div",{className:"doughnut"},r.a.createElement("h3",{className:"doughnut__title"},"Mobile Users"),r.a.createElement("div",{className:"doughnut__data"},r.a.createElement(A.b,{data:P,options:U})))}var F=t(46),L=(t(386),[{name:"Twitter",numbers:"10,345",icon:"twitter"},{name:"Facebook",numbers:"8,739",icon:"facebook f"},{name:"Google+",numbers:"2,530",icon:"google plus g"}]);function I(){return r.a.createElement("div",{className:"social"},r.a.createElement("h3",{className:"social__title"},"Social"),r.a.createElement("div",{className:"social__data"},L.map((function(e){return r.a.createElement("div",{key:e.name,className:"social__data__stats"},r.a.createElement("div",{className:"social__data__stats--icon"},r.a.createElement(F.a,{name:e.icon,size:"big"})),r.a.createElement("div",{className:"social__data__stats--content"},r.a.createElement("h4",{className:"social__data__stats--content--name"},e.name),r.a.createElement("p",{className:"social__data__stats--content--numbers"},e.numbers)))}))))}var J=t(121),Y=t.n(J),H=t(420);t(387);function V(e){var a=e.users.slice(1,5);return r.a.createElement("div",{className:"members"},r.a.createElement("h3",{className:"members__title"},"New Members"),r.a.createElement("div",{className:"members__data"},r.a.createElement(H.a.Group,{size:"big"},a.map((function(e){return r.a.createElement(H.a,{key:e.id.value},r.a.createElement(H.a.Avatar,{src:e.picture.medium,className:"members__data--avatar"}),r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Author,{as:"a"},e.name.first),r.a.createElement(H.a.Metadata,null,r.a.createElement("div",null,Y()(e.registered.date).format("L"))),r.a.createElement(H.a.Text,null,e.email)))})))))}t(388);function K(e){var a=e.users.slice(1,5);return r.a.createElement("div",{className:"activity"},r.a.createElement("h3",{className:"activity__title"},"Activity"),r.a.createElement("div",{className:"activity__data"},r.a.createElement(H.a.Group,{size:"big"},a.map((function(e){return r.a.createElement(H.a,{key:e.id.value},r.a.createElement(H.a.Avatar,{src:e.picture.medium,className:"members__data--avatar"}),r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Author,{as:"a"},e.name.first),r.a.createElement(H.a.Metadata,null,r.a.createElement("div",null,"2 days ago"),r.a.createElement("div",null,r.a.createElement(F.a,{name:"star"}),"5 Faves")),r.a.createElement(H.a.Text,null,"Commented on Facebook's change for 2016")))})))))}var Q=t(418);t(389);function X(){return r.a.createElement("div",{className:"users"},r.a.createElement("h3",{className:"users__title"},"Users"),r.a.createElement("div",{className:"users__form"},r.a.createElement(Q.a,null,r.a.createElement(Q.a.Group,{widths:"equal"},r.a.createElement(Q.a.Input,{fluid:!0,placeholder:"Search for User"})),r.a.createElement(Q.a.TextArea,{placeholder:"Message for User"}),r.a.createElement(Q.a.Button,{fluid:!0,id:"users__form--btn"},"Send"))))}t(403);var Z=[{key:"1",text:"(GMT-12:00) International Date Line West",value:"-12"},{key:"2",text:"(GMT-08:00) Pacific Time (US & Canada)",value:"-8"},{key:"3",text:"(GMT+03:00) Moscow, St. Petersburg, Volgograd",value:"+3"}];function $(){return r.a.createElement("div",{className:"settings"},r.a.createElement("h3",{className:"settings__title"},"Settings"),r.a.createElement("div",{className:"settings__form"},r.a.createElement(Q.a,null,r.a.createElement(Q.a.Checkbox,{toggle:!0,label:"Send Email Notifications",id:"settings__form--checkbox"}),r.a.createElement(Q.a.Checkbox,{toggle:!0,label:"Set Profile To Public"}),r.a.createElement(Q.a.Select,{options:Z,placeholder:"Select Timezone"}),r.a.createElement(Q.a.Group,{widths:"equal"},r.a.createElement(Q.a.Button,{fluid:!0,id:"setting__form--btn-1"},"Save"),r.a.createElement(Q.a.Button,{fluid:!0,id:"setting__form--btn-2"},"Cancel")))))}var ee=t(417);t(404);function ae(){return r.a.createElement("div",{className:"search"},r.a.createElement(ee.a,{icon:"search",placeholder:"Search...",className:"search__input"}))}t(405);var te=t(421),ne=(t(406),function(){var e=Object(n.useState)(!0),a=Object(u.a)(e,2),t=a[0],c=a[1];return t?r.a.createElement(te.a,{onDismiss:function(){c(!1),setTimeout((function(){c(!0)}),3e3)},floating:!0,content:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",className:"alert__message"}):r.a.createElement("div",{style:{display:"none"}})});function re(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement("h2",{className:"dashboard__title"},"Dashboard"),r.a.createElement("div",{className:"dashboard__box"},r.a.createElement(ae,null)),r.a.createElement("div",{className:"dashboard__alert"},r.a.createElement(ne,null)))}var ce=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(""),l=Object(u.a)(s,2),i=(l[0],l[1]);Object(n.useEffect)((function(){d()}),[]);var d=function(){var e=Object(m.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("https://randomuser.me/api/?results=10&inc=name,email,picture,registered,id&nat=us");case 3:a=e.sent,c(a.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return console.log(t),r.a.createElement(h,null,r.a.createElement(p,{users:t}),r.a.createElement(D,null),r.a.createElement(re,null),r.a.createElement(G,null),r.a.createElement(R,null),r.a.createElement(q,null),r.a.createElement(I,null),r.a.createElement(V,{users:t}),r.a.createElement(K,{users:t}),r.a.createElement(X,null),r.a.createElement($,null))};s.a.render(r.a.createElement(l.a,{basename:"dashboard"},r.a.createElement(ce,null)),document.querySelector("#root"))}},[[226,1,2]]]);
//# sourceMappingURL=main.4c9a32b0.chunk.js.map