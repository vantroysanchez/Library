(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{300:function(t,o,e){"use strict";e.r(o);var r=e(0),n=e(76),l=e.n(n),d=e(295),c=e.n(d),f={props:["EntityId"],layout:"default",data:function(){return Object(r.a)({showModalEdit:!1,editorial:{description:"",status:!0}},"editorial",[{}])},methods:{getById:function(t){var o=this;l.a.get("https://crudlibrary.azurewebsites.net/api/Editorial/".concat(t)).then((function(t){o.editorial=t.data}))},Save:function(t){var o=this;l.a.put("https://crudlibrary.azurewebsites.net/api/Editorial/".concat(t),this.editorial).then((function(t){c()("Guardado","¡Información guardada satisfactoriamente!","success"),o.$router.go(0)}))}},watch:{EntityId:function(t,o){this.getById(t)}}},m=e(53),component=Object(m.a)(f,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("b-modal",{attrs:{id:"modal-edit",size:"lg"},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" Editar libro ")]},proxy:!0},{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"sm"},on:{click:function(o){return t.Save(t.editorial.id)}}},[t._v("\n          Guardar\n        ")]),t._v(" "),e("b-button",{staticClass:"float-right",attrs:{variant:"default",size:"sm"},on:{click:function(o){t.showModalEdit=!1}}},[t._v("\n          Cerrar\n        ")])],1)]},proxy:!0}]),model:{value:t.showModalEdit,callback:function(o){t.showModalEdit=o},expression:"showModalEdit"}},[t._v(" "),e("div",[e("b-form",[e("b-row",[e("b-col",[e("label",{staticClass:"mr-sm-2",attrs:{for:"inline-form-input-name"}},[t._v("Description")]),t._v(" "),e("b-form-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"inline-form-input-name",placeholder:"Nombre del libro"},model:{value:t.editorial.description,callback:function(o){t.$set(t.editorial,"description",o)},expression:"editorial.description"}})],1),t._v(" "),e("b-col",[e("label",{staticClass:"mr-sm-2"},[t._v("Status")]),t._v(" "),e("b-form-select",{model:{value:t.editorial.status,callback:function(o){t.$set(t.editorial,"status",o)},expression:"editorial.status"}},[e("b-form-select-option",{attrs:{value:!0}},[t._v("Activo")]),t._v(" "),e("b-form-select-option",{attrs:{value:!1}},[t._v("Inactivo")])],1)],1)],1)],1)],1)])],1)}),[],!1,null,null,null);o.default=component.exports}}]);