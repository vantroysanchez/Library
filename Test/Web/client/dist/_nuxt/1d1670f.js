(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{298:function(t,o,e){"use strict";e.r(o);var n=e(76),l=e.n(n),r=e(295),c=e.n(r),d={props:["EntityId"],layout:"default",data:function(){return{showModalEdit:!1,book:{description:"",status:!0,editorialId:1,editorial:null},editorial:[{}]}},methods:{getBook:function(t){var o=this;l.a.get("https://localhost:44377/api/Book/".concat(t)).then((function(t){o.book=t.data}))},getEditorial:function(){var t=this;l.a.get("https://localhost:44377/api/Editorial").then((function(o){t.editorial=o.data.$values}))},Save:function(t){var o=this;l.a.put("https://localhost:44377/api/Book/".concat(t),this.book).then((function(t){c()("Guardado","¡Información guardada satisfactoriamente!","success"),o.$router.go(0)}))}},watch:{EntityId:function(t,o){this.getBook(t)}},created:function(){this.getEditorial()}},f=e(53),component=Object(f.a)(d,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("b-modal",{attrs:{id:"modal-edit",size:"lg"},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" Editar libro ")]},proxy:!0},{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"sm"},on:{click:function(o){return t.Save(t.book.id)}}},[t._v("\n          Guardar\n        ")]),t._v(" "),e("b-button",{staticClass:"float-right",attrs:{variant:"default",size:"sm"},on:{click:function(o){t.showModalEdit=!1}}},[t._v("\n          Cerrar\n        ")])],1)]},proxy:!0}]),model:{value:t.showModalEdit,callback:function(o){t.showModalEdit=o},expression:"showModalEdit"}},[t._v(" "),e("div",[e("b-form",[e("b-row",[e("b-col",[e("label",{staticClass:"mr-sm-2",attrs:{for:"inline-form-input-name"}},[t._v("Description")]),t._v(" "),e("b-form-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"inline-form-input-name",placeholder:"Nombre del libro"},model:{value:t.book.description,callback:function(o){t.$set(t.book,"description",o)},expression:"book.description"}})],1),t._v(" "),e("b-col",[e("label",{staticClass:"mr-sm-2"},[t._v("Editorial")]),t._v(" "),e("b-form-select",{model:{value:t.book.editorialId,callback:function(o){t.$set(t.book,"editorialId",o)},expression:"book.editorialId"}},t._l(t.editorial,(function(o,n){return e("b-form-select-option",{key:n,attrs:{value:o.id}},[t._v(t._s(o.description))])})),1)],1),t._v(" "),e("b-col",[e("label",{staticClass:"mr-sm-2"},[t._v("Status")]),t._v(" "),e("b-form-select",{model:{value:t.book.status,callback:function(o){t.$set(t.book,"status",o)},expression:"book.status"}},[e("b-form-select-option",{attrs:{value:!0}},[t._v("Activo")]),t._v(" "),e("b-form-select-option",{attrs:{value:!1}},[t._v("Inactivo")])],1)],1)],1)],1)],1)])],1)}),[],!1,null,null,null);o.default=component.exports}}]);