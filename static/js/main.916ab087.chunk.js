(this.webpackJsonpnumber_game=this.webpackJsonpnumber_game||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),s=a.n(c),u=a(3),m=a(4),l=a(6),i=a(5),o=a(7),h=(a(13),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={checker:!0,starter:!1,num:0,countdown:120,countHid:!0},a.makeNumber=function(){a.setState({checker:!1,num:Math.ceil(100*Math.random()),countHid:!1,starter:!0})},a}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,"Guess the Number"),r.a.createElement("i",{className:"Counter",hidden:this.state.countHid},"You have ",this.state.countdown," sec."),r.a.createElement("div",{className:"wrapper"},r.a.createElement("input",{className:"Starter",type:"button",disabled:this.state.starter,value:"To Generate a Random Number",onClick:this.makeNumber}),r.a.createElement("input",{className:"Window",type:"number",min:"0",max:"100",placeholder:"Enter your number"}),r.a.createElement("input",{className:"Checker",type:"button",disabled:this.state.checker,value:"Check your number"})),r.a.createElement("div",{className:"Display"},"result guess")))}}]),t}(r.a.Component));s.a.render(r.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.916ab087.chunk.js.map