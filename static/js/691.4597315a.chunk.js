"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[691],{7129:function(n,e,t){t.d(e,{Df:function(){return c},IQ:function(){return h},JZ:function(){return x},Jh:function(){return f},Pg:function(){return u},oW:function(){return p},qt:function(){return m}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1243),s="c5a1db41bd5eb56af64be0ab647b8aee";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,r.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("trending/movie/day?",{params:{api_key:s,page:e}});case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error("Oops, something goes wrong!");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e,t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("search/movie?",{params:{api_key:s,page:t,query:e}});case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error("Oops, something goes wrong!");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e,t){return n.apply(this,arguments)}}();function u(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),new Error("Oops, something goes wrong!");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:throw n.prev=7,n.t0=n.catch(0),new Error("Oops, something goes wrong!");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),new Error("Oops, something goes wrong!");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n){if(n){var e=(10*n).toFixed();return"".concat(e,"%")}}function x(n){if(n)return n.map((function(n){return n.name})).join(", ")}},854:function(n,e,t){t.d(e,{a:function(){return p}});var r,a=t(168),i=t(8402),o=t(6444),s=t(184),c=o.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  height: 75vh;\n  justify-content: center;\n  align-items: center;\n"]))),p=function(){return(0,s.jsx)(c,{children:(0,s.jsx)(i.s5,{strokeColor:"#00467f",strokeWidth:"5",animationDuration:"0.75",width:"96",wrapperStyle:{margin:"50px"},visible:!0})})}},4112:function(n,e,t){t.d(e,{Z:function(){return _}});var r,a,i,o,s,c=t(9439),p=t(7689),u=t(1087),d=t(2134),h=t(168),l=t(6444),f=l.ZP.ul(r||(r=(0,h.Z)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-gap: 20px;\n  margin-bottom: 60px;\n\n  @media screen and (min-width: 768px) {\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 24px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 20px;\n  }\n"]))),g=l.ZP.li(a||(a=(0,h.Z)(["\n  cursor: pointer;\n"]))),m=l.ZP.img(i||(i=(0,h.Z)(["\n  min-height: 402px;\n  object-fit: cover;\n  margin-bottom: 10px;\n  border-radius: 5px;\n\n  @media screen and (min-width: 768px) {\n    min-width: 180px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* min-width: 292px; */\n  }\n\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),x=l.ZP.p(o||(o=(0,h.Z)(["\n  text-transform: uppercase;\n  display: block;\n  font-weight: 600;\n  line-height: 1.33;\n  /* height: 16px; */\n  /* overflow: hidden; */\n  color: #000;\n\n  @media screen and (min-width: 1280px) {\n    height: 24px;\n    font-style: normal;\n    font-size: 16px;\n    line-height: 1.2;\n  }\n"]))),v=l.ZP.p(s||(s=(0,h.Z)(["\n  color: #00457d;\n  font-weight: 700;\n  font-size: 16px;\n"]))),w=t(6048),Z=t.n(w),y="Pagination_pagContainer__sV3dJ",b="Pagination_pagButton__fVNOa",k="Pagination_activeBtn__fTaNE",j=t(184),_=function(n){var e,t=n.movies,r=n.onClick,a=n.totalPages,i=(0,p.TH)(),o=(0,u.lr)(),s=null!==(e=(0,c.Z)(o,1)[0].get("query"))&&void 0!==e?e:"",h=y,l=b,w=k;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(f,{children:t.map((function(n){var e=n.id,t=n.title,r=n.poster_path,a=n.release_date;return(0,j.jsx)(g,{children:(0,j.jsxs)(u.rU,{to:"/movies/".concat(e),state:{from:i},children:[(0,j.jsx)(m,{src:r?"".concat("https://image.tmdb.org/t/p/w500").concat(r):"https://sd.keepcalms.com/i/keep-calm-poster-not-found.png",alt:"Movie poster"}),(0,j.jsx)(x,{children:t.length>26?"".concat(t.slice(0,26)," ..."):t}),(0,j.jsx)(v,{children:a?a.slice(0,4):"Unknown"})]})},e)}))}),a>1&&(0,j.jsx)(Z(),{previousLabel:(0,j.jsx)(d.kyg,{}),nextLabel:(0,j.jsx)(d.mGl,{}),pageClassName:l,pageLinkClassName:l,previousClassName:l,previousLinkClassName:l,nextClassName:l,nextLinkClassName:l,breakLabel:"...",breakClassName:l,breakLinkClassName:l,pageCount:a,marginPagesDisplayed:1,pageRangeDisplayed:5,onPageChange:r,containerClassName:h,activeClassName:w},s)]})}},4691:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i,o=t(1413),s=t(5861),c=t(9439),p=t(7757),u=t.n(p),d=t(5705),h=t(2791),l=t(1087),f=t(7689),g=t(8174),m=(t(5462),t(7129)),x=t(168),v=t(6444),w=(0,v.ZP)(d.l0)(r||(r=(0,x.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 20px 0;\n"]))),Z=(0,v.ZP)(d.gN)(a||(a=(0,x.Z)(["\n  width: 100%;\n  height: 34px;\n  padding: 10px 14px;\n  font-weight: 400;\n  line-height: 1.16;\n  background: #ffffff;\n  border: 1.5px solid #032541;\n  border-radius: 15px;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    height: 38px;\n    width: 165px;\n    font-size: 14px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    height: 42px;\n    width: 300px;\n    padding: 10px 16px;\n  }\n"]))),y=v.ZP.button(i||(i=(0,x.Z)(["\n  width: 135px;\n  height: 34px;\n  padding: 10px 14px;\n  font-weight: 700;\n  text-transform: uppercase;\n  line-height: 1.16;\n  color: #fff;\n  background: #00467f;\n  border: 1.5px solid #00467f;\n  border-radius: 15px;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    height: 38px;\n    width: 165px;\n    font-size: 14px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    height: 42px;\n    width: 105px;\n    padding: 10px 16px;\n  }\n"]))),b=t(4112),k=t(854),j=t(184),_=function(){var n,e=(0,h.useState)([]),t=(0,c.Z)(e,2),r=t[0],a=t[1],i=(0,h.useState)(!1),p=(0,c.Z)(i,2),x=p[0],v=p[1],_=(0,h.useState)(0),C=(0,c.Z)(_,2),P=C[0],q=C[1],N=(0,l.lr)(),S=(0,c.Z)(N,2),E=S[0],L=S[1],O=(0,h.useState)({query:null!==(n=E.get("query"))&&void 0!==n?n:"",page:1}),F=(0,c.Z)(O,2),z=F[0],D=F[1],J=(0,f.TH)();(0,h.useEffect)((function(){var n=z.query,e=z.page;if(n){var t=function(){var t=(0,s.Z)(u().mark((function t(){var r,i,s;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),a([]),t.next=5,(0,m.oW)(n,e);case 5:r=t.sent,i=r.data.results,s=r.data.total_pages,0===i.length&&(g.Am.error("Search result not successful. Enter the correct movie name."),D((0,o.Z)((0,o.Z)({},z),{},{query:"",page:1}))),q(s),a(i),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),g.Am.error(t.t0.message);case 16:return t.prev=16,v(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,13,16,19]])})));return function(){return t.apply(this,arguments)}}();t()}}),[z]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.J9,{initialValues:{query:""},onSubmit:function(n,e){var t=e.resetForm,r=""!==n.query?{query:n.query}:{};L(r),D({query:n.query,page:1}),t()},children:(0,j.jsxs)(w,{children:[(0,j.jsx)(Z,{type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Movie name..."}),(0,j.jsx)(y,{type:"submit",children:"Search"})]})}),x&&(0,j.jsx)(k.a,{}),r&&(0,j.jsx)(b.Z,{movies:r,state:{from:J},onClick:function(n){D((0,o.Z)((0,o.Z)({},z),{},{page:n.selected+1}))},totalPages:P}),(0,j.jsx)(g.Ix,{})]})}}}]);
//# sourceMappingURL=691.4597315a.chunk.js.map