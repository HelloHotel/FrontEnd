(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2fe3698"],{"0274":function(t,e,a){t.exports=a.p+"img/feedback.69c9cda2.jpg"},"03ad":function(t,e,a){t.exports=a.p+"img/HelloHotel_logo_blue.94ab92ce.png"},"2d8a":function(t,e,a){t.exports=a.p+"img/staff.6e04d1fe.jpg"},"6e63":function(t,e,a){t.exports=a.p+"img/inventory.b155c0a5.png"},"90f3":function(t,e,a){t.exports=a.p+"img/publicity.0f799ec4.jpeg"},9844:function(t,e,a){t.exports=a.p+"img/schedule.f5a1d584.jpg"},"9dc8":function(t,e,a){t.exports=a.p+"img/costs.66368915.jpg"},b67c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-navigation-drawer",{attrs:{app:"",clipped:"",permanent:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-layout",{attrs:{wrap:""}},t._l(t.cards,(function(e){return i("v-col",{key:e.title},[i("v-card",{attrs:{color:e.color,height:"80",width:"230",to:e.path}},[i("v-img",{staticClass:"white--text align-lg-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"70"}},[i("v-card-title",{domProps:{textContent:t._s(e.title)}})],1)],1)],1)})),1)],1),i("v-app-bar",{attrs:{app:"",color:"rgba(63, 103, 250, 1)","clipped-left":""}},[i("v-card",{attrs:{flat:"",color:"rgba(63, 103, 250, 1)",to:"/Home_App"}},[i("v-img",{attrs:{"max-height":"50","max-width":"50",src:a("03ad")}})],1),i("v-toolbar-title",[i("v-divider",{staticClass:"mx-1",attrs:{inset:"",vertical:""}}),i("span",{staticClass:"display-1"},[t._v("HELLO HOTEL")])],1),i("v-spacer"),i("v-btn",{attrs:{plain:"",to:"/administrator",color:"white"}},[t._v("Administrator")])],1),i("h1",[t._v("Register")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:""}}),i("v-card",{attrs:{height:"50",width:"200",flat:""}},[i("v-card-actions",[i("v-dialog",{attrs:{persistent:"","max-width":"400"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"rgba(63, 103, 250, 1)",dark:""}},"v-btn",r,!1),a),[t._v(" Save ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[t._v(" Do you want to save this information?")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Accept ")]),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")])],1)],1)],1),i("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),i("v-btn",{staticClass:"white--text",attrs:{color:"rgba(63, 103, 250, 1)"}},[t._v("Clear")]),i("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),i("v-btn",{staticClass:"white--text",attrs:{color:"rgba(63, 103, 250, 1)"}},[t._v("Draft")])],1)],1),i("v-layout",[i("v-col",{attrs:{md:"3"}},[i("v-card",{attrs:{height:"500",width:"400"}},[i("v-card-title",[t._v("Client Information")]),i("v-divider"),i("v-card-text",[i("v-form",[i("v-text-field",{attrs:{label:"Name","prepend-icon":"mdi-account"}}),i("v-text-field",{attrs:{label:"Last name","prepend-icon":"mdi-account"}}),i("v-text-field",{attrs:{label:"D.N.I","prepend-icon":"mdi-card-account-details-outline"}}),i("v-text-field",{attrs:{label:"Phone","prepend-icon":"mdi-phone"}}),i("v-text-field",{attrs:{label:"E-mail","prepend-icon":"mdi-mail"}}),i("v-text-field",{attrs:{label:"Age","prepend-icon":"mdi-account"}})],1)],1)],1)],1),i("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),i("v-col",{attrs:{md:"3"}},[i("v-card",{attrs:{height:"500",width:"400"}},[i("v-card-title",[t._v("Data Room")]),i("v-divider"),i("v-card-text",[i("v-form",[i("v-text-field",{attrs:{label:"Room","prepend-icon":"mdi-bed-king-outline"}}),i("v-menu",{ref:"menu_in",attrs:{"close-on-content-click":!1,"return-value":t.date_in,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date_in=e},"update:return-value":function(e){t.date_in=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-text-field",t._g({attrs:{label:"Date in","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date_in,callback:function(e){t.date_in=e},expression:"date_in"}},a))]}}]),model:{value:t.menu_in,callback:function(e){t.menu_in=e},expression:"menu_in"}},[i("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date_in,callback:function(e){t.date_in=e},expression:"date_in"}},[i("div",{staticClass:"flex-grow-1"}),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu_in=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu_in.save(t.date_in)}}},[t._v("OK")])],1)],1),i("v-menu",{ref:"menu_out",attrs:{"close-on-content-click":!1,"return-value":t.date_out,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date_out=e},"update:return-value":function(e){t.date_out=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-text-field",t._g({attrs:{label:"Date out","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date_out,callback:function(e){t.date_out=e},expression:"date_out"}},a))]}}]),model:{value:t.menu_out,callback:function(e){t.menu_out=e},expression:"menu_out"}},[i("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date_out,callback:function(e){t.date_out=e},expression:"date_out"}},[i("div",{staticClass:"flex-grow-1"}),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu_out=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu_out.save(t.date_out)}}},[t._v("OK")])],1)],1),i("v-text-field",{attrs:{label:"Cost","prepend-icon":"mdi-cash-multiple"}}),i("v-select",{attrs:{label:"Select Method Payment",items:t.methods,"item-text":"name"}})],1)],1)],1)],1),i("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),i("v-col",{attrs:{md:"5"}},[i("v-card",{attrs:{height:"500",width:"400"}},[i("v-card-title",[t._v("Room Information")]),i("v-divider"),i("v-card-text",[i("v-form",[i("v-select",{attrs:{"append-icon":"mdi-bed",label:"Select Number of Beds",items:t.beds,"item-text":"name"}}),i("v-select",{attrs:{"append-icon":"mdi-bed-king",label:"Select Number of rooms",items:t.rooms,"item-text":"name"}}),i("v-layout",{attrs:{md:"4"}},[i("v-card-subtitle",[t._v("Breakfast S/. 30.00")]),i("v-text-field",{attrs:{label:"Yes or Not","prepend-icon":"mdi-cash-multiple"}})],1),i("v-layout",{attrs:{md:"4"}},[i("v-card-subtitle",[t._v("Package Gold S/. 100.00")]),i("v-text-field",{attrs:{label:"Yes or Not","prepend-icon":"mdi-cash-multiple"}})],1),i("v-layout",{attrs:{md:"4"}},[i("v-card-subtitle",[t._v("Pool S/. 30.00")]),i("v-text-field",{attrs:{label:"Yes or Not","prepend-icon":"mdi-cash-multiple"}})],1),i("v-layout",{attrs:{md:"4"}},[i("v-card-subtitle",[t._v("Events S/. 50.00")]),i("v-text-field",{attrs:{label:"Yes or Not","prepend-icon":"mdi-cash-multiple"}})],1)],1)],1)],1)],1)],1)],1)},r=[],n={name:"admin-register",data:function(){return{cards:[{title:"Register",color:"rgba(63, 103, 250, 1)",src:a("dd00"),path:"/admin-register"},{title:"Rooms",color:"rgba(63, 103, 250, 0.3)",src:a("bb37"),path:"/admin-rooms"},{title:"Inventory",color:"rgba(63, 103, 250, 0.3)",src:a("6e63"),path:"/admin-inventory"},{title:"Client",color:"rgba(63, 103, 250, 0.3)",src:a("de5e"),path:"/admin-client"},{title:"Schedule",color:"rgba(63, 103, 250, 0.3)",src:a("9844"),path:"/admin-schedule"},{title:"Staff",color:"rgba(63, 103, 250, 0.3)",src:a("2d8a"),path:"/admin-staff"},{title:"Costs",color:"rgba(63, 103, 250, 0.3)",src:a("9dc8"),path:"/admin-costs"},{title:"Feedback",color:"rgba(63, 103, 250, 0.3)",src:a("0274"),path:"/admin-feedback"},{title:"Publicity",color:"rgba(63, 103, 250, 0.3)",src:a("90f3"),path:"/admin-publicity"}],drawer:null,date_in:(new Date).toISOString().substr(0,10),menu_in:!1,date_out:(new Date).toISOString().substr(0,10),menu_out:!1,modal:!1,menu2:!1,method:"",methods:[{name:"Cash"},{name:"Card"}],dialog:!1,beds:[{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"}],rooms:[{name:"1"},{name:"2"}]}}},o=n,l=a("2877"),c=a("6544"),s=a.n(c),d=a("7496"),v=a("40dc"),u=a("8336"),m=a("b0af"),p=a("99d9"),b=a("62ad"),f=a("2e4b"),g=a("169a"),_=a("ce7e"),x=a("4bd4"),h=a("adda"),k=a("a722"),w=a("e449"),C=a("f774"),y=a("b974"),V=a("2fa4"),S=a("8654"),D=a("2a7f"),j=Object(l["a"])(o,i,r,!1,null,"fb6f2cc8",null);e["default"]=j.exports;s()(j,{VApp:d["a"],VAppBar:v["a"],VBtn:u["a"],VCard:m["a"],VCardActions:p["a"],VCardSubtitle:p["b"],VCardText:p["c"],VCardTitle:p["d"],VCol:b["a"],VDatePicker:f["a"],VDialog:g["a"],VDivider:_["a"],VForm:x["a"],VImg:h["a"],VLayout:k["a"],VMenu:w["a"],VNavigationDrawer:C["a"],VSelect:y["a"],VSpacer:V["a"],VTextField:S["a"],VToolbarTitle:D["a"]})},bb37:function(t,e,a){t.exports=a.p+"img/rooms.5db4891e.jpg"},dd00:function(t,e,a){t.exports=a.p+"img/register.f5c95a3b.jpg"},de5e:function(t,e,a){t.exports=a.p+"img/client.e157fbd1.jpg"}}]);
//# sourceMappingURL=chunk-b2fe3698.fcb2f7d0.js.map