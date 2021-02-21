(this.webpackJsonpassessment=this.webpackJsonpassessment||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),s=(a(101),a(102),a(44)),i=a(13),l=a(66),b=a(67),u=a(84),j=a(83),d=a(16),p=[],O="GET_BOOKS",h="SEARCH_BOOK",g="GET_PAGE_NUMBER",m="FAIL",f="LOADING",x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case O:return n;case h:return Object(d.a)(Object(d.a)({},e),{},{searchKey:n});case g:return Object(d.a)(Object(d.a)({},e),{},{pageNumber:n});case f:return Object(d.a)(Object(d.a)({},e),{},{loading:n});case m:return Object(d.a)(Object(d.a)({},e),{},{error:n});default:return e}},y=a(68),k=a.n(y),v=function(e,t,a){return function(n){n({type:f,payload:!0}),k.a.post("https://nyx.vima.ekt.gr:3000/api/books?page=".concat(e,"&itemsPerPag=").concat(t,"&filters=").concat(a)).then((function(e){n({type:O,payload:e.data}),n({type:f,payload:!1})})).catch((function(e){n({type:m,payload:!0})}))}},N=a(21),I=a(52),w=a.n(I),C=a(70),_=a(71),P=a(167),E=a(174),B=a(170),S=a(172),A=a(173),D=a(6),G=Object(P.a)((function(e){return{listClass:{backgroundColor:"#EBEBEB",minHeight:"180px"},gridMargin:{margin:"10px"}}})),M=function(e){var t=e.title,a=e.authors,n=e.city,r=e.country,c=e.year,o=e.id,s=G();return Object(D.jsx)(B.a,{item:!0,sm:6,md:4,className:s.gridMargin,children:Object(D.jsxs)(S.a,{className:s.listClass,children:[Object(D.jsx)(A.a,{alignItems:"flex-start",children:Object(D.jsxs)(E.a,{variant:"body2",children:[Object(D.jsx)("strong",{children:"Title: "}),t]})}),Object(D.jsx)(A.a,{alignItems:"flex-start",children:a&&a.map((function(e,t){return Object(D.jsxs)(E.a,{variant:"body2",children:[Object(D.jsx)("strong",{children:"Author(s): "})," ",e]},e+t)}))}),Object(D.jsx)(A.a,{alignItems:"flex-start",children:Object(D.jsxs)(E.a,{variant:"body2",id:"book-year",children:[Object(D.jsx)("strong",{"test-data":"year",children:"Year: "}),c]})}),Object(D.jsx)(A.a,{alignItems:"flex-start",children:Object(D.jsxs)(E.a,{variant:"body2",children:[Object(D.jsx)("strong",{children:"Place: "}),n+", "+r]})})]})},o)},T=a(183),K=a(182),L=function(e){var t=e.booksCount,a=e.booksPerPage,n=Object(N.c)(),r=Object(N.d)((function(e){return e.books}));return Object(D.jsx)(T.a,{className:"paginationClass",count:Math.ceil(t/a),variant:"outlined",page:r&&r.pageNumber?r.pageNumber:"/"===window.location.pathname?1:parseInt(localStorage.getItem("bookPageNumber")),shape:"rounded",onClick:function(e){return function(e){var t=e.target.baseURI.split("/").slice(-1)[0];localStorage.setItem("bookPageNumber",t),n({type:g,payload:t}),n(v(t,20,[]))}(e)},renderItem:function(e){return Object(D.jsx)(K.a,Object(d.a)({type:"start-ellipsis","test-data":"pages",component:s.b,to:"/".concat(e.page)},e))}})},R=a(180),H=a(179),J=function(e){var t=e.books,a=Object(N.c)();return Object(D.jsx)("div",{style:{width:300},children:Object(D.jsx)(R.a,{freeSolo:!0,id:"book-search",disableClearable:!0,options:t&&t.map((function(e){return e.book_title})),renderInput:function(e){return Object(D.jsx)(H.a,Object(d.a)(Object(d.a)({},e),{},{label:"Search Books",margin:"normal",variant:"outlined",onChange:function(e){return function(e){a({type:h,payload:e.target.value})}(e)}}))}})})},U=a(181),F=a(178),W=Object(P.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",flexDirection:"column",alignItems:"center"},bookComponent:{display:"flex",flexDirection:"column",alignItems:"center"},gridClass:{display:"flex",marginLeft:"350px",flexDirection:"row",alignItems:"center"}}})),Y=function(e){Object(_.a)(e);var t=W(),a=Object(N.c)(),r=Object(N.d)((function(e){return e.books})),c=r.loading,o=r.error,s=r&&r.pageNumber?r.pageNumber:"/"===window.location.pathname?1:localStorage.getItem("bookPageNumber");Object(n.useEffect)((function(){a(v(s,20,[]))}),[]),Object(n.useEffect)((function(){window.scrollTo(0,0),i()}),[s]);var i=function(){var e=Object(C.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(s,20,[]);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(D.jsx)("div",{className:t.root,children:o?Object(D.jsx)(U.a,{severity:"error",children:"Problem loading the page, please make sure you are connected to internet. If problem persist please contact administrator."}):r&&r.length<1||c?Object(D.jsx)(F.a,{}):Object(D.jsxs)("div",{className:t.bookComponent,children:[Object(D.jsx)(E.a,{variant:"h4",children:"Book Shop"}),Object(D.jsx)(J,{books:r&&r.books}),Object(D.jsx)(B.a,{container:!0,spacing:2,className:t.gridClass,children:r&&r.books.map((function(e){return Object(D.jsx)(M,{title:e.book_title,city:e.book_publication_city,country:e.book_publication_country,authors:e.book_author,year:e.book_publication_year,pages:e.book_pages,id:e.id},e.id)}))}),Object(D.jsx)(L,{booksCount:r&&r.count,booksPerPage:20})]})})},q=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(b.a)(a,[{key:"render",value:function(){return Object(D.jsx)(Y,{})}}]),a}(r.a.Component),z=Object(N.b)((function(e){return{payload:e.payload}}),(function(e){return{setBooks:e(v())}}))(q);var Q=function(){return Object(D.jsx)(s.a,{children:Object(D.jsx)("div",{className:"App",children:Object(D.jsx)("header",{className:"App-header",children:Object(D.jsxs)(i.c,{children:[Object(D.jsx)(i.a,{path:"/",exact:!0,component:z},"1"),Object(D.jsx)(i.a,{path:"/:pageNumber",component:z},"2")]})})})})},V=a(80),X=a(24),Z=a(46),$=a(81),ee={key:"books",storage:a.n($).a,whitelist:"books"},te=Object(X.c)({books:x}),ae=Object(Z.a)(ee,te),ne=a(82),re=Object(X.d)(ae,Object(X.a)(ne.a)),ce=Object(Z.b)(re);o.a.render(Object(D.jsx)(N.a,{store:re,children:Object(D.jsx)(V.a,{persistor:ce,children:Object(D.jsx)(Q,{})})}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.7699c09f.chunk.js.map