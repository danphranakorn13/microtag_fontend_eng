(window.webpackJsonp=window.webpackJsonp||[]).push([[32,5,12],{300:function(t,e,l){"use strict";l.r(e);var r=l(10),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"p-4 text-red-700 bg-red-100 border-l-4 border-red-500",attrs:{role:"alert"}},[l("p",{staticClass:"mb-1 font-bold"},[t._v("อันตราย")]),t._v(" "),l("p",[t._v("5/6/2565 13:36 น. แจ้งเตือนตู้คอนเทนเนอร์: JBI-0001 อุณหภูมิเกิน 30°c")])])}],!1,null,null,null);e.default=component.exports},310:function(t,e,l){var content=l(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(48).default)("d61d45a8",content,!0,{sourceMap:!1})},324:function(t,e,l){"use strict";l(310)},325:function(t,e,l){var r=l(47)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n#map{\n  height:100%\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},335:function(t,e,l){"use strict";l.r(e);var r={name:"NewDriverModal",props:{show:Boolean},data:function(){return{selectRoute:!1,alarmTempConType:"",alarmMoisConType:"",alarmFromType:"",alarmFromId:"",alarmLevel:""}},methods:{close_modal:function(){this.$emit("close")},onSubmit:function(){this.close_modal()}}},n=(l(324),l(10)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.show?l("div",{staticClass:"fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full"},[l("div",{staticClass:"absolute w-full h-full bg-gray-900 opacity-50 modal-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.close_modal()}}}),t._v(" "),l("div",{staticClass:"z-30 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg lg:w-6/12"},[l("div",{staticClass:"px-6 py-4 text-left"},[t._m(0),t._v(" "),l("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[l("div",{staticClass:"grid grid-cols-1 gap-4 md:grid-cols-2"},[t._m(1),t._v(" "),l("div",{staticClass:"flex justify-center"},[l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("ระดับ*")]),t._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:t.alarmLevel,expression:"alarmLevel"}],staticClass:"block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",on:{change:function(e){var l=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.alarmLevel=e.target.multiple?l:l[0]}}},[l("option",{attrs:{disabled:"",value:""}},[t._v("เลือก")]),t._v(" "),l("option",[t._v("แจ้งเตือน")]),t._v(" "),l("option",[t._v("อันตราย")])])])]),t._v(" "),l("div",{staticClass:"w-full"},[t._m(2),t._v(" "),l("div",[l("div",{staticClass:"flex items-center"},[l("div",{staticClass:"w-1/3 mb-3 mr-2 md:mr-4"},[l("label",{staticClass:"inline-block mb-2 text-sm text-gray-500",attrs:{for:"formFile"}},[t._v("อุณหภูมิ*")]),t._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:t.alarmTempConType,expression:"alarmTempConType"}],staticClass:"block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",on:{change:function(e){var l=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.alarmTempConType=e.target.multiple?l:l[0]}}},[l("option",{attrs:{disabled:"",value:""}},[t._v("เลือก")]),t._v(" "),l("option",[t._v("มากกว่า")]),t._v(" "),l("option",[t._v("น้อยกว่า")]),t._v(" "),l("option",[t._v("กำหนด")])])]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:"กำหนด"!=t.alarmTempConType,expression:"alarmTempConType != 'กำหนด'"}],staticClass:"w-2/3 mb-3"},[l("label",{staticClass:"inline-block mb-2 text-sm text-gray-500",attrs:{for:"formFile"}},[t._v("องศา")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"number",placeholder:"30"}})])]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:"กำหนด"==t.alarmTempConType,expression:"alarmTempConType == 'กำหนด'"}],staticClass:"flex items-center"},[t._m(3),t._v(" "),t._m(4)]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:"กำหนด"==t.alarmTempConType,expression:"alarmTempConType == 'กำหนด'"}],staticClass:"flex items-center"},[t._m(5),t._v(" "),t._m(6)])]),t._v(" "),l("div",[l("div",{staticClass:"flex items-center"},[l("div",{staticClass:"w-1/3 mb-3 mr-2 md:mr-4"},[l("label",{staticClass:"inline-block mb-2 text-sm text-gray-500",attrs:{for:"formFile"}},[t._v("ความชื้น*")]),t._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:t.alarmMoisConType,expression:"alarmMoisConType"}],staticClass:"block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",on:{change:function(e){var l=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.alarmMoisConType=e.target.multiple?l:l[0]}}},[l("option",{attrs:{disabled:"",value:""}},[t._v("เลือก")]),t._v(" "),l("option",[t._v("มากกว่า")]),t._v(" "),l("option",[t._v("น้อยกว่า")]),t._v(" "),l("option",[t._v("กำหนด")])])]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:"กำหนด"!=t.alarmMoisConType,expression:"alarmMoisConType != 'กำหนด'"}],staticClass:"w-2/3 mb-3"},[l("label",{staticClass:"inline-block mb-2 text-sm text-gray-500",attrs:{for:"formFile"}},[t._v("เปอร์เซ็น")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"number",placeholder:"30"}})])]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:"กำหนด"==t.alarmMoisConType,expression:"alarmMoisConType == 'กำหนด'"}],staticClass:"flex items-center"},[t._m(7),t._v(" "),t._m(8)]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:"กำหนด"==t.alarmMoisConType,expression:"alarmMoisConType == 'กำหนด'"}],staticClass:"flex items-center"},[t._m(9),t._v(" "),t._m(10)])])]),t._v(" "),l("div",{staticClass:"w-full"},[t._m(11),t._v(" "),l("div",{staticClass:"flex items-center"},[l("div",{staticClass:"w-1/2 mb-3 mr-2 md:mr-4"},[l("label",{staticClass:"inline-block mb-2 text-sm text-gray-500",attrs:{for:"formFile"}},[t._v("ประเภท*")]),t._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:t.alarmFromType,expression:"alarmFromType"}],staticClass:"block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",on:{change:function(e){var l=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.alarmFromType=e.target.multiple?l:l[0]}}},[l("option",{attrs:{disabled:"",value:""}},[t._v("เลือก")]),t._v(" "),l("option",[t._v("งาน")]),t._v(" "),l("option",[t._v("คอนเทอนเนอร์")])])]),t._v(" "),l("div",{staticClass:"w-1/2 mb-3"},[l("label",{staticClass:"inline-block mb-2 text-sm text-gray-500",attrs:{for:"formFile"}},[t._v("รหัส*")]),t._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:t.alarmFromId,expression:"alarmFromId"}],staticClass:"block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",attrs:{disabled:!t.alarmFromType},on:{change:function(e){var l=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.alarmFromId=e.target.multiple?l:l[0]}}},[l("option",{attrs:{disabled:"",value:""}},[t._v("เลือก")]),t._v(" "),l("option",[t._v("job 1")]),t._v(" "),l("option",[t._v("job 2")]),t._v(" "),l("option",[t._v("job 3")])])])])])]),t._v(" "),t._m(12)])])])]):t._e()}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex items-center justify-center mb-5"},[l("p",{staticClass:"text-2xl font-bold text-center"},[t._v("เพิ่มการแจ้งเตือน")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex justify-center"},[l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("ชื่อการแจ้งเตือน*")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"text",placeholder:"ชื่อการแจ้งเตือน"}})])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("เงื่อนไขการแจ้งเตือน*")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-1/3 mb-3 mr-2 md:mr-4"},[l("label",{staticClass:"inline-block mb-2 text-sm text-gray-500",attrs:{for:"formFile"}},[t._v("เงื่อนไข*")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",attrs:{disabled:"",value:"มากกว่า"}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-2/3 mb-3"},[l("label",{staticClass:"inline-block mb-2 text-sm text-gray-500",attrs:{for:"formFile"}},[t._v("องศา*")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"number",placeholder:"30"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-1/3 mb-3 mr-2 md:mr-4"},[e("input",{staticClass:"block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",attrs:{disabled:"",value:"น้อยกว่า"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-2/3 mb-3"},[e("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"number",placeholder:"30"}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-1/3 mb-3 mr-2 md:mr-4"},[l("label",{staticClass:"inline-block mb-2 text-sm text-gray-500",attrs:{for:"formFile"}},[t._v("เงื่อนไข*")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",attrs:{disabled:"",value:"มากกว่า"}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-2/3 mb-3"},[l("label",{staticClass:"inline-block mb-2 text-sm text-gray-500",attrs:{for:"formFile"}},[t._v("เปอร์เซ็น*")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"number",placeholder:"30"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-1/3 mb-3 mr-2 md:mr-4"},[e("input",{staticClass:"block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",attrs:{disabled:"",value:"น้อยกว่า"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-2/3 mb-3"},[e("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"number",placeholder:"30"}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("เตือนจาก*")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mt-6"},[l("button",{staticClass:"flex items-center justify-center w-full px-6 py-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none",attrs:{type:"submit"}},[l("span",{staticClass:"m-2 text-white"},[t._v("เพิ่ม")])])])}],!1,null,null,null);e.default=component.exports},353:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{showAddTruckModal:!1}},methods:{toggleAddTruckModal:function(){this.showAddTruckModal=!this.showAddTruckModal}}},n=l(10),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mt-5 mb-10"},[l("NewAlarmModal",{attrs:{show:t.showAddTruckModal},on:{close:function(e){t.showAddTruckModal=!1}}}),t._v(" "),l("div",{staticClass:"w-full mb-5"},[l("RealtimeAlert")],1),t._v(" "),l("div",{staticClass:"flex flex-wrap items-center justify-between mb-5 space-y-2"},[t._m(0),t._v(" "),l("div",{staticClass:"w-full md:block md:w-1/2"},[l("button",{staticClass:"float-right w-full px-2 py-1 text-white bg-blue-500 border-2 border-blue-400 shadow-md md:w-auto rounded-3xl text-md",on:{click:function(e){return t.toggleAddTruckModal()}}},[t._v("+ การแจ้งเตือน")])])]),t._v(" "),l("div",{staticClass:"flex items-center justify-between"},[l("div",{staticClass:"relative hidden md:flex md:w-1/2"},[l("div",{staticClass:"absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400"},[l("svg",{staticClass:"w-6 h-6",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])]),t._v(" "),l("input",{staticClass:"w-full h-10 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-300 rounded-lg sm:text-base focus:outline-none focus:border-indigo-400",attrs:{id:"search",type:"search",name:"search",placeholder:"Search..."}})])]),t._v(" "),l("div",{staticClass:"w-full mb-8 overflow-hidden rounded-lg shadow-xs"},[l("div",{staticClass:"w-full overflow-x-auto"},[l("table",{staticClass:"w-full whitespace-no-wrap"},[t._m(1),t._v(" "),l("tbody",{staticClass:"bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"},[l("tr",{staticClass:"text-gray-700 dark:text-gray-400"},[l("td",{staticClass:"px-4 py-3"},[l("NuxtLink",{attrs:{to:"/admin/settings/info"}},[l("p",{staticClass:"font-semibold text-blue-500 hover:underline"},[t._v("ALI-0001")])])],1),t._v(" "),t._m(2),t._v(" "),l("td",{staticClass:"px-4 py-3"},[l("p",{staticClass:"flex items-center"},[t._v("อุณหภูมิ\n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v("70°C\n                      ")]),t._v(" "),l("p",{staticClass:"flex items-center"},[t._v("อุณหภูมิ \n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v("25°C\n                      ")]),t._v(" "),l("p",{staticClass:"flex items-center"},[t._v("ความชื้น\n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v("80%\n                      ")])]),t._v(" "),l("td",{staticClass:"px-4 py-3"},[l("NuxtLink",{attrs:{to:"/admin/containers/info"}},[l("p",{staticClass:"font-semibold text-blue-500 hover:underline"},[t._v("JBI-0001")])])],1),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),l("tr",{staticClass:"text-gray-700 dark:text-gray-400"},[l("td",{staticClass:"px-4 py-3"},[l("NuxtLink",{attrs:{to:"/admin/settings/info"}},[l("p",{staticClass:"font-semibold text-blue-500 hover:underline"},[t._v("ALI-0001")])])],1),t._v(" "),t._m(5),t._v(" "),l("td",{staticClass:"px-4 py-3"},[l("p",{staticClass:"flex items-center"},[t._v("อุณหภูมิ\n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v("70°C\n                      ")]),t._v(" "),l("p",{staticClass:"flex items-center"},[t._v("อุณหภูมิ \n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v("25°C\n                      ")]),t._v(" "),l("p",{staticClass:"flex items-center"},[t._v("ความชื้น\n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v("80%\n                      ")])]),t._v(" "),l("td",{staticClass:"px-4 py-3"},[l("NuxtLink",{attrs:{to:"/admin/containers/info"}},[l("p",{staticClass:"font-semibold text-blue-500 hover:underline"},[t._v("JBI-0001")])])],1),t._v(" "),t._m(6),t._v(" "),t._m(7)]),t._v(" "),l("tr",{staticClass:"text-gray-700 dark:text-gray-400"},[l("td",{staticClass:"px-4 py-3"},[l("NuxtLink",{attrs:{to:"/admin/settings/info"}},[l("p",{staticClass:"font-semibold text-blue-500 hover:underline"},[t._v("ALI-0001")])])],1),t._v(" "),t._m(8),t._v(" "),l("td",{staticClass:"px-4 py-3"},[l("p",{staticClass:"flex items-center"},[t._v("อุณหภูมิ\n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v("70°C\n                      ")]),t._v(" "),l("p",{staticClass:"flex items-center"},[t._v("อุณหภูมิ \n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v("25°C\n                      ")]),t._v(" "),l("p",{staticClass:"flex items-center"},[t._v("ความชื้น\n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v("80%\n                      ")])]),t._v(" "),l("td",{staticClass:"px-4 py-3"},[l("NuxtLink",{attrs:{to:"/admin/containers/info"}},[l("p",{staticClass:"font-semibold text-blue-500 hover:underline"},[t._v("JBI-0001")])])],1),t._v(" "),t._m(9),t._v(" "),t._m(10)]),t._v(" "),l("tr",{staticClass:"text-gray-700 dark:text-gray-400"},[l("td",{staticClass:"px-4 py-3"},[l("NuxtLink",{attrs:{to:"/admin/settings/info"}},[l("p",{staticClass:"font-semibold text-blue-500 hover:underline"},[t._v("ALI-0001")])])],1),t._v(" "),t._m(11),t._v(" "),l("td",{staticClass:"px-4 py-3"},[l("p",{staticClass:"flex items-center"},[t._v("อุณหภูมิ\n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v("70°C\n                      ")]),t._v(" "),l("p",{staticClass:"flex items-center"},[t._v("อุณหภูมิ \n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v("25°C\n                      ")]),t._v(" "),l("p",{staticClass:"flex items-center"},[t._v("ความชื้น\n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v("80%\n                      ")])]),t._v(" "),l("td",{staticClass:"px-4 py-3"},[l("NuxtLink",{attrs:{to:"/admin/containers/info"}},[l("p",{staticClass:"font-semibold text-blue-500 hover:underline"},[t._v("JBI-0001")])])],1),t._v(" "),t._m(12),t._v(" "),t._m(13)]),t._v(" "),l("tr",{staticClass:"text-gray-700 dark:text-gray-400"},[l("td",{staticClass:"px-4 py-3"},[l("NuxtLink",{attrs:{to:"/admin/settings/info"}},[l("p",{staticClass:"font-semibold text-blue-500 hover:underline"},[t._v("ALI-0001")])])],1),t._v(" "),t._m(14),t._v(" "),l("td",{staticClass:"px-4 py-3"},[l("p",{staticClass:"flex items-center"},[t._v("อุณหภูมิ\n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v("70°C\n                      ")]),t._v(" "),l("p",{staticClass:"flex items-center"},[t._v("อุณหภูมิ \n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v("25°C\n                      ")]),t._v(" "),l("p",{staticClass:"flex items-center"},[t._v("ความชื้น\n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v("80%\n                      ")])]),t._v(" "),l("td",{staticClass:"px-4 py-3"},[l("NuxtLink",{attrs:{to:"/admin/containers/info"}},[l("p",{staticClass:"font-semibold text-blue-500 hover:underline"},[t._v("JBI-0001")])])],1),t._v(" "),t._m(15),t._v(" "),t._m(16)]),t._v(" "),l("tr",{staticClass:"text-gray-700 dark:text-gray-400"},[l("td",{staticClass:"px-4 py-3"},[l("NuxtLink",{attrs:{to:"/admin/settings/info"}},[l("p",{staticClass:"font-semibold text-blue-500 hover:underline"},[t._v("ALI-0001")])])],1),t._v(" "),t._m(17),t._v(" "),l("td",{staticClass:"px-4 py-3"},[l("p",{staticClass:"flex items-center"},[t._v("อุณหภูมิ\n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v("70°C\n                      ")]),t._v(" "),l("p",{staticClass:"flex items-center"},[t._v("อุณหภูมิ \n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v("25°C\n                      ")]),t._v(" "),l("p",{staticClass:"flex items-center"},[t._v("ความชื้น\n                        "),l("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})]),t._v("80%\n                      ")])]),t._v(" "),l("td",{staticClass:"px-4 py-3"},[l("NuxtLink",{attrs:{to:"/admin/containers/info"}},[l("p",{staticClass:"font-semibold text-blue-500 hover:underline"},[t._v("JBI-0001")])])],1),t._v(" "),t._m(18),t._v(" "),t._m(19)])])])]),t._v(" "),l("div",{staticClass:"grid px-4 py-3 text-sm font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"},[l("span",{staticClass:"flex items-center col-span-3"},[t._v("\n              Showing 21-30 of 100\n            ")]),t._v(" "),l("span",{staticClass:"col-span-2"}),t._v(" "),l("span",{staticClass:"flex col-span-4 mt-2 sm:mt-auto sm:justify-end"},[l("nav",{attrs:{"aria-label":"Table navigation"}},[l("ul",{staticClass:"inline-flex items-center"},[l("li",[l("button",{staticClass:"px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple",attrs:{"aria-label":"Previous"}},[l("svg",{staticClass:"w-4 h-4 fill-current",attrs:{"aria-hidden":"true",viewBox:"0 0 20 20"}},[l("path",{attrs:{d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd","fill-rule":"evenodd"}})])])]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),l("li",[l("button",{staticClass:"px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple",attrs:{"aria-label":"Next"}},[l("svg",{staticClass:"w-4 h-4 fill-current",attrs:{"aria-hidden":"true",viewBox:"0 0 20 20"}},[l("path",{attrs:{d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd","fill-rule":"evenodd"}})])])])])])])])])],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full md:w-1/2"},[l("h1",{staticClass:"text-3xl text-center md:text-left font-blod"},[t._v("ตั้งค่าการแจ้งเตือน")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("thead",[l("tr",{staticClass:"text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-blue-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"},[l("th",{staticClass:"px-4 py-3"},[t._v("รหัส")]),t._v(" "),l("th",{staticClass:"hidden px-4 py-3 lg:table-cell"},[t._v("ชื่อ")]),t._v(" "),l("th",{staticClass:"px-4 py-3"},[t._v("เงื่อนไข")]),t._v(" "),l("th",{staticClass:"px-4 py-3"},[t._v("เตือนจาก")]),t._v(" "),l("th",{staticClass:"hidden px-4 py-3 md:table-cell"},[t._v("ระดับ")]),t._v(" "),l("th",{staticClass:"px-4 py-3"},[t._v("สถานะ")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"hidden px-4 py-3 lg:table-cell"},[l("p",{},[t._v("การเปิด/ปิดตู้คอนเทนเนอร์")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"hidden px-4 py-3 md:table-cell"},[l("span",{staticClass:"px-2 py-1 text-sm font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-green-100"},[t._v("\n                        อันตราย\n                      ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"px-4 py-3"},[l("span",{staticClass:"px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"},[t._v("\n                        เปิด\n                      ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"hidden px-4 py-3 lg:table-cell"},[l("p",{},[t._v("การเปิด/ปิดตู้คอนเทนเนอร์")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"hidden px-4 py-3 md:table-cell"},[l("span",{staticClass:"px-2 py-1 text-sm font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-green-100"},[t._v("\n                        อันตราย\n                      ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"px-4 py-3"},[l("span",{staticClass:"px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"},[t._v("\n                        เปิด\n                      ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"hidden px-4 py-3 lg:table-cell"},[l("p",{},[t._v("การเปิด/ปิดตู้คอนเทนเนอร์")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"hidden px-4 py-3 md:table-cell"},[l("span",{staticClass:"px-2 py-1 text-sm font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-green-100"},[t._v("\n                        อันตราย\n                      ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"px-4 py-3"},[l("span",{staticClass:"px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"},[t._v("\n                        เปิด\n                      ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"hidden px-4 py-3 lg:table-cell"},[l("p",{},[t._v("การเปิด/ปิดตู้คอนเทนเนอร์")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"hidden px-4 py-3 md:table-cell"},[l("span",{staticClass:"px-2 py-1 text-sm font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-green-100"},[t._v("\n                        อันตราย\n                      ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"px-4 py-3"},[l("span",{staticClass:"px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"},[t._v("\n                        เปิด\n                      ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"hidden px-4 py-3 lg:table-cell"},[l("p",{},[t._v("การเปิด/ปิดตู้คอนเทนเนอร์")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"hidden px-4 py-3 md:table-cell"},[l("span",{staticClass:"px-2 py-1 text-sm font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-green-100"},[t._v("\n                        อันตราย\n                      ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"px-4 py-3"},[l("span",{staticClass:"px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"},[t._v("\n                        เปิด\n                      ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"hidden px-4 py-3 lg:table-cell"},[l("p",{},[t._v("การเปิด/ปิดตู้คอนเทนเนอร์")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"hidden px-4 py-3 md:table-cell"},[l("span",{staticClass:"px-2 py-1 text-sm font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-green-100"},[t._v("\n                        อันตราย\n                      ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"px-4 py-3"},[l("span",{staticClass:"px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"},[t._v("\n                        เปิด\n                      ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",[l("button",{staticClass:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"},[t._v("\n                      1\n                    ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",[l("button",{staticClass:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"},[t._v("\n                      2\n                    ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",[l("button",{staticClass:"px-3 py-1 text-white transition-colors duration-150 bg-blue-500 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"},[t._v("\n                      3\n                    ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",[l("button",{staticClass:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"},[t._v("\n                      4\n                    ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",[l("span",{staticClass:"px-3 py-1"},[t._v("...")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",[l("button",{staticClass:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"},[t._v("\n                      8\n                    ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",[l("button",{staticClass:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"},[t._v("\n                      9\n                    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NewAlarmModal:l(335).default,RealtimeAlert:l(300).default})}}]);