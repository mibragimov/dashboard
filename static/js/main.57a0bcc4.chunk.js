(this["webpackJsonpweb-app-dashboard"]=this["webpackJsonpweb-app-dashboard"]||[]).push([[0],{195:function(e,a,t){e.exports=t.p+"static/media/icon-bell.a1b78de6.svg"},204:function(e,a,t){e.exports=t.p+"static/media/icon-dashboard.6e9bdcd2.svg"},205:function(e,a,t){e.exports=t.p+"static/media/icon-members.a7fdf16a.svg"},206:function(e,a,t){e.exports=t.p+"static/media/icon-settings.3df5f6f4.svg"},207:function(e,a,t){e.exports=t.p+"static/media/icon-visits.9da17580.svg"},230:function(e,a,t){e.exports=t(411)},252:function(e,a,t){},253:function(e,a,t){},382:function(e,a,t){},387:function(e,a,t){},388:function(e,a,t){},389:function(e,a,t){},390:function(e,a,t){},391:function(e,a,t){},392:function(e,a,t){},393:function(e,a,t){},398:function(e,a,t){},408:function(e,a,t){},409:function(e,a,t){},410:function(e,a,t){},411:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(49),s=t.n(c),i=t(51),l=t(123),o=t.n(l),m=t(193),u=t(20),d=t(194),h=t.n(d);t(252);function _(e){return r.a.createElement("div",{className:"container"},e.children)}var f=t(73),v=t(423),b=t(195),E=t.n(b);t(253);function p(e){var a,t=e.users,c=Object(n.useState)(!1),s=Object(u.a)(c,2),i=s[0],l=s[1],o=Object(n.useState)(!0),m=Object(u.a)(o,2),d=m[0],h=m[1];return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__brand"},"Your",r.a.createElement("span",{className:"header__brand--span"},"App"),r.a.createElement("sup",{className:"header__brand--extra"},"TM")),r.a.createElement("div",{className:"header__notification"},d&&r.a.createElement(f.a,{floating:!0,size:"small",circular:!0,className:"header__notification--label",content:"3"}),r.a.createElement(v.a,{trigger:r.a.createElement("img",{src:E.a,alt:"bell",className:"header__notification--icon"}),content:"You have 3 unread messages",on:"click",position:"bottom right",open:i,onClose:function(){l(!1),h(!1),clearTimeout(a)},onOpen:function(){l(!0),a=setTimeout((function(){l(!1),h(!0)}),4e3)}})),function(){if(t.length){var e=t.filter((function(e,a){return 7===a})),a=e[0].name.first+" "+e[0].name.last,n=e[0].picture.medium;return r.a.createElement("div",{className:"header__profile"},r.a.createElement("img",{src:n,alt:"profile",className:"header__profile--img"}),r.a.createElement("h6",{className:"header__profile--title"},a))}return r.a.createElement("div",null,"Logging in...")}())}t(382);var g=t(204),N=t.n(g),k=t(205),O=t.n(k),S=t(206),j=t.n(S),C=t(207),y=t.n(C);function x(){return r.a.createElement("nav",{className:"navigation"},r.a.createElement(i.b,{to:"/",exact:!0,className:"navigation__item",activeClassName:"navigation__item--active"},r.a.createElement("img",{src:N.a,alt:"dashboard",className:"navigation__item--icon"})),r.a.createElement(i.b,{to:"/members",className:"navigation__item",activeClassName:"navigation__item--active"},r.a.createElement("img",{src:O.a,alt:"dashboard",className:"navigation__item--icon"})),r.a.createElement(i.b,{to:"/visits",className:"navigation__item",activeClassName:"navigation__item--active"},r.a.createElement("img",{src:y.a,alt:"dashboard",className:"navigation__item--icon"})),r.a.createElement(i.b,{to:"/settings",className:"navigation__item",activeClassName:"navigation__item--active"},r.a.createElement("img",{src:j.a,alt:"dashboard",className:"navigation__item--icon"})))}var T=t(132),w=t(28),D=t(29),B=t(30),M=t(31),R=t(32),W=t(60),A=(t(387),function(e){function a(){var e,t;Object(w.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(B.a)(this,(e=Object(M.a)(a)).call.apply(e,[this].concat(c)))).state={chartData:{labels:["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"],datasets:[{data:[750,1250,1e3,2e3,1500,1750,1250,1850,2250,1500,2500],backgroundColor:"rgba(116,119,191,0.35)",borderWidth:1,lineTension:0,pointRadius:5,pointBackgroundColor:"#fff",pointBorderColor:"rgb(116,119,191)",pointBorderWidth:2}]},buttons:[{id:1,name:"Hourly",className:"line-chart__control--item"},{id:2,name:"Daily",className:"line-chart__control--item"},{id:3,name:"Weekly",className:"line-chart__control--item"},{id:4,name:"Monthly",className:"line-chart__control--item"}],activeBtn:3},t.handleClick=function(e){var a=t.state.chartData.datasets[0].data.map((function(e){return e+Math.floor(900*Math.random())}));t.setState((function(t){return{activeBtn:e,chartData:{labels:Object(T.a)(t.chartData.labels),datasets:[{data:Object(T.a)(a),backgroundColor:t.chartData.datasets[0].backgroundColor,borderWidth:t.chartData.datasets[0].borderWidth,lineTension:t.chartData.datasets[0].lineTension,pointRadius:t.chartData.datasets[0].pointRadius,pointBackgroundColor:t.chartData.datasets[0].pointBackgroundColor,pointBorderColor:t.chartData.datasets[0].pointBorderColor,pointBorderWidth:t.chartData.datasets[0].pointBorderWidth}]}}}))},t.renderButtons=function(){var e=t.state,a=e.buttons,n=e.activeBtn;return a.map((function(e){return r.a.createElement("li",{className:e.className+(e.id===n?" active":""),key:e.id,onClick:function(){return t.handleClick(e.id)}},e.name)}))},t}return Object(R.a)(a,e),Object(D.a)(a,[{key:"render",value:function(){var e=this.state.chartData;return r.a.createElement("div",{className:"line-chart"},r.a.createElement("h3",{className:"line-chart__title"},"Traffic"),r.a.createElement("ul",{className:"line-chart__control"},this.renderButtons()),r.a.createElement("div",{className:"line-chart__data"},r.a.createElement(W.c,{data:e,width:100,height:25,options:{legend:{hidden:!0,display:!1},tooltips:{enabled:!1},maintainAspectRatio:!0}})))}}]),a}(r.a.Component)),q=(t(388),{labels:["S","M","T","W","T","F","S"],datasets:[{data:[75,100,175,125,225,200,100],backgroundColor:"rgba(116,119,191)",borderWidth:1}]});function G(){return r.a.createElement("div",{className:"bar-chart"},r.a.createElement("h3",{className:"bar-chart__title"},"Daily Traffic"),r.a.createElement("div",{className:"bar-chart__data"},r.a.createElement(W.a,{data:q,options:{legend:{hidden:!0,display:!1},tooltips:{enabled:!1,cornerRadius:5}}})))}t(389);var L={labels:["Phones","Tablets","Desktop"],datasets:[{data:[10,15,75],backgroundColor:["#74b1bf","#81c98f","rgba(116,119,191)"],borderWidth:0}]},z={legend:{position:"right",labels:{boxWidth:16,fontSize:16,padding:20}},tooltips:{cornerRadius:5}};function F(){return r.a.createElement("div",{className:"doughnut"},r.a.createElement("h3",{className:"doughnut__title"},"Mobile Users"),r.a.createElement("div",{className:"doughnut__data"},r.a.createElement(W.b,{data:L,options:z})))}var U=t(210),I=t(52),P=(t(390),[{name:"Twitter",numbers:10345,icon:"twitter"},{name:"Facebook",numbers:8739,icon:"facebook f"},{name:"Google+",numbers:2530,icon:"google plus g"}]),J=function(e){function a(){var e,t;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(B.a)(this,(e=Object(M.a)(a)).call.apply(e,[this].concat(r)))).state={stats:P},t}return Object(R.a)(a,e),Object(D.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.setState((function(e){return{stats:e.stats.map((function(e){return Object(U.a)({},e,{numbers:e.numbers+Math.floor(9*Math.random())})}))}}))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"numberWithCommas",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"render",value:function(){var e=this,a=this.state.stats;return r.a.createElement("div",{className:"social"},r.a.createElement("h3",{className:"social__title"},"Social"),r.a.createElement("div",{className:"social__data"},a.map((function(a){return r.a.createElement("div",{key:a.name,className:"social__data__stats"},r.a.createElement("div",{className:"social__data__stats--icon"},r.a.createElement(I.a,{name:a.icon,size:"big"})),r.a.createElement("div",{className:"social__data__stats--content"},r.a.createElement("h4",{className:"social__data__stats--content--name"},a.name),r.a.createElement("p",{className:"social__data__stats--content--numbers"},e.numberWithCommas(a.numbers))))}))))}}]),a}(r.a.Component),Y=t(122),H=t.n(Y),V=t(424);t(391);function K(e){var a=e.users.slice(1,5);return r.a.createElement("div",{className:"members"},r.a.createElement("h3",{className:"members__title"},"New Members"),r.a.createElement("div",{className:"members__data"},r.a.createElement(V.a.Group,{size:"big"},a.map((function(e){return r.a.createElement(V.a,{key:e.id.value},r.a.createElement(V.a.Avatar,{src:e.picture.medium,className:"members__data--avatar"}),r.a.createElement(V.a.Content,null,r.a.createElement(V.a.Author,{as:"a"},e.name.first),r.a.createElement(V.a.Metadata,null,r.a.createElement("div",null,H()(e.registered.date).format("L"))),r.a.createElement(V.a.Text,{className:"members__data--text"},e.email)))})))))}t(392);function Q(e){var a=e.users.slice(1,5);return r.a.createElement("div",{className:"activity"},r.a.createElement("h3",{className:"activity__title"},"Activity"),r.a.createElement("div",{className:"activity__data"},r.a.createElement(V.a.Group,{size:"big"},a.map((function(e){return r.a.createElement(V.a,{key:e.id.value},r.a.createElement(V.a.Avatar,{src:e.picture.medium,className:"members__data--avatar"}),r.a.createElement(V.a.Content,null,r.a.createElement(V.a.Author,{as:"a"},e.name.first),r.a.createElement(V.a.Metadata,null,r.a.createElement("div",null,"2 days ago"),r.a.createElement("div",null,r.a.createElement(I.a,{name:"star"}),"5 Faves")),r.a.createElement(V.a.Text,null,"Commented on Facebook's change for 2016")))})))))}var X=t(422),Z=t(427),$=t(428),ee=t(421),ae=t(412),te=t(128),ne=t.n(te),re=t(218),ce=t(420),se=(t(393),{isLoading:!1,term:"",showResults:!1}),ie=function(e){function a(){var e,t;Object(w.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(B.a)(this,(e=Object(M.a)(a)).call.apply(e,[this].concat(c)))).state=se,t.handleChange=function(e){t.setState({term:e.target.value,isLoading:!0,showResults:!0}),setTimeout((function(){if(t.state.term.length<1)return t.setState(se);t.setState({isLoading:!1})}),300)},t.handleResultSelect=function(e,a){return t.setState({term:e+" "+a+" ",showResults:!1})},t.renderResults=function(){var e=t.props.users,a=t.state.term;if(e.length){if(""===a)return;var n=new RegExp(ne.a.escapeRegExp(a),"i"),c=ne.a.filter(e,(function(e){return n.test(e.name.first+e.name.last)}));return 0===c.length&&-1===a.indexOf(" ")?r.a.createElement("div",{className:"search__results__no-results"},r.a.createElement(I.a,{name:"exclamation"})," No Results"):c.map((function(e){return r.a.createElement("div",{className:"search__results__container",key:e.id.value},r.a.createElement("div",{className:"search__results__container--image"},r.a.createElement(re.a,{centered:!0,rounded:!0,src:e.picture.thumbnail,alt:e.name.first})),r.a.createElement("div",{className:"search__results__container--content"},r.a.createElement("div",{className:"search__results__container--content--title",onClick:function(){return t.handleResultSelect(e.name.first,e.name.last)}},e.name.first+" "+e.name.last),r.a.createElement("div",{className:"search__results__container--content--description"},r.a.createElement(I.a,{name:"mail"})," ",e.email),r.a.createElement("div",{className:"search__results__container--content--description"},r.a.createElement(I.a,{name:"map marker alternate"})," ",e.location.city)))}))}},t}return Object(R.a)(a,e),Object(D.a)(a,[{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.term,n=e.showResults,c=this.props,s=c.icon,i=c.placeholder,l=c.dashboard,o=c.required;return r.a.createElement("div",{className:"search"},r.a.createElement(ce.a,{icon:s,placeholder:i,className:l?"search__input":"users__input",loading:a,value:t,onChange:this.handleChange,required:o}),r.a.createElement("div",{className:"search__results ".concat(n?"overflow--auto":"")},this.renderResults()))}}]),a}(r.a.Component);t(398);function le(e){var a=e.users,t=Object(n.useState)(!1),c=Object(u.a)(t,2),s=c[0],i=c[1],l=Object(n.useState)(!0),o=Object(u.a)(l,2),m=o[0],d=o[1],h=r.a.createElement(X.a,{onSubmit:function(e){return f(e)}},r.a.createElement(ie,{users:a,placeholder:"Search for Users",required:!0}),r.a.createElement(X.a.TextArea,{placeholder:"Message for User",required:!0}),r.a.createElement(X.a.Button,{fluid:!0,id:"users__form--btn"},"Send")),_=r.a.createElement(Z.a,{placeholder:!0},s?r.a.createElement($.a,{icon:!0,id:"message__header"},r.a.createElement(ee.a,{active:!0,content:"Sending...",inline:!0})):r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{icon:!0},r.a.createElement(I.a,{name:"check circle outline"}),"Sent!"),r.a.createElement(Z.a.Inline,null,r.a.createElement(ae.a,{id:"users__form--btn",onClick:function(){return d(!0)}},"New Message")))),f=function(e){e.preventDefault(),i(!0),setTimeout((function(){i(!1)}),2e3),d(!1)};return r.a.createElement("div",{className:"users"},r.a.createElement("h3",{className:"users__title"},"Users"),r.a.createElement("div",{className:"users__form"},m?h:_))}t(408);var oe=[{key:"1",text:"(GMT-12:00) International Date Line West",value:"-12"},{key:"2",text:"(GMT-08:00) Pacific Time (US & Canada)",value:"-8"},{key:"3",text:"(GMT+03:00) Moscow, St. Petersburg, Volgograd",value:"+3"}];function me(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(!0),i=Object(u.a)(s,2),l=i[0],o=i[1],m=r.a.createElement(X.a,null,r.a.createElement(X.a.Checkbox,{toggle:!0,label:"Send Email Notifications",id:"settings__form--checkbox"}),r.a.createElement(X.a.Checkbox,{toggle:!0,label:"Set Profile To Public",required:!0}),r.a.createElement(X.a.Select,{options:oe,placeholder:"Select Timezone",required:!0}),r.a.createElement(X.a.Group,{widths:"equal"},r.a.createElement(X.a.Button,{fluid:!0,id:"setting__form--btn-1",onClick:function(e){return h(e)}},"Save"),r.a.createElement(X.a.Button,{fluid:!0,id:"setting__form--btn-2"},"Cancel"))),d=r.a.createElement(Z.a,{placeholder:!0},t?r.a.createElement($.a,{icon:!0,id:"message__header"},r.a.createElement(ee.a,{active:!0,content:"Saving...",inline:!0})):r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{icon:!0},r.a.createElement(I.a,{name:"check circle outline"}),"Saved!"),r.a.createElement(Z.a.Inline,null,r.a.createElement(ae.a,{id:"users__form--btn",onClick:function(){return o(!0)}},"Reset")))),h=function(e){e.preventDefault(),c(!0),setTimeout((function(){c(!1)}),500),o(!1)};return r.a.createElement("div",{className:"settings"},r.a.createElement("h3",{className:"settings__title"},"Settings"),r.a.createElement("div",{className:"settings__form"},l?m:d))}t(409);var ue=t(425),de=(t(410),function(){var e=Object(n.useState)(!0),a=Object(u.a)(e,2),t=a[0],c=a[1];return t?r.a.createElement(ue.a,{onDismiss:function(){c(!1),setTimeout((function(){c(!0)}),3e3)},floating:!0,content:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",className:"alert__message"}):r.a.createElement("div",{style:{display:"none"}})});function he(e){var a=e.users;return r.a.createElement("div",{className:"dashboard"},r.a.createElement("h2",{className:"dashboard__title"},"Dashboard"),r.a.createElement("div",{className:"dashboard__box"},r.a.createElement(ie,{users:a,dashboard:!0,icon:"search",placeholder:"Search..."})),r.a.createElement("div",{className:"dashboard__alert"},r.a.createElement(de,null)))}var _e=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),l=i[0],d=i[1];Object(n.useEffect)((function(){f()}),[]);var f=function(){var e=Object(m.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://randomuser.me/api/?results=10&inc=name,email,picture,location,registered,id&nat=us");case 3:a=e.sent,c(a.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(_,null,r.a.createElement(p,{users:t}),r.a.createElement(x,null),r.a.createElement(he,{users:t,error:l}),r.a.createElement(A,null),r.a.createElement(G,null),r.a.createElement(F,null),r.a.createElement(J,null),r.a.createElement(K,{users:t}),r.a.createElement(Q,{users:t}),r.a.createElement(le,{users:t,search:!0}),r.a.createElement(me,null))};s.a.render(r.a.createElement(i.a,{basename:"dashboard"},r.a.createElement(_e,null)),document.querySelector("#root"))}},[[230,1,2]]]);
//# sourceMappingURL=main.57a0bcc4.chunk.js.map