(window.webpackJsonp=window.webpackJsonp||[]).push([[35,11,12],{300:function(t,e,r){"use strict";r.r(e);var l=r(10),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-4 text-red-700 bg-red-100 border-l-4 border-red-500",attrs:{role:"alert"}},[r("p",{staticClass:"mb-1 font-bold"},[t._v("อันตราย")]),t._v(" "),r("p",[t._v("5/6/2565 13:36 น. แจ้งเตือนตู้คอนเทนเนอร์: JBI-0001 อุณหภูมิเกิน 30°c")])])}],!1,null,null,null);e.default=component.exports},311:function(t,e,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("5affff90",content,!0,{sourceMap:!1})},326:function(t,e,r){"use strict";r(311)},327:function(t,e,r){var l=r(47)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n#map{\n  height:100%\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},336:function(t,e,r){"use strict";r.r(e);var l={name:"NewDriverModal",props:{show:Boolean},data:function(){return{selectRoute:!1,driver:"",truck:"",gender:"",container:"",origin:"",desination:""}},methods:{close_modal:function(){this.$emit("close")},onSubmit:function(){this.close_modal()}}},n=(r(326),r(10)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.show?r("div",{staticClass:"z-20 fixed w-full h-full top-0 left-0 flex items-center justify-center"},[r("div",{staticClass:"modal-overlay absolute w-full h-full bg-gray-900 opacity-50",on:{click:function(e){return e.target!==e.currentTarget?null:t.close_modal()}}}),t._v(" "),r("div",{staticClass:"bg-white w-11/12 lg:w-6/12 mx-auto rounded shadow-lg z-30 overflow-y-auto h-5/6 md:h-auto"},[r("div",{staticClass:"py-4 text-left px-6"},[t._m(0),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-4"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"flex justify-center"},[r("div",{staticClass:"mb-3 w-full"},[r("label",{staticClass:"form-label inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("สถานะ*")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.truck,expression:"truck"}],staticClass:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.truck=e.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("เลือก")]),t._v(" "),r("option",[t._v("truck 1")]),t._v(" "),r("option",[t._v("truck 2")]),t._v(" "),r("option",[t._v("truck 3")])])])])]),t._v(" "),t._m(4)])])])]):t._e()}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center items-center mb-5"},[r("p",{staticClass:"text-2xl font-bold text-center"},[t._v("เพิ่มรถบรรทุก")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center"},[r("div",{staticClass:"mb-3 w-full"},[r("label",{staticClass:"form-label inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("ทะเบียนรถ*")]),t._v(" "),r("input",{staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"text",placeholder:"3กจ 18xx"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center"},[r("div",{staticClass:"mb-3 w-full"},[r("label",{staticClass:"form-label inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("จำนวนล้อ*")]),t._v(" "),r("input",{staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"number",placeholder:"4"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center"},[r("div",{staticClass:"mb-3 w-full"},[r("label",{staticClass:"form-label inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("รูปโปรไฟล์*")]),t._v(" "),r("input",{staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{type:"file",id:"formFile"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-6"},[r("button",{staticClass:"flex items-center justify-center w-full px-6 py-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none",attrs:{type:"submit"}},[r("span",{staticClass:"m-2 text-white"},[t._v("เพิ่ม")])])])}],!1,null,null,null);e.default=component.exports},354:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{showAddTruckModal:!1}},methods:{toggleAddTruckModal:function(){this.showAddTruckModal=!this.showAddTruckModal}}},n=r(10),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-5 mb-10"},[r("NewTruckModal",{attrs:{show:t.showAddTruckModal},on:{close:function(e){t.showAddTruckModal=!1}}}),t._v(" "),r("div",{staticClass:"w-full mb-5"},[r("RealtimeAlert")],1),t._v(" "),r("div",{staticClass:"flex flex-wrap items-center justify-between mb-5 space-y-2"},[t._m(0),t._v(" "),r("div",{staticClass:"w-full md:block md:w-1/2"},[r("button",{staticClass:"float-right w-full px-2 py-1 text-white bg-blue-500 border-2 border-blue-400 shadow-md md:w-auto rounded-3xl text-md",on:{click:function(e){return t.toggleAddTruckModal()}}},[t._v("+รถบรรทุก")])])]),t._v(" "),r("div",{staticClass:"flex items-center justify-between"},[r("div",{staticClass:"relative hidden md:flex md:w-1/2"},[r("div",{staticClass:"absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400"},[r("svg",{staticClass:"w-6 h-6",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])]),t._v(" "),r("input",{staticClass:"w-full h-10 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-300 rounded-lg sm:text-base focus:outline-none focus:border-indigo-400",attrs:{id:"search",type:"search",name:"search",placeholder:"Search..."}})])]),t._v(" "),r("div",{staticClass:"flex flex-wrap items-center mt-2 mb-4 space-x-2 text-sm md:text-md"},[r("div",[r("button",{staticClass:"flex space-x-2 bg-blue-500 text-white border border-gray-300 rounded-lg focus:ring-black focus:border-black p-2.5"},[r("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{d:"M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"}})]),t._v(" "),r("span",[t._v("Filter (1)")])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),r("div",{staticClass:"w-full mb-8 overflow-hidden rounded-lg shadow-xs"},[r("div",{staticClass:"w-full overflow-x-auto"},[r("table",{staticClass:"w-full whitespace-no-wrap"},[t._m(3),t._v(" "),r("tbody",{staticClass:"bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"},t._l(5,(function(e){return r("tr",{key:e,staticClass:"text-gray-700 dark:text-gray-400"},[r("td",{staticClass:"px-4 py-3"},[r("div",{staticClass:"flex items-center"},[t._m(4,!0),t._v(" "),r("NuxtLink",{attrs:{to:"/admin/trucks/info"}},[r("p",{staticClass:"font-semibold"},[t._v("3กจ 1587")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-600 dark:text-gray-400"},[t._v("\n                          TKI-0001\n                        ")])])],1)]),t._v(" "),t._m(5,!0),t._v(" "),r("td",{staticClass:"hidden px-4 py-3 lg:table-cell"},[t._v("\n                    1\n                  ")])])})),0)])]),t._v(" "),r("div",{staticClass:"grid px-4 py-3 text-sm font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"},[r("span",{staticClass:"flex items-center col-span-3"},[t._v("\n              Showing 21-30 of 100\n            ")]),t._v(" "),r("span",{staticClass:"col-span-2"}),t._v(" "),r("span",{staticClass:"flex col-span-4 mt-2 sm:mt-auto sm:justify-end"},[r("nav",{attrs:{"aria-label":"Table navigation"}},[r("ul",{staticClass:"inline-flex items-center"},[r("li",[r("button",{staticClass:"px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple",attrs:{"aria-label":"Previous"}},[r("svg",{staticClass:"w-4 h-4 fill-current",attrs:{"aria-hidden":"true",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd","fill-rule":"evenodd"}})])])]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),r("li",[r("button",{staticClass:"px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple",attrs:{"aria-label":"Next"}},[r("svg",{staticClass:"w-4 h-4 fill-current",attrs:{"aria-hidden":"true",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd","fill-rule":"evenodd"}})])])])])])])])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full md:w-1/2"},[r("h1",{staticClass:"text-3xl text-center md:text-left font-blod"},[t._v("รถบรรทุก")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("button",{staticClass:"bg-blue-500 border border-gray-300 text-white rounded-lg focus:ring-black focus:border-black p-2.5"},[r("span",{staticClass:"text-sm"},[t._v("ทั้งหมด")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("button",{staticClass:"bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-black focus:border-black p-2.5"},[r("span",{staticClass:"text-sm"},[t._v("รายการโปรด")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",{staticClass:"text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-blue-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"},[r("th",{staticClass:"px-4 py-3"},[t._v("โปรไฟล์")]),t._v(" "),r("th",{staticClass:"px-4 py-3"},[t._v("สถานะ")]),t._v(" "),r("th",{staticClass:"hidden px-4 py-3 lg:table-cell"},[t._v("ชื่นชอบ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative hidden object-contain h-12 mr-5 md:block"},[r("img",{staticClass:"object-contain h-full",attrs:{src:"https://pngimg.com/uploads/truck/truck_PNG16269.png",alt:"",loading:"lazy"}}),t._v(" "),r("div",{staticClass:"absolute inset-0 shadow-inner",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"px-4 py-3 text-sm"},[r("span",{staticClass:"px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"},[t._v("\n                      ว่าง\n                    ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("button",{staticClass:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"},[t._v("\n                      1\n                    ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("button",{staticClass:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"},[t._v("\n                      2\n                    ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("button",{staticClass:"px-3 py-1 text-white transition-colors duration-150 bg-blue-500 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"},[t._v("\n                      3\n                    ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("button",{staticClass:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"},[t._v("\n                      4\n                    ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"px-3 py-1"},[t._v("...")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("button",{staticClass:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"},[t._v("\n                      8\n                    ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("button",{staticClass:"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"},[t._v("\n                      9\n                    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NewTruckModal:r(336).default,RealtimeAlert:r(300).default})}}]);