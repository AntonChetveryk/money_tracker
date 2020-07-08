(this.webpackJsonpmoney_tracker=this.webpackJsonpmoney_tracker||[]).push([[0],{36:function(e,t,a){e.exports=a(48)},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),l=(a(41),a(20)),s=a(2),u=a(7),i=a(8),m=a(11),d=a(10),p=a(16),h=a(17);function v(){var e=Object(p.a)(["\n  padding: 10px 0;\n"]);return v=function(){return e},e}var E=h.a.div(v()),b=function(){return r.a.createElement("header",null,r.a.createElement(E,null,r.a.createElement(l.b,{to:"/",className:"mr-2"},"Main"),r.a.createElement(l.b,{to:"/list"},"List")))};function y(){var e=Object(p.a)(["\n  width: 80%;\n  margin: auto;\n"]);return y=function(){return e},e}var f=h.a.div(y()),x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(b,null),this.props.children)}}]),a}(r.a.Component),g=a(18),j=a(13),O=function(e){var t=e.id,a=e.labelText,n=e.type,c=e.placeholder,o=e.name,l=e.value,s=e.onChange,u=e.className;return r.a.createElement("div",null,r.a.createElement("input",{id:t,type:n,placeholder:c,name:o,value:l,onChange:s,className:u}),r.a.createElement("label",{htmlFor:t,className:"ml-2"},a))},N=a(19),C=function(e){return{type:"UPDATE_EXPENSES",payload:e}},D=[{name:"EUR",id:1},{name:"USD",id:2},{name:"PLN",id:3}],k=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={values:{date:"",money:"",product:"",currency:"EUR"}},e.onChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(e){return{values:Object(j.a)(Object(j.a)({},e.values),{},Object(g.a)({},n,r))}}))},e.onClick=function(t){t.preventDefault();var a=e.state.values,n=a.date,r=a.money,c=a.product,o=a.currency;n&&r&&c&&o?(e.props.updateExpenses(e.state.values),e.props.history.push("/list")):alert("Fill in all the fields")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.values,t=e.date,a=e.money,n=e.product,c=e.currency;return r.a.createElement("div",{className:"mt-2"},r.a.createElement("h1",{className:"my-4 text-center"},"Add new Expense"),r.a.createElement("form",null,r.a.createElement(O,{id:"1",name:"date",value:t,labelText:"date",onChange:this.onChange,type:"date",placeholder:"YY-MM-DD"}),r.a.createElement(O,{id:"2",name:"money",value:a,labelText:"amount of money spent",onChange:this.onChange,type:"number",placeholder:"value"}),r.a.createElement("select",{id:"3",name:"currency",value:c,onChange:this.onChange},D.map((function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}))),r.a.createElement("label",{htmlFor:"3",className:"ml-2"},"currency"),r.a.createElement(O,{id:"4",name:"product",value:n,labelText:"product",onChange:this.onChange,type:"text",placeholder:"product"}),r.a.createElement("button",{onClick:this.onClick,className:"btn btn-primary mt-2"},"Add expense")))}}]),a}(r.a.Component),S={updateExpenses:C},U=Object(N.b)((function(e){return{expenses:e.mainReducer.expenses}}),S)(k);function w(){var e=Object(p.a)([""]);return w=function(){return e},e}var R=h.a.div(w()),T=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.expense,t=e.date,a=e.currency,n=e.product,c=e.money;return r.a.createElement(R,null,r.a.createElement("div",{className:"card mb-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text"},"Date: ".concat(t)),r.a.createElement("div",{className:"card-text"},"Currency: ".concat(a)),r.a.createElement("div",{className:"card-text"},"Product: ".concat(n)),r.a.createElement("div",{className:"card-text"},"Money: ".concat(c)))))}}]),a}(r.a.Component),P=[{name:"EUR",id:1},{name:"USD",id:2},{name:"PLN",id:3}],M=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={date:"",total:"",currency:"EUR",rates:null},e.onChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(e){return Object(g.a)({},n,r)}))},e.removeDate=function(t){var a=e.props,n=a.expenses,r=a.removeDateFromExpenses;(t.preventDefault(),e.state.date)?(r(n.filter((function(t){return t.date!==e.state.date}))),e.setState({date:""})):alert("Choose the date")},e.getSumInEUR=function(){for(var t=e.props.expenses,a=e.state.rates,n=0,r=0;r<t.length;r++)console.log(t[r].currency,t[r].money),"EUR"===t[r].currency&&(n+=Number(t[r].money)),"USD"===t[r].currency&&(n+=Number(t[r].money)/a.USD),"PLN"===t[r].currency&&(n+=Number(t[r].money)/a.PLN);return Number(n.toFixed(2))},e.getTotal=function(t){t.preventDefault();var a=e.state,n=a.currency,r=a.rates;if(n)switch(n){case"USD":return e.setState({total:(e.getSumInEUR()*r.USD).toFixed(2)});case"PLN":return e.setState({total:(e.getSumInEUR()*r.PLN).toFixed(2)});default:return e.setState({total:e.getSumInEUR()})}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(a,n){fetch(e,t).then((function(e){if(e.status<400)return e.json();throw e})).then((function(e){return a(e)})).catch((function(e){return e.json().then((function(e){return n(e)}))}))}))})("".concat("http://data.fixer.io/api/","/latest?access_key=").concat("0ccbc9cb9f22a7db482075635a2baee1","&base=EUR")).then((function(t){return e.setState({rates:t.rates})}))}},{key:"render",value:function(){var e=this.props.expenses,t=this.state,a=t.date,n=t.currency,c=t.total;return r.a.createElement("div",{className:"mt-2"},r.a.createElement("div",{className:"my-2"},r.a.createElement("select",{id:"3",name:"currency",value:n,onChange:this.onChange},P.map((function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}))),r.a.createElement("label",{htmlFor:"3",className:"ml-2"},"Choose the currency"),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary my-2 block",onClick:this.getTotal},"Total"),r.a.createElement("span",{className:"ml-4"},c)),r.a.createElement(O,{id:"1",name:"date",value:a,labelText:"date",onChange:this.onChange,type:"date",placeholder:"YY-MM-DD"}),r.a.createElement("button",{className:"btn btn-dark mt-2",onClick:this.removeDate},"Remove date")),e.length>0?r.a.createElement("div",null,r.a.createElement("h1",null,"Expenses List"),e.sort((function(e,t){return e.date.split("-").join("")-t.date.split("-").join("")})).map((function(e,t){return r.a.createElement(T,{expense:e,key:t})}))):r.a.createElement("h2",{className:"text-center"},"Empty List"))}}]),a}(r.a.Component),F={updateExpenses:C,removeDateFromExpenses:function(e){return{type:"REMOVE_DATE",payload:e}}},L=Object(N.b)((function(e){return{expenses:e.mainReducer.expenses}}),F)(M),A=function(){return r.a.createElement(l.a,{basename:"money_tracker"},r.a.createElement(s.c,null,r.a.createElement(x,null,r.a.createElement(s.a,{exact:!0,path:"/",component:U}),r.a.createElement(s.a,{exact:!0,path:"/list",component:L}))))},_=a(33),I=a(9),Y=a(35),W={expenses:[]},B=Object(I.combineReducers)({mainReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_EXPENSES":return Object(j.a)(Object(j.a)({},e),{},{expenses:[].concat(Object(Y.a)(e.expenses),[t.payload])});case"REMOVE_DATE":return Object(j.a)(Object(j.a)({},e),{},{expenses:t.payload});default:return e}}}),J=a(34),V=Object(I.createStore)(B,Object(_.composeWithDevTools)(Object(I.applyMiddleware)(J.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N.a,{store:V},r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.c26ac51d.chunk.js.map