(this.webpackJsonpassessment=this.webpackJsonpassessment||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),s=(a(101),a(102),a(44)),i=a(13),l=a(66),b=a(67),j=a(84),u=a(83),d=a(50),p=a.n(d),O=a(68),h=a(69),m=a(28),x=a(167),g=a(174),f=a(170),y=a(172),k=a(173),v=a(6),w=Object(x.a)((function(e){return{listClass:{backgroundColor:"#EBEBEB",minHeight:"180px"},gridMargin:{margin:"10px"}}})),I=function(e){var t=e.title,a=e.authors,n=e.city,r=e.country,o=e.year,c=e.id,s=w();return Object(v.jsx)(f.a,{item:!0,sm:6,md:4,className:s.gridMargin,children:Object(v.jsxs)(y.a,{className:s.listClass,children:[Object(v.jsx)(k.a,{alignItems:"flex-start",children:Object(v.jsxs)(g.a,{variant:"body2",children:[Object(v.jsx)("strong",{children:"Title: "}),t]})}),Object(v.jsx)(k.a,{alignItems:"flex-start",children:a&&a.map((function(e,t){return Object(v.jsxs)(g.a,{variant:"body2",children:[Object(v.jsx)("strong",{children:"Author(s): "})," ",e]},e+t)}))}),Object(v.jsx)(k.a,{alignItems:"flex-start",children:Object(v.jsxs)(g.a,{variant:"body2",id:"book-year",children:[Object(v.jsx)("strong",{"test-data":"year",children:"Year: "}),o]})}),Object(v.jsx)(k.a,{alignItems:"flex-start",children:Object(v.jsxs)(g.a,{variant:"body2",children:[Object(v.jsx)("strong",{children:"Place: "}),n+", "+r]})})]})},c)},C=a(16),N=a(183),_=a(182),B=[],A="GET_BOOKS",E="SEARCH_BOOK",G="GET_PAGE_NUMBER",P="FAIL",S="LOADING",D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case A:return n;case E:return Object(C.a)(Object(C.a)({},e),{},{searchKey:n});case G:return Object(C.a)(Object(C.a)({},e),{},{pageNumber:n});case S:return Object(C.a)(Object(C.a)({},e),{},{loading:n});case P:return Object(C.a)(Object(C.a)({},e),{},{error:n});default:return e}},M=function(e){var t=e.booksCount,a=e.booksPerPage,n=e.pageNumberFromBooks,r=Object(m.b)();return Object(v.jsx)(N.a,{className:"paginationClass",count:Math.ceil(t/a),variant:"outlined",page:parseInt(n),shape:"rounded",onClick:function(e){return function(e){var t=e.target.baseURI.split("/").slice(-1)[0];console.log(t),localStorage.setItem("bookPageNumber",t),r({type:G,payload:t})}(e)},renderItem:function(e){return Object(v.jsx)(_.a,Object(C.a)({type:"start-ellipsis","test-data":"pages",component:s.b,to:"/GGAssess/".concat(e.page)},e))}})},T=a(180),F=a(179),K=function(e){var t=e.books,a=Object(m.b)();return Object(v.jsx)("div",{style:{width:300},children:Object(v.jsx)(T.a,{freeSolo:!0,id:"book-search",disableClearable:!0,options:t&&t.map((function(e){return e.book_title})),renderInput:function(e){return Object(v.jsx)(F.a,Object(C.a)(Object(C.a)({},e),{},{label:"Search Books",margin:"normal",variant:"outlined",onChange:function(e){return function(e){a({type:E,payload:e.target.value})}(e)}}))}})})},L=a(79),R=a.n(L),H=function(e,t,a){return function(n){n({type:S,payload:!0}),R.a.post("http://nyx.vima.ekt.gr:3000/api/books?page=".concat(e,"&itemsPerPag=").concat(t,"&filters=").concat(a)).then((function(e){n({type:A,payload:e.data}),n({type:S,payload:!1})})).catch((function(e){n({type:P,payload:!0})}))}},J=a(181),U=a(178),W=Object(x.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",flexDirection:"column",alignItems:"center"},bookComponent:{display:"flex",flexDirection:"column",alignItems:"center"},gridClass:{display:"flex",marginLeft:"350px",flexDirection:"row",alignItems:"center"}}})),Y=function(e){Object(h.a)(e);var t=W(),a=Object(m.b)(),r=Object(m.c)((function(e){return e.books})),o=r.loading,c=r.error,s=window.location.pathname.split("/").slice(-1)[0]?window.location.pathname.split("/").slice(-1)[0]:1;console.log(window.location.pathname),Object(n.useEffect)((function(){window.scrollTo(0,0),i()}),[s]);var i=function(){var e=Object(O.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(H(s,20,[]));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:t.root,children:c?Object(v.jsx)(J.a,{severity:"error",children:"Problem loading the page, please make sure you are connected to internet. If problem persists please contact administrator."}):r&&r.length<1||o?Object(v.jsx)(U.a,{}):Object(v.jsxs)("div",{className:t.bookComponent,children:[Object(v.jsx)(g.a,{variant:"h4",children:"Book Shop"}),Object(v.jsx)(K,{books:r&&r.books}),Object(v.jsx)(f.a,{container:!0,spacing:2,className:t.gridClass,children:r&&r.books.map((function(e){return Object(v.jsx)(I,{title:e.book_title,city:e.book_publication_city,country:e.book_publication_country,authors:e.book_author,year:e.book_publication_year,pages:e.book_pages,id:e.id},e.id)}))}),Object(v.jsx)(M,{booksCount:r&&r.count,booksPerPage:20,pageNumberFromBooks:s})]})})},q=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(b.a)(a,[{key:"render",value:function(){return Object(v.jsx)(Y,{})}}]),a}(r.a.Component);var z=function(){return Object(v.jsx)(s.a,{children:Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("header",{className:"App-header",children:Object(v.jsxs)(i.c,{children:[Object(v.jsx)(i.a,{path:"/GGAssess",exact:!0,component:q},"1"),Object(v.jsx)(i.a,{path:"/GGAssess/:pageNumber",component:q},"2")]})})})})},Q=a(80),V=a(23),X=a(46),Z=a(81),$={key:"books",storage:a.n(Z).a,whitelist:"books"},ee=Object(V.c)({books:D}),te=Object(X.a)($,ee),ae=a(82),ne=Object(V.d)(te,Object(V.a)(ae.a)),re=Object(X.b)(ne);c.a.render(Object(v.jsx)(m.a,{store:ne,children:Object(v.jsx)(Q.a,{persistor:re,children:Object(v.jsx)(z,{})})}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.b197f3c1.chunk.js.map