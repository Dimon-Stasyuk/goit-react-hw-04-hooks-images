(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){},43:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(6),o=n.n(a),r=(n(17),n(3)),s=n(8),i=(n(18),n(10)),u=(n(19),n(1)),l=function(e){var t=e.OnBtn;return Object(u.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load More"})},j=(n(21),n(22),n(11)),b=n.n(j),m=function(){return Object(u.jsx)("div",{className:"loader-container",children:Object(u.jsx)(b.a,{type:"ThreeDots",color:"#3f51b5",height:60,width:60})})},O=(n(43),n(12)),f=n.n(O);n(52);function h(e){var t=e.onModalOpen,n=e.ongetImg,c=e.images;return Object(u.jsx)(u.Fragment,{children:c.map((function(e){var c=e.webformatURL,a=e.largeImageURL;return Object(u.jsx)("li",{className:"ImageGalleryItem",onClick:function(){t(),n(a)},children:Object(u.jsx)("img",{src:c,alt:"",className:"ImageGalleryItem-image"})},f.a.generate())}))})}n(53);function d(e){var t=e.onClose,n=e.img,a=e.OnModalClose,o=function(e){"Escape"===e.code&&a()};return Object(c.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}})),Object(u.jsx)("div",{className:"Overlay",onClick:t,children:Object(u.jsx)("div",{className:"Modal",children:Object(u.jsx)("img",{src:n,alt:""})})})}function g(e){var t=e.searchName,n=Object(c.useState)(null),a=Object(r.a)(n,2),o=a[0],s=a[1],j=Object(c.useState)(null),b=Object(r.a)(j,2),O=b[0],f=b[1],g=Object(c.useState)(!1),p=Object(r.a)(g,2),x=p[0],v=p[1],N=Object(c.useState)(null),S=Object(r.a)(N,2),w=S[0],y=S[1],k=Object(c.useState)(!1),I=Object(r.a)(k,2),C=I[0],E=I[1],F=Object(c.useState)(!1),M=Object(r.a)(F,2),L=M[0],T=M[1],B=function(){E(!0),T(!1),setTimeout((function(){fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(o,"&key=").concat("23097756-2661a8d66efd3b5956221c710","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return f((function(t){return console.log("fetch"),[].concat(Object(i.a)(t),Object(i.a)(e.hits))}))})),T(!0),E(!1)}),500)},G=function(){v((function(e){return!e}))};return Object(c.useEffect)((function(){t&&(1===o&&B(),s(1),f([]))}),[t]),Object(c.useEffect)((function(){o&&B()}),[o]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:"ImageGallery",children:O&&Object(u.jsx)(h,{images:O,onModalOpen:G,ongetImg:y})}),L&&Object(u.jsx)(l,{OnBtn:function(){s((function(e){return e+1})),console.log("Increment"),setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),1e3)}}),C&&Object(u.jsx)(m,{}),x&&Object(u.jsx)(d,{onClose:function(e){e.target===e.currentTarget&&G()},OnModalClose:G,img:w})]})}n(54);function p(e){var t=e.getName,n=Object(c.useState)(""),a=Object(r.a)(n,2),o=a[0],i=a[1];return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==o.trim()?(i(""),t(o)):s.b.error("Enter the name of the picture")},children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{value:o,onChange:function(e){i(e.target.value)},className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}n(55);function x(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p,{getName:a}),Object(u.jsx)(g,{searchName:n}),Object(u.jsx)(s.a,{})]})}o.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.ee5d0e7f.chunk.js.map