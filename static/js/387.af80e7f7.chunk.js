"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{7129:function(n,t,e){e.d(t,{Df:function(){return s},IQ:function(){return h},JZ:function(){return g},Jh:function(){return v},Pg:function(){return p},oW:function(){return i},qt:function(){return d}});var r=e(5861),a=e(7757),c=e.n(a),o=e(1243),u="c5a1db41bd5eb56af64be0ab647b8aee";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("trending/movie/day?api_key=".concat(u));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error("Oops, something goes wrong!");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("search/movie?api_key=".concat(u,"&query=").concat(t));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error("Oops, something goes wrong!");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}();function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:throw n.prev=7,n.t0=n.catch(0),new Error("Oops, something goes wrong!");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(u));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:throw n.prev=7,n.t0=n.catch(0),new Error("Oops, something goes wrong!");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),new Error("Oops, something goes wrong!");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){if(n){var t=(10*n).toFixed();return"".concat(t,"%")}}function g(n){if(n)return n.map((function(n){return n.name})).join(", ")}},4387:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,c,o,u,s,i=e(5861),p=e(9439),f=e(7757),h=e.n(f),l=e(2791),v=e(7689),x=e(7129),d=e(168),g=e(6444),w=g.ZP.div(r||(r=(0,d.Z)(["\n  padding-top: 15px;\n  padding-bottom: 15px;\n"]))),m=g.ZP.ul(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),Z=g.ZP.li(c||(c=(0,d.Z)(["\n  padding: 5px 10px;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n"]))),b=g.ZP.p(o||(o=(0,d.Z)(["\n  font-weight: 700;\n  font-size: 16px;\n  margin-bottom: 5px;\n"]))),k=g.ZP.p(u||(u=(0,d.Z)(["\n  font-size: 14px;\n"]))),y=g.ZP.p(s||(s=(0,d.Z)(["\n  font-size: 20px;\n"]))),_=e(184),j=function(){var n=(0,l.useState)([]),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,v.UO)().movieId;return(0,l.useEffect)((function(){var n=function(){var n=(0,i.Z)(h().mark((function n(){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,(0,x.Jh)(a);case 5:t=n.sent,r(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[a]),(0,_.jsxs)(w,{children:[0===e.length&&(0,_.jsx)(y,{children:"We don't have any reviews for this film"}),e.length>0&&(0,_.jsx)(m,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,_.jsxs)(Z,{children:[(0,_.jsxs)(b,{children:["Author: ",e]}),(0,_.jsx)(k,{children:r})]},t)}))})]})}}}]);
//# sourceMappingURL=387.af80e7f7.chunk.js.map