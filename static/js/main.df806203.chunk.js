(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(5),o=n.n(a),r=(n(15),n(3)),s=n(7),i=(n(16),n(9)),u=(n(17),n(1)),j=function(e){var t=e.OnBtn;return Object(u.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load More"})},l=(n(19),n(20),n(10)),b=n.n(l),m=function(){return Object(u.jsx)("div",{className:"loader-container",children:Object(u.jsx)(b.a,{type:"ThreeDots",color:"#3f51b5",height:60,width:60})})};n(41);n(42);function O(e){var t=e.onModalOpen,n=e.ongetImg,c=e.images;return Object(u.jsx)(u.Fragment,{children:c.map((function(e){var c=e.webformatURL,a=e.largeImageURL,o=e.id;return Object(u.jsx)("li",{className:"ImageGalleryItem",onClick:function(){t(),n(a)},children:Object(u.jsx)("img",{src:c,alt:"",className:"ImageGalleryItem-image"})},o)}))})}n(43);function h(e){var t=e.onClose,n=e.img,a=e.OnModalClose,o=function(e){"Escape"===e.code&&a()};return Object(c.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}})),Object(u.jsx)("div",{className:"Overlay",onClick:t,children:Object(u.jsx)("div",{className:"Modal",children:Object(u.jsx)("img",{src:n,alt:""})})})}function f(e){var t=e.searchName,n=Object(c.useState)([]),a=Object(r.a)(n,2),o=a[0],s=a[1],l=Object(c.useState)(1),b=Object(r.a)(l,2),f=b[0],d=b[1],g=Object(c.useState)(!1),p=Object(r.a)(g,2),x=p[0],v=p[1],N=Object(c.useState)(null),S=Object(r.a)(N,2),w=S[0],y=S[1],k=Object(c.useState)(!1),C=Object(r.a)(k,2),E=C[0],I=C[1],F=Object(c.useState)(!1),M=Object(r.a)(F,2),L=M[0],T=M[1],B=function(){I(!0),T(!1),setTimeout((function(){var e,n;(e=t,n=f,fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(n,"&key=").concat("23097756-2661a8d66efd3b5956221c710","&image_type=photo&orientation=horizontal&per_page=").concat(12)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(e," \u043e\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u044e\u0442")))}))).then((function(e){s((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.hits))})),T(!0),I(!1),d((function(e){return e+1}))}))}),300)},G=function(){v((function(e){return!e}))};return Object(c.useEffect)((function(){t&&(d(1),s([]),B())}),[t]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:"ImageGallery",children:o&&Object(u.jsx)(O,{images:o,onModalOpen:G,ongetImg:y})}),L&&Object(u.jsx)(j,{OnBtn:function(){B(),setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),600)}}),E&&Object(u.jsx)(m,{}),x&&Object(u.jsx)(h,{onClose:function(e){e.target===e.currentTarget&&G()},OnModalClose:G,img:w})]})}n(44);function d(e){var t=e.getName,n=Object(c.useState)(""),a=Object(r.a)(n,2),o=a[0],i=a[1];return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==o.trim()?(i(""),t(o)):s.b.error("Enter the name of the picture")},children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{value:o,onChange:function(e){i(e.target.value)},className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}n(45);function g(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{getName:a}),Object(u.jsx)(f,{searchName:n}),Object(u.jsx)(s.a,{})]})}o.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.df806203.chunk.js.map