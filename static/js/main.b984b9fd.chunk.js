(this.webpackJsonppracticeapp=this.webpackJsonppracticeapp||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(13),s=n.n(r),a=n(4),i=n(14),o=n(15),l=n(18),h=n(17),u=(n(23),n(0));var j=function(e){return Object(u.jsxs)("table",{className:"table table-striped",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Empl ID"}),Object(u.jsxs)("th",{id:"first-name",scope:"col",onClick:e.sort,children:["First ",Object(u.jsx)("span",{class:"arrow",children:"\u2186"})]}),Object(u.jsx)("th",{scope:"col",children:"Last"}),Object(u.jsx)("th",{scope:"col",children:"Email"}),Object(u.jsx)("th",{scope:"col",children:"City"}),Object(u.jsx)("th",{scope:"col",children:"Country"})]})}),Object(u.jsx)("tbody",{children:e.results.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:t+1}),Object(u.jsx)("td",{children:e.name.first}),Object(u.jsx)("td",{children:e.name.last}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.location.city}),Object(u.jsx)("td",{children:e.location.country})]},t+1)}))})]})};n(25);var d=function(e){return Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)("form",{className:"col d-flex",onSubmit:e.handleFormSubmit,children:Object(u.jsx)("input",{className:"form-control",value:e.value,name:"search",onChange:e.handleInputChange,type:"search",placeholder:"Search by first name"})})})},b=n(16),m=n.n(b),f=function(){return m.a.get("https://randomuser.me/api/?results=50&nat=us")},p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[]},e.loadEmployees=function(){f().then((function(t){e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.value;e.setState({search:n.toLowerCase()})},e.handleFormSubmit=function(e){e.preventDefault()},e.firstNameSort=function(){var t=Object(a.a)(e.state.results);t.sort((function(e,t){return e.name.first>t.name.first?1:e.name.first<t.name.first?-1:0})),e.setState({results:t})},e.searchByName=function(){return Object(a.a)(e.state.results).filter((function(t){return t.name.first.toLowerCase().includes(e.state.search)}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.loadEmployees()}},{key:"render",value:function(){var e=this.searchByName();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(u.jsx)(j,{results:e,sort:this.firstNameSort})]})}}]),n}(c.Component);n(44);var O=function(){return Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:"Employee List"})})};n(45);var x=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{}),Object(u.jsx)(p,{})]})};s.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.b984b9fd.chunk.js.map