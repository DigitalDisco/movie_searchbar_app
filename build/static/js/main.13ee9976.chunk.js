(this["webpackJsonpreact-movie-search-app"]=this["webpackJsonpreact-movie-search-app"]||[]).push([[0],{18:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(6),s=c.n(n),i=(c(5),c(7)),l=c(8),o=c(11),u=c(10),j=c(3),b=c.n(j),d=c(9),h=c(4),p=c(0);var m=function(e){var t=e.movie;return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),Object(p.jsxs)("div",{className:"card--content",children:[Object(p.jsx)("h3",{className:"card--title",children:t.title}),Object(p.jsx)("p",{children:Object(p.jsxs)("small",{children:["RELEASE DATE: ",t.release_date]})}),Object(p.jsx)("p",{children:Object(p.jsxs)("small",{children:["RATING: ",t.vote_average]})}),Object(p.jsx)("p",{className:"card--desc",children:t.overview})]})]})};var v=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)([]),s=Object(h.a)(n,2),i=s[0],l=s[1],o=function(){var e=Object(d.a)(b.a.mark((function e(t){var a,r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("submitting..."),a="https://api.themoviedb.org/3/search/movie?api_key=27cee139bbd7e91d4cb9aac1371b17c5&language=en-US&query=".concat(c,"&page=1&include_adult=false"),e.prev=3,e.next=6,fetch(a);case 6:return r=e.sent,e.next=9,r.json();case 9:n=e.sent,console.log(n.results),l(n.results),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{className:"form",onSubmit:o,children:[Object(p.jsx)("label",{className:"label",htmlFor:"query",children:"MOVIE NAME"}),Object(p.jsx)("input",{type:"text",className:"input",name:"query",placeholder:"i.e. The Birdcage",value:c,onChange:function(e){return r(e.target.value)}}),Object(p.jsx)("button",{className:"button",type:"submit",children:"Search"})]}),Object(p.jsx)("div",{className:"card-list",children:i.filter((function(e){return e.poster_path})).map((function(e){return Object(p.jsx)(m,{movie:e},e.id)}))})]})},O=function(e){Object(o.a)(c,e);var t=Object(u.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{className:"title",children:"React Movie Search"}),Object(p.jsx)(v,{})]})}}]),c}(r.a.Component),x=O;s.a.render(Object(p.jsx)(x,{}),document.getElementById("root"))},5:function(e,t,c){}},[[18,1,2]]]);
//# sourceMappingURL=main.13ee9976.chunk.js.map