(this["webpackJsonpgoogle-keep"]=this["webpackJsonpgoogle-keep"]||[]).push([[0],{24:function(e,t,n){e.exports=n(42)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),i=n.n(r),c=(n(29),n(17)),l=n(18),s=n(22),u=n(19),m=n(23),d=(n(30),n(31),n(5)),f=n(3),p=(n(36),"DARK_THEME"),v=["#ececec","#880e4f","#4a148c","#1a237e","#1b5e20","#bf360c"],h=["#282c34","#880e4f","#4a148c","#1a237e","#1b5e20","#bf360c"],E=o.a.createContext({theme:"LIGHT_THEME",toggleTheme:function(){}}),g=n(11),b=n(2),N=n(1),y=n.n(N),O=n(4),C=n.n(O);window.localforage=C.a;var T=function(){var e;return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.awrap(C.a.getItem("notes"));case 2:if(e=t.sent){t.next=6;break}return t.next=6,y.a.awrap(C.a.setItem("notes",[]));case 6:return t.abrupt("return",e||[]);case 7:case"end":return t.stop()}}))},w=function(e){var t,n;return y.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.a.awrap(T());case 2:return t=a.sent,n=Object(b.a)({},e,{id:Date.now()}),C.a.setItem("notes",[].concat(Object(g.a)(t),[n])),a.abrupt("return",n);case 6:case"end":return a.stop()}}))},S=function(){return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.awrap(T());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},j=function(e){var t,n;return y.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.id,a.next=3,y.a.awrap(T());case 3:n=a.sent,C.a.setItem("notes",n.filter((function(e){return e.id!==t})));case 5:case"end":return a.stop()}}))},_=function(e){var t;return y.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.awrap(T());case 2:t=n.sent,C.a.setItem("notes",t.map((function(t){return t.id===e.id?Object(b.a)({},t,{},e):t})));case 4:case"end":return n.stop()}}))},x=function(){return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.awrap(C.a.getItem("filter"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},k=function(e){return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.awrap(C.a.setItem("filter",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},I=function(){return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.awrap(C.a.getItem("selectionInfo"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},A=function(e,t){return y.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.awrap(C.a.setItem("selectionInfo",{modalVisibility:e,selectedNote:t}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}))},L=function(e){var t=e.updateFilter,n=e.value,r=Object(a.useRef)(null),i=Object(a.useState)(n),c=Object(f.a)(i,2),l=c[0],s=c[1],u=function(e){s(e.currentTarget.value)};return Object(a.useEffect)((function(){x().then((function(e){e&&(s(e),t(e))}))}),[s,t]),Object(a.useEffect)((function(){k(l).then((function(){t(l)}))}),[l,t]),o.a.createElement(E.Consumer,null,(function(e){var n=e.theme;return o.a.createElement("div",{className:n===p?"search-component search-component-dark":"search-component search-component-light"},o.a.createElement("i",{className:n===p?"icon material-icons search-icon":"icon icon-light material-icons search-icon",onClick:function(){return r.current.focus()}},"search"),o.a.createElement("input",{ref:r,placeholder:"Search",className:n===p?"search-input":"search-input search-input-light",type:"text",onChange:u,value:l}),o.a.createElement("i",{className:n===p?"icon material-icons search-icon":"icon icon-light material-icons search-icon",onClick:function(){t(""),s("")}},"close"))}))},H=Object(d.b)((function(e){var t=e.notes,n=e.filter;return{notes:t.filter((function(e){return e.title.toLowerCase().includes(n.noteTitleFilter)||e.body.toLowerCase().includes(n.noteTitleFilter)})),value:n.noteTitleFilter}}),(function(e){return{updateFilter:function(t){e({type:"UPDATE_NOTE_TITLE_FILTER",text:t})}}}))((function(e){return o.a.createElement("div",{style:{width:"80%"}},o.a.createElement(L,e))}));var M=function(e){var t=e.setNavbarCollapse;return o.a.createElement(E.Consumer,null,(function(e){var n=e.toggleTheme,a=e.theme;return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"navbar-icon"},o.a.createElement("div",{className:a===p?"icon":"icon icon-light",onClick:t},o.a.createElement("i",{className:"material-icons hamburger"},"menu")),o.a.createElement("div",{className:"icon-title"},"Google Keep")),o.a.createElement("div",{className:"search-box"},o.a.createElement(H,null)),o.a.createElement("div",{className:"action-area"},o.a.createElement("div",{className:a===p?"icon":"icon icon-light",onClick:n},o.a.createElement("i",{className:"material-icons hamburger"},a===p?"wb_sunny":"brightness_2"))))}))},P=(n(38),[{title:"Notes",icon:"note"},{title:"Archive",icon:"archive"}]),R=function(e){var t=e.isNavbarCollapased,n=e.selctedIndex,a=e.setSelectedIndex,r=e.theme,i=P.map((function(e,t){var r=e.icon,i=e.title;return o.a.createElement("div",{key:i,className:n===t?"list-item list-item-active":"list-item",onClick:function(){return a(t)}},o.a.createElement("i",{className:"material-icons list-icon"},r),o.a.createElement("div",{className:"list-title"},i))})),c="";return c=t?"navbar navbar-hidden":"navbar","LIGHT_THEME"===r&&(c+=" navbar-light"),o.a.createElement("nav",{className:c},i,o.a.createElement("div",{className:"separator"}))},G=n(6),V=(n(39),n(8)),U={title:"",body:"",image:"",backgroundColor:"",isArchived:!1,isStarred:!1},D=(n(40),n(41),function(e){var t=e.colors,n=e.selectedIndex,a=e.handleBackgroundColor,r=e.setColorPickerVisibility,i=e.position;return o.a.createElement("div",{className:"color-container",style:Object(V.a)({},i.key,i.value),onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)}},t.map((function(e,t){return o.a.createElement("div",{key:e,className:"color",style:{backgroundColor:"".concat(e),opacity:t===n?.4:1},onClick:function(n){n.stopPropagation(),a(t,e)}},t===n&&o.a.createElement("i",{style:{alignSelf:"center"},className:"material-icons"},"check"))})))}),F=function(e){var t=e.note,n=e.onRemove,r=e.onArchive,i=e.onStar,c=e.onUpdate,l=e.setModalVisibility,s=e.setSelectedNote,u=e.dimensions,m=h.indexOf(t.backgroundColor),d=Object(a.useState)(!1),g=Object(f.a)(d,2),N=g[0],y=g[1],O=Object(a.useState)(!1),C=Object(f.a)(O,2),T=C[0],w=C[1],S=Object(a.useState)(-1===m?0:m),j=Object(f.a)(S,2),_=j[0],x=j[1],k=Object(a.useRef)(null),I=Object(a.useState)(1),A=Object(f.a)(I,2),L=A[0],H=A[1];Object(a.useEffect)((function(){var e=Math.ceil((k.current.querySelector(".note-inner").getBoundingClientRect().height+u.rowGap)/(u.rowHeight+u.rowGap));H(e)}),[u]);var M=function(e){e.stopPropagation(),l(!0),s(t)},P=function(e){e.stopPropagation(),r(t)},R=function(e){e.stopPropagation(),n(t)},G=function(e){e.stopPropagation(),i(t)},V=function(e,n){x(e);var a=Object(b.a)({},t,{backgroundColor:n});c(a)};return o.a.createElement(E.Consumer,null,(function(e){var n=e.theme;return o.a.createElement("div",{ref:k,style:{gridRowEnd:"span ".concat(L)}},o.a.createElement("div",{className:"note-inner",onMouseOver:function(){return y(!0)},onMouseEnter:function(){return y(!0)},onMouseLeave:function(){return y(!1)},onClick:M,style:{position:"relative",backgroundColor:"".concat(t.backgroundColor),color:"LIGHT_THEME"===n&&""===t.backgroundColor?"#000000":"#eeeeee"}},T&&o.a.createElement(D,{colors:n===p?h:v,selectedIndex:_,handleBackgroundColor:V,setColorPickerVisibility:w,position:{key:"right",value:"16px"}}),N&&o.a.createElement("div",{className:n===p?"star-icon-action icon":"star-icon-action icon icon-light",onClick:G},o.a.createElement("i",{className:"material-icons md-18"},t.isStarred?"star":"star_border")),o.a.createElement("div",{className:"note-title"},t.title),o.a.createElement("div",{className:"note-content"},t.body),""!==t.image&&o.a.createElement("div",{className:"note-image-container"},o.a.createElement("img",{className:"note-image",alt:"invalid_img_url",src:t.image})),o.a.createElement("div",{className:"note-actions"},N&&o.a.createElement("div",{className:n===p?"note-action icon":"note-action icon icon-light",onClick:P},o.a.createElement("i",{className:t.isArchived?"material-icons md-18":"material-icons-outlined  md-18"},"archive")),N&&o.a.createElement("div",{className:n===p?"note-action icon":"note-action icon icon-light"},o.a.createElement("i",{className:"material-icons md-18"},"add_photo_alternate")),N&&o.a.createElement("div",{className:n===p?"note-action icon":"note-action icon icon-light",onMouseOver:function(){return w(!0)},onMouseOut:function(){return w(!1)}},o.a.createElement("i",{className:"material-icons md-18"},"color_lens")),N&&o.a.createElement("div",{className:n===p?"note-action icon":"note-action icon icon-light",onClick:R},o.a.createElement("i",{className:"material-icons md-18"},"delete")))))}))},B=function(e){e.target.style.height="inherit";var t=window.getComputedStyle(e.target),n=parseInt(t.getPropertyValue("border-top-width"),10)+parseInt(t.getPropertyValue("padding-top"),10)+e.target.scrollHeight+parseInt(t.getPropertyValue("padding-bottom"),10)+parseInt(t.getPropertyValue("border-bottom-width"),10);e.target.style.height="".concat(n,"px")},W=function(e){var t=e.modalVisibility,n=e.setModalVisibility,a=e.onNoteChange,r=e.selectedNote,i=e.theme;return o.a.createElement("div",{className:t?"modale opened":"modale"},o.a.createElement("div",{className:i===p?"modal-dialog":"modal-dialog modal-dialog-light"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("input",{onChange:a,value:r.title,className:i===p?"note-title-input":"note-title-input note-title-input-light",type:"text",name:"title",placeholder:"Title"}),o.a.createElement("textarea",{onChange:a,value:r.body,name:"body",onKeyDown:B,rows:1,className:i===p?"note-content-input":"note-content-input note-content-input-light",type:"text",placeholder:"Take a note..."}),o.a.createElement("input",{onChange:a,value:r.image,className:i===p?"note-title-input":"note-title-input note-title-input-light",type:"text",name:"image",placeholder:"Paste your image url here"}),o.a.createElement("button",{className:i===p?"modal-btn note-btn":"modal-btn note-btn note-btn-light",onClick:function(){return n(!1)}},"Close"))))},K=function(e){var t=e.notes,n=e.onRemove,r=e.onArchive,i=e.onUpdate,c=e.onStar,l=Object(a.useState)(U),s=Object(f.a)(l,2),u=s[0],m=s[1],d=Object(a.useState)(!1),p=Object(f.a)(d,2),v=p[0],h=p[1],g=Object(a.useState)(!1),N=Object(f.a)(g,2),y=N[0],O=N[1],C=Object(a.useState)({rowHeight:0,rowGap:0}),T=Object(f.a)(C,2),w=T[0],S=T[1],j=Object(a.useRef)(null);Object(a.useEffect)((function(){I().then((function(e){e&&e.modalVisibility&&e.selectedNote&&(h(!0),m(e.selectedNote))})),_()}),[]),Object(a.useEffect)((function(){A(v,u)}),[v,u]),Object(a.useEffect)((function(){t.filter((function(e){return e.isStarred})).length>0&&t.filter((function(e){return!e.isStarred})).length>0?O(!0):O(!1)}),[t]);var _=function(){var e=parseInt(window.getComputedStyle(j.current).getPropertyValue("grid-auto-rows")),t=parseInt(window.getComputedStyle(j.current).getPropertyValue("grid-row-gap"));S({rowGap:t,rowHeight:e})},x=function(e){var t=Object(b.a)({},u,Object(V.a)({},e.currentTarget.name,e.currentTarget.value));m(t),i(t)};return o.a.createElement(E.Consumer,null,(function(e){var a=e.theme;return o.a.createElement("div",null,y&&o.a.createElement("div",{style:{marginBottom:"8px"},className:"note-tag"},"STARRED"),o.a.createElement("div",{className:"notes-grid"},t.filter((function(e){return e.isStarred})).map((function(e){return o.a.createElement(F,{dimensions:w,key:e.id,note:e,onRemove:n,onArchive:r,onStar:c,onUpdate:i,setModalVisibility:h,setSelectedNote:m})}))),y&&o.a.createElement("div",{style:{marginTop:"16px",marginBottom:"8px"},className:"note-tag"},"OTHERS"),o.a.createElement("div",{ref:j,className:"notes-grid"},t.filter((function(e){return!e.isStarred})).map((function(e){return o.a.createElement(F,{dimensions:w,key:e.id,note:e,onRemove:n,onArchive:r,onStar:c,onUpdate:i,setModalVisibility:h,setSelectedNote:m})}))),o.a.createElement("div",null,0===t.length&&o.a.createElement("div",{className:"placeholder-note"},o.a.createElement("i",{className:"material-icons-outlined md-96 placeholder-icon"},"note"),o.a.createElement("div",{className:"placeholder-title"},"Your notes will appear here"))),o.a.createElement(W,{modalVisibility:v,setModalVisibility:h,onNoteChange:x,selectedNote:u,theme:a}))}))},J=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i={isStarred:o,isArchived:r,title:e,body:t,image:n,backgroundColor:a};return function(e){w(i).then((function(t){e({type:"ADD_NEW_NOTE",note:t})}))}},X=function(e){return function(t,n){_(e).then((function(){t({type:"UPDATE_NOTE",note:e})}))}},q=function(e){var t=Object(b.a)({},e,{isStarred:!e.isStarred});return function(e,n){_(t).then((function(){e({type:"TOGGLE_NOTE",note:t})}))}},Y=function(e){var t=Object(b.a)({},e,{isArchived:!e.isArchived});return function(e,n){_(t).then((function(){e({type:"TOGGLE_NOTE",note:t})}))}},$=function(e){return function(t){j(e).then((function(){t({type:"REMOVE_NOTE",id:e.id})}))}},z=Object(d.b)((function(e){var t=e.notes,n=e.filter;return{notes:t.filter((function(e){return!e.isArchived&&(e.title.toLowerCase().includes(n.noteTitleFilter.toLowerCase())||e.body.toLowerCase().includes(n.noteTitleFilter.toLowerCase()))}))}}),(function(e){return{onArchive:function(t){e(Y(t))},onRemove:function(t){e($(t))},onUpdate:function(t){e(X(t))},onStar:function(t){e(q(t))}}}))((function(e){var t=e.notes,n=e.onRemove,a=e.onArchive,r=e.onUpdate,i=e.onStar;return o.a.createElement(K,{notes:t,onRemove:n,onArchive:a,onUpdate:r,onStar:i})})),Q=Object(d.b)((function(e){var t=e.notes,n=e.filter;return{notes:t.filter((function(e){return e.isArchived&&(e.title.toLowerCase().includes(n.noteTitleFilter.toLowerCase())||e.body.toLowerCase().includes(n.noteTitleFilter.toLowerCase()))}))}}),(function(e){return{onArchive:function(t){e(Y(t))},onRemove:function(t){e($(t))},onUpdate:function(t){e(X(t))},onStar:function(t){e(q(t))}}}))((function(e){var t=e.notes,n=e.onRemove,a=e.onArchive,r=e.onUpdate,i=e.onStar;return o.a.createElement(K,{notes:t,onRemove:n,onArchive:a,onUpdate:r,onStar:i})})),Z=function(e){var t=e.isFocussed,n=e.setFocus,r=e.noteState,i=e.setNoteState,c=e.onSave,l=Object(a.useState)(0),s=Object(f.a)(l,2),u=s[0],m=s[1],d=Object(a.useState)(!1),g=Object(f.a)(d,2),N=g[0],y=g[1],O=Object(a.useState)(!1),C=Object(f.a)(O,2),T=C[0],w=C[1],S=function(e){i(Object(b.a)({},r,Object(V.a)({},e.target.name,e.target.value)))},j=function(){i((function(e){return Object(b.a)({},e,{isStarred:!e.isStarred})}))},_=function(){i((function(e){return Object(b.a)({},e,{isArchived:!e.isArchived})}))},x=function(e,t){m(e),i((function(e){return Object(b.a)({},e,{backgroundColor:t})}))},k=function(){w((function(e){return!e}))},I=function(){w(!1),i((function(e){return Object(b.a)({},e,{image:""})}))};return t?o.a.createElement(E.Consumer,null,(function(e){var t=e.theme;return o.a.createElement("div",{className:"note-add",style:{position:"relative",backgroundColor:"".concat(t===p?h[u]:v[u])},onClick:function(e){return e.stopPropagation()}},N&&o.a.createElement(D,{colors:t===p?h:v,selectedIndex:u,handleBackgroundColor:x,setColorPickerVisibility:y,position:{key:"left",value:"16px"}}),o.a.createElement("div",{className:"LIGHT_THEME"===t&&0===u?"star-icon icon icon-light":"star-icon icon material-icon-white",onClick:j},o.a.createElement("i",{className:"material-icons"},r.isStarred?"star":"star_border")),o.a.createElement("input",{onChange:S,value:r.title,className:"LIGHT_THEME"===t&&0===u?"note-title-input note-title-input-light":"note-title-input",type:"text",name:"title",placeholder:"Title"}),o.a.createElement("textarea",{onChange:S,value:r.body,name:"body",onKeyDown:B,rows:1,className:"LIGHT_THEME"===t&&0===u?"note-content-input note-content-input-light":"note-content-input",type:"text",placeholder:"Take a note..."}),T&&o.a.createElement("input",{onChange:S,value:r.image,className:"LIGHT_THEME"===t&&0===u?"note-title-input note-title-input-light":"note-title-input",type:"text",name:"image",placeholder:"Paste your image url here"}),""!==r.image&&o.a.createElement("div",{className:"note-image-container"},o.a.createElement("div",{className:t===p?"icon note-image-remove":"icon icon-light note-image-remove",onClick:I},o.a.createElement("i",{className:"material-icons"},"clear")),o.a.createElement("img",{className:"note-image",alt:"invalid_img_url",src:r.image})),o.a.createElement("div",{className:"note-add-actions"},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{className:"LIGHT_THEME"===t&&0===u?"icon  icon-light":"icon material-icon-white",onClick:_},o.a.createElement("i",{className:r.isArchived?"material-icons":"material-icons-outlined"},"archive")),o.a.createElement("div",{className:"LIGHT_THEME"===t&&0===u?"icon  icon-light":"icon material-icon-white",onClick:k},o.a.createElement("i",{className:r.isArchived?"material-icons":"material-icons-outlined"},"add_photo_alternate")),o.a.createElement("div",{className:"LIGHT_THEME"===t&&0===u?"icon  icon-light":"icon material-icon-white",onMouseOver:function(){return y(!0)},onMouseOut:function(){return y(!1)}},o.a.createElement("i",{className:"material-icons"},"color_lens"))),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("button",{className:"LIGHT_THEME"===t&&0===u?"note-btn note-btn-light":"note-btn",onClick:function(){c(),m(0),w(!1)}},"Close"))))})):o.a.createElement(E.Consumer,null,(function(e){var t=e.theme;return o.a.createElement("div",{style:{display:"flex"},className:"note-add",onClick:function(e){return e.stopPropagation()}},o.a.createElement("div",{className:"note-add-unfocussed",onClick:function(){return n(!0)}},"Take a note"),o.a.createElement("div",{style:{flex:"1",display:"flex"}},o.a.createElement("div",{className:t===p?"icon":"icon icon-light",onClick:function(){n(!0),w(!0)}},o.a.createElement("i",{className:"material-icons"},"add_photo_alternate"))))}))},ee=function(e){var t=e.selctedIndex,n=e.addNewNote,r=Object(a.useState)(!1),i=Object(f.a)(r,2),c=i[0],l=i[1],s=Object(a.useState)(U),u=Object(f.a)(s,2),m=u[0],d=u[1],p=function(){var e=m.title,t=m.body,a=m.isStarred,o=m.isArchived,r=m.backgroundColor,i=m.image;""===e&&""===t||(n(e,t,i,r,a,o),d(U)),l(!1)};return o.a.createElement("main",{className:"main",onClick:p},0===t&&o.a.createElement("div",{className:"note-add-container"},o.a.createElement(Z,{isFocussed:c,setFocus:l,noteState:m,setNoteState:d,onSave:p})),o.a.createElement("div",{className:"notes-container"},function(){switch(t){case 0:return o.a.createElement(z,null);case 1:return o.a.createElement(Q,null);default:return null}}()))},te=Object(d.b)(null,(function(e){return Object(G.b)({addNewNote:J},e)}))((function(e){var t=e.addNewNote,n=e.selctedIndex;return o.a.createElement(ee,{addNewNote:t,selctedIndex:n})})),ne=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).setNavbarCollapse=function(){return n.setState((function(e){return{isNavbarCollapased:!e.isNavbarCollapased}}))},n.setSelectedIndex=function(e){n.setState((function(t){var n=t.isNavbarCollapased;return{isNavbarCollapased:window.innerWidth<775?!n:n,selctedIndex:e}}))},n.toggleTheme=function(){return n.setState((function(e){return{theme:e.theme===p?"LIGHT_THEME":p}}))},n.state={isNavbarCollapased:window.innerWidth<775,selctedIndex:0,theme:p,toggleTheme:n.toggleTheme},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.selctedIndex,n=e.isNavbarCollapased,a=e.theme;return o.a.createElement(E.Provider,{value:{theme:this.state.theme,toggleTheme:this.state.toggleTheme}},o.a.createElement("div",{className:a===p?"App App-dark":"App App-light"},o.a.createElement(M,{setNavbarCollapse:this.setNavbarCollapse}),o.a.createElement("div",{className:"separator"}),o.a.createElement("div",{className:"container"},o.a.createElement(R,{theme:a,selctedIndex:t,setSelectedIndex:this.setSelectedIndex,isNavbarCollapased:n}),o.a.createElement(te,{selctedIndex:t}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=n(21),oe=Object(G.c)({notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if("UPDATE_ALL_NOTES"===t.type)return t.notes;if("ADD_NEW_NOTE"===t.type){var n=t.note,a=n.id,o=n.isArchived,r=n.title,i=n.body,c=n.image,l=n.isStarred,s=n.backgroundColor;return[].concat(Object(g.a)(e),[{id:a,isArchived:o,title:r,body:i,image:c,isStarred:l,backgroundColor:s}])}return"REMOVE_NOTE"===t.type?e.filter((function(e){return e.id!==t.id})):"UPDATE_NOTE"===t.type||"TOGGLE_NOTE"===t.type?e.map((function(e){return e.id===t.note.id?Object(b.a)({},t.note):e})):"UPDATE_ALL_AS_ARCHIVE"===t.type?e.map((function(e){return Object(b.a)({},e,{isArchived:!0})})):"UPDATE_ALL_AS_UNARCHIVE"===t.type?e.map((function(e){return Object(b.a)({},e,{isArchived:!1})})):e},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{noteTitleFilter:""},t=arguments.length>1?arguments[1]:void 0;return"UPDATE_NOTE_TITLE_FILTER"===t.type?Object(b.a)({},e,{noteTitleFilter:t.text}):e}}),re={notes:[],filter:{noteTitleFilter:""}},ie=[ae.a],ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,le=Object(G.e)(oe,re,ce.apply(void 0,[G.a.apply(void 0,ie)].concat([])));le.dispatch((function(e){S().then((function(t){e({type:"UPDATE_ALL_NOTES",notes:t})}))}));var se=le;i.a.render(o.a.createElement(d.a,{store:se},o.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.58b2ec7f.chunk.js.map