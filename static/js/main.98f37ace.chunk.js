(this.webpackJsonpimagesearch=this.webpackJsonpimagesearch||[]).push([[0],{24:function(e,t,a){e.exports=a(56)},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=a(6),i=a(21),l=a(2),u=a(3),m=a(9),d=a.n(m),f=a(22),g=a(23),p=a.n(g).a.create({baseURL:"https://www.flickr.com/services/rest/"}),E=function(e){return{type:"IS_LOADING",status:e}},v=function(e,t){var a;return function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];clearTimeout(a),a=setTimeout((function(){return e.apply(void 0,r)}),t)}},O=function(e){for(var t=e.imagesPerPage,a=e.totalPosts,c=e.paginate,s=Object(n.useState)(1),o=Object(u.a)(s,2),i=o[0],l=o[1],m=[],d=1;d<=Math.round(a/t);d++)m.push(d);var f=function(e){return["page-item",i===e?"selected":""].join(" ")};return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination-container"},m.map((function(e){return r.a.createElement("li",{key:e,className:f(e),onClick:function(){return function(e){c(e),l(e)}(e)}},r.a.createElement("div",null,e))}))))},h=function(e){var t=e.images,a=e.onImageSelect;return t.map((function(e){var t=e.farm,n=e.server,c=e.secret,s=e.id,o=e.title;return r.a.createElement("div",{onClick:function(){return a(e)},key:s},r.a.createElement("img",{src:"https://farm".concat(t,".staticflickr.com/").concat(n,"/").concat(s,"_").concat(c,".jpg"),alt:"searched",title:o,className:"images"}))}))},b=function(e){var t=e.onDismiss,a=e.children;return Object(n.useEffect)((function(){window.addEventListener("keydown",(function(e){27===e.keyCode&&t()}))}),[t]),s.a.createPortal(r.a.createElement("div",{className:"portal",onClick:t},a),document.querySelector("#portal"))},j=Object(o.b)((function(e){return{images:e.images.data.photo,selectedImage:e.images.selected,isLoading:e.images.isLoading,error:e.images.error}}),{searchImages:function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="?method=flickr.photos.search&text=".concat(e,"&api_key=").concat("26797c5aee7a0523e67a8d93ef025457","&format=json&nojsoncallback=1"),t.prev=1,a(E(!0)),t.next=5,p.get(n);case 5:"ok"===(r=t.sent).data.stat&&a({type:"FETCH_IMAGES",payload:r.data.photos}),"fail"===r.data.stat&&a({type:"ADD_ERROR",error:r.data.message}),a(E(!1)),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(1),console.error(t.t0),a(E(!1)),a({type:"ADD_ERROR",error:t.t0.message||"Something went wrong"});case 16:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},selectImage:function(e){return{type:"IMAGE_SELECTED",payload:e}}})((function(e){var t=e.images,a=e.searchImages,c=e.selectImage,s=e.selectedImage,o=e.isLoading,i=e.error;Object(n.useEffect)((function(){a("landscapes")}),[a]);var l=Object(n.useCallback)(v((function(e){return a(e)}),300),[]),m=Object(n.useState)(""),d=Object(u.a)(m,2),f=d[0],g=d[1],p=Object(n.useState)(1),E=Object(u.a)(p,2),j=E[0],y=E[1],k=Object(n.useState)(20),_=Object(u.a)(k,1)[0],I=Object(n.useState)(!1),S=Object(u.a)(I,2),w=S[0],D=S[1],L=j*_,N=L-_,C=t&&t.slice(N,L),R=function(){D(!1)};return r.a.createElement("div",{className:"wrapper"},w&&function(){var e=s.farm,t=s.server,a=s.id,n=s.secret;return r.a.createElement(b,{onDismiss:R},r.a.createElement("img",{alt:"selected",src:"https://farm".concat(e,".staticflickr.com/").concat(t,"/").concat(a,"_").concat(n,".jpg")}))}(),r.a.createElement(O,{imagesPerPage:_,totalPosts:t&&t.length,paginate:function(e){return y(e)}}),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{value:f,onChange:function(e){g(e.target.value),l(e.target.value)},className:"input",placeholder:"search"})),r.a.createElement("div",{className:"item"},o&&r.a.createElement(r.a.Fragment,null," Loading... "),i&&r.a.createElement(r.a.Fragment,null," ",i," "),t&&r.a.createElement(h,{images:C,onImageSelect:function(e){c(e),D(!0)}})))})),y=a(5),k={selected:"",isLoading:!1,error:"",data:{photo:[]}},_=Object(l.c)({images:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_IMAGES":return Object(y.a)({},e,{data:Object(y.a)({},t.payload)});case"IMAGE_SELECTED":return Object(y.a)({},e,{selected:t.payload});case"IS_LOADING":return Object(y.a)({},e,{isLoading:t.status});case"ADD_ERROR":return Object(y.a)({},e,{error:t.error});default:return e}}}),I=(a(55),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d),S=Object(l.e)(_,I(Object(l.a)(i.a)));s.a.render(r.a.createElement(o.a,{store:S},r.a.createElement(j,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.98f37ace.chunk.js.map