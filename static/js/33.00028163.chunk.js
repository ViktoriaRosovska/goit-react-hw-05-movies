"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[33],{5033:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,i,c,o,s=t(9439),u=t(2791),d=t(7689),p=t(609),h=t(168),l=t(6088),f=t(1087),v=l.Z.div(r||(r=(0,h.Z)(["\n  width: 100%;\n  margin-top: 40px;\n  display: flex;\n  gap: 30px;\n  padding-bottom: 50px;\n  color: ",";\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"])),(function(n){return n.theme.text})),x=(0,l.Z)(f.OL)(a||(a=(0,h.Z)(["\n  margin-top: 20px;\n  font-size: 20px;\n  display: inline-flex;\n  gap: 10px;\n  align-content: center;\n  color: ",";\n  &:hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.accent}),(function(n){return n.theme.hover})),m=l.Z.div(i||(i=(0,h.Z)(["\n  display: flex;\n  gap: 30px;\n  &.active {\n    background-color: ",";\n    border-radius: 15px;\n    color: white;\n  }\n"])),(function(n){return n.theme.accent})),g=(0,l.Z)(f.OL)(c||(c=(0,h.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: ",";\n  &:active,\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: ",";\n    border-radius: 5px;\n  }\n"])),(function(n){return n.theme.accent}),(function(n){return n.theme.accent})),j=l.Z.div(o||(o=(0,h.Z)(["\n  max-width: 100%;\n  & .homepage {\n    color: ",";\n  }\n  & .homepage:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.accent}),(function(n){return n.theme.hover})),Z=t(7394),b=t(184),w=function(n){var e,t,r=n.theme,a=(0,u.useState)({}),i=(0,s.Z)(a,2),c=i[0],o=i[1],h=(0,d.UO)().movieId,l=null!==(e=null===(t=(0,d.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";(0,u.useEffect)((function(){(0,p.TP)(h).then((function(n){o(n)}))}),[h]);var f=c.title,w=c.id,_=c.release_date,k=c.poster_path,y=c.production_countries,I=c.vote_average,J=c.overview,N=c.original_language,O=c.budget,T=c.homepage,Y=null===y||void 0===y?void 0:y.map((function(n){return n.name})).join(", ");return(0,b.jsxs)("div",{children:[(0,b.jsxs)(x,{to:l,theme:r,children:[(0,b.jsx)(Z.Z,{})," Go to previous page"]}),(0,b.jsxs)(v,{theme:r,children:[(0,b.jsx)("div",{children:(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(k),alt:f})}),(0,b.jsxs)(j,{theme:r,children:[(0,b.jsxs)("h2",{children:['"',f,'"']}),(0,b.jsxs)("p",{children:["Release date: ",(0,b.jsx)("b",{children:_})]}),(0,b.jsxs)("p",{children:["Productions countries: ",(0,b.jsx)("b",{children:Y})]}),(0,b.jsxs)("p",{children:["Rating: ",(0,b.jsx)("b",{children:I})]}),(0,b.jsxs)("p",{children:[(0,b.jsx)("b",{children:"Overview:"})," ",J]}),(0,b.jsxs)("p",{children:["Original language: ",(0,b.jsx)("b",{children:N})]}),(0,b.jsxs)("p",{children:[(0,b.jsx)("b",{children:"Budget:"})," ",O,"$"]}),(0,b.jsxs)("p",{children:["Home page:"," ",(0,b.jsx)("a",{href:T,target:"_blank",rel:"noreferrer noopenner",className:"homepage",children:T})]}),(0,b.jsxs)(m,{theme:r,children:[" ",(0,b.jsx)(g,{theme:r,to:"cast",state:{from:"/movies/".concat(w)},children:"Cast"}),(0,b.jsx)(g,{theme:r,to:"reviews",state:{from:"/movies/".concat(w)},children:"Reviews"})]})]})]}),(0,b.jsx)("div",{children:(0,b.jsx)(d.j3,{})})]})}},609:function(n,e,t){t.d(e,{TP:function(){return d},UF:function(){return s},qF:function(){return u},tx:function(){return h},zv:function(){return p}});var r=t(4165),a=t(5861),i=t(1243),c=t(8348);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"155fd1058fa7dc1bb176bb56763cf055",include_adult:!1,page:1};var o={headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmZDEwNThmYTdkYzFiYjE3NmJiNTY3NjNjZjA1NSIsInN1YiI6IjY0ODcwYjQ3ZDJiMjA5MDBjYTIwOTE2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ReF_4djAJ8MaS0bbNh3cwWkp4GrcY4fs260diJiCPl4")},accept:"application/json"},s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t,a,s=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:"day",n.prev=1,n.next=4,i.Z.get("/trending/movie/".concat(e,"?"),o);case 4:return t=n.sent,a=t.data,n.abrupt("return",a);case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",c.Am.error("Oops, there are no movies"));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a,c,s=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,n.next=3,i.Z.get("/search/movie?query=".concat(e,"&page=").concat(t),o);case 3:return a=n.sent,c=a.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e),o);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits"),o);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews"),o);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},7394:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),i=t(184),c=(0,a.default)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");e.Z=c}}]);
//# sourceMappingURL=33.00028163.chunk.js.map