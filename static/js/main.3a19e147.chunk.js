(this.webpackJsonppracticeapp=this.webpackJsonppracticeapp||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(13),s=n.n(r),a=n(4),i=n(14),o=n(15),l=n(18),u=n(17),h=(n(23),n(0));var j=function(e){return Object(h.jsxs)("table",{className:"table table-striped",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Empl ID"}),Object(h.jsx)("th",{scope:"col",onClick:e.sort,children:"First"}),Object(h.jsx)("th",{scope:"col",children:"Last"}),Object(h.jsx)("th",{scope:"col",children:"Email"}),Object(h.jsx)("th",{scope:"col",children:"City"}),Object(h.jsx)("th",{scope:"col",children:"Country"})]})}),Object(h.jsx)("tbody",{children:e.results.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:t+1}),Object(h.jsx)("td",{children:e.name.first}),Object(h.jsx)("td",{children:e.name.last}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:e.location.city}),Object(h.jsx)("td",{children:e.location.country})]},t+1)}))})]})};n(25);var d=function(e){return Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)("form",{className:"col d-flex",onSubmit:e.handleFormSubmit,children:Object(h.jsx)("input",{className:"form-control",value:e.value,name:"search",onChange:e.handleInputChange,type:"search",placeholder:"Search by first name"})})})},b=n(16),m=n.n(b),f=function(){return m.a.get("https://randomuser.me/api/?results=50&nat=us")},p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[]},e.loadEmployees=function(){f().then((function(t){e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.value;e.setState({search:n.toLowerCase()})},e.handleFormSubmit=function(e){e.preventDefault()},e.firstNameSort=function(){var t=Object(a.a)(e.state.results);t.sort((function(e,t){return e.name.first>t.name.first?1:e.name.first<t.name.first?-1:0})),e.setState({results:t})},e.searchByName=function(){return Object(a.a)(e.state.results).filter((function(t){return t.name.first.toLowerCase().includes(e.state.search)}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.loadEmployees()}},{key:"render",value:function(){var e=this.searchByName();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(h.jsx)(j,{results:e,sort:this.firstNameSort})]})}}]),n}(c.Component);n(44);var O=function(){return Object(h.jsx)("header",{children:Object(h.jsx)("h1",{children:"Employee List"})})};n(45);var x=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{}),Object(h.jsx)(p,{})]})};s.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.3a19e147.chunk.js.map