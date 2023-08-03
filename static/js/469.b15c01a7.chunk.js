"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[469],{1077:function(n,t,e){e.d(t,{AP:function(){return d},V1:function(){return h},e_:function(){return p}});var r,i,a,o=e(168),c=e(4701),u=e(6088),s=e(918),p=u.Z.ul(r||(r=(0,o.Z)(["\n  margin-top: 50px;\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 30px;\n  & li {\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n  }\n\n  & img {\n    width: 260px;\n    height: 390px;\n    object-fit: fill;\n    margin: 0;\n    padding: 0;\n    display: block;\n    margin-bottom: 20px;\n  }\n  & img:hover {\n    scale: 1.02;\n    box-shadow: ",";\n  }\n  & h2 {\n    font-size: 15px;\n    color: ",";\n    text-align: center;\n  }\n  & h2:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme===s.Wb?s._s.boxShadow.lt:s._s.boxShadow.dt}),(function(n){return n.theme.accent}),(function(n){return n.theme.hover})),h=u.Z.h1(i||(i=(0,o.Z)(["\n  text-align: right;\n  padding-top: 40px;\n  padding-bottom: 20px;\n  color: ",";\n"])),(function(n){return n.theme.accent})),d=(0,u.Z)(c.Z)(a||(a=(0,o.Z)(["\n  height: 30px;\n  width: 90px;\n  margin-left: calc(100% - 90px);\n  margin-top: 20px;\n  background-color: ",";\n  color: ",";\n  & svg {\n    color: ",";\n  }\n"])),(function(n){return n.theme.accent}),(function(n){return n.theme.body}),(function(n){return n.theme.body}))},7469:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,i,a,o=e(9439),c=e(2938),u=e(2791),s=e(7689),p=e(1087),h=e(609),d=e(1077),l=e(168),f=e(6088),m=e(1552),x=((0,f.Z)(m.W2)(r||(r=(0,l.Z)(["\n  min-height: 100vh;\n"]))),f.Z.input(i||(i=(0,l.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 40px;\n  border-radius: 15px;\n  border: 2px solid ",";\n  padding-left: 20px;\n  padding-right: 60px;\n  font-size: 20px;\n  font-weight: bold;\n"])),(function(n){return n.theme.accent}))),v=f.Z.div(a||(a=(0,l.Z)(["\n  width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  position: relative;\n  gap: 30px;\n  & .inputSearch {\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    top: 50%;\n    right: 10px;\n    transform: translateY(-50%);\n    & svg {\n      fill: ",";\n      width: 30px;\n      height: 30px;\n    }\n  }\n  @media screen and (max-width: 768px) {\n    width: 100%;\n  }\n"])),(function(n){return n.theme.accent})),g=e(5403),Z=e(184),w=function(n){var t,e=n.theme,r=(0,u.useState)(""),i=(0,o.Z)(r,2),a=i[0],l=i[1],f=(0,u.useState)([]),m=(0,o.Z)(f,2),w=m[0],b=m[1],j=function(n,t){var e=(0,u.useState)(n),r=(0,o.Z)(e,2),i=r[0],a=r[1];return(0,u.useEffect)((function(){var e=setTimeout((function(){a(n)}),t);return function(){clearTimeout(e)}}),[n,t]),i}(a,1e3),y=(0,s.TH)(),_=(0,p.lr)(),k=(0,o.Z)(_,2),I=k[0],J=k[1],N=I.get("query");return(0,u.useEffect)((function(){""===a&&null!==N&&l(N),(0,h.qF)(j).then((function(n){var t=n.results;b(t)}))}),[j,N,a]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(d.V1,{theme:e,children:"Search movie"}),(0,Z.jsxs)(v,{children:[(0,Z.jsx)(x,{type:"text",onChange:function(n){l(n.target.value.trim().toLowerCase()),J({query:n.target.value})},value:null!==(t=I.get("query"))&&void 0!==t?t:"",placeholder:"Search movie..."}),(0,Z.jsx)("div",{className:"inputSearch",children:(0,Z.jsx)(g.Z,{})})]}),(0,Z.jsx)(d.e_,{theme:e,children:w&&w.map((function(n){var t=n.title,e=n.id,r=n.poster_path;return(0,Z.jsx)("li",{children:(0,Z.jsxs)(p.rU,{to:"".concat(e),state:{from:y},children:[r?(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(r),alt:t}):(0,Z.jsx)("div",{style:{width:"260px",height:"390px",marginBottom:"20px"},children:(0,Z.jsx)("img",{src:c,alt:"not found"})}),(0,Z.jsx)("h2",{children:t})]})},e)}))}),(0,Z.jsx)(s.j3,{})]})}},609:function(n,t,e){e.d(t,{TP:function(){return s},UF:function(){return c},qF:function(){return u},tx:function(){return h},zv:function(){return p}});var r=e(4165),i=e(5861),a=e(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.params={api_key:"155fd1058fa7dc1bb176bb56763cf055",include_adult:!1,page:1};var o={headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmZDEwNThmYTdkYzFiYjE3NmJiNTY3NjNjZjA1NSIsInN1YiI6IjY0ODcwYjQ3ZDJiMjA5MDBjYTIwOTE2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ReF_4djAJ8MaS0bbNh3cwWkp4GrcY4fs260diJiCPl4")},accept:"application/json"},c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t,e,i,c=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"day",n.prev=1,n.next=4,a.Z.get("/trending/movie/".concat(t,"?"),o);case 4:return e=n.sent,i=e.data,n.abrupt("return",i);case 9:throw n.prev=9,n.t0=n.catch(1),new Error("Oops, there is no movies");case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i,c,u=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.length>1&&void 0!==u[1]?u[1]:1,n.prev=1,n.next=4,a.Z.get("/search/movie?query=".concat(t,"&page=").concat(e),o);case 4:return i=n.sent,c=i.data,n.abrupt("return",c);case 9:throw n.prev=9,n.t0=n.catch(1),new Error("Oops, there is no movies");case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("/movie/".concat(t),o);case 3:return e=n.sent,i=e.data,n.abrupt("return",i);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movies");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("movie/".concat(t,"/credits"),o);case 3:return e=n.sent,i=e.data,n.abrupt("return",i);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movies");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("movie/".concat(t,"/reviews"),o);case 3:return e=n.sent,i=e.data,n.abrupt("return",i);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movies");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()},2938:function(n,t,e){n.exports=e.p+"static/media/imgnotfound.a573b6549d35f288d82d.jpg"}}]);
//# sourceMappingURL=469.b15c01a7.chunk.js.map