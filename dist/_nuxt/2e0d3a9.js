(window.webpackJsonp=window.webpackJsonp||[]).push([[37,8,12],{307:function(t,e,l){"use strict";l.r(e);var r=l(10),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"p-4 text-red-700 bg-red-100 border-l-4 border-red-500",attrs:{role:"alert"}},[l("p",{staticClass:"mb-1 font-bold"},[t._v("Danger")]),t._v(" "),l("p",[t._v("5/6/2565 10:36 AM Container notification: JBI-0001 temperature more than 150°F")])])}],!1,null,null,null);e.default=component.exports},335:function(t,e,l){t.exports=l.p+"img/driver_license.23cd0b5.jpg"},344:function(t,e,l){"use strict";l.r(e);var r={name:"NewDriverModal",props:{show:Boolean},data:function(){return{selectRoute:!1,driver:"",truck:"",gender:"",container:"",origin:"",desination:""}},methods:{close_modal:function(){this.$emit("close")},onSubmit:function(){this.$router.push("job")}}},o=l(10),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.show?l("div",{staticClass:"fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full"},[l("div",{staticClass:"absolute w-full h-full bg-gray-900 opacity-50 modal-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.close_modal()}}}),t._v(" "),l("div",{staticClass:"z-30 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg max-h-screen-80 lg:w-6/12"},[l("div",{staticClass:"px-6 py-4 text-left"},[t._m(0),t._v(" "),l("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[l("div",{staticClass:"grid grid-cols-1 gap-4 p-5 rounded-md md:grid-cols-2"},[l("div",{staticClass:"flex justify-center"},[l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("map*")]),t._v(" "),l("div",{staticClass:"py-3 border border-gray-300 border-solid rounded "},[l("div",{staticClass:"w-full h-24 mb-3"},[l("longdo-map",{attrs:{input:!1}})],1)])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),t._m(6)])])])]):t._e()}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex items-center justify-center mb-5"},[l("p",{staticClass:"text-2xl font-bold text-center"},[t._v("Add job")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full"},[l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500 form-label",attrs:{for:"formFile"}},[t._v("route name*")]),t._v(" "),l("input",{staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:"",value:"ระยะทางใกล้ที่สุด",type:"text",placeholder:"ระยะทางใกล้ที่สุด"}})]),t._v(" "),l("div",{staticClass:"w-full mb-3 md:space-x-2 md:flex"},[l("div",{staticClass:"w-full"},[l("label",{staticClass:"inline-block mb-2 text-gray-500 form-label",attrs:{for:"formFile"}},[t._v("origin*")]),t._v(" "),l("input",{staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:"",value:"กรุงเทพ",type:"text",placeholder:"กรุงเทพ"}})]),t._v(" "),l("div",{staticClass:"w-full"},[l("label",{staticClass:"inline-block mb-2 text-gray-500 form-label",attrs:{for:"formFile"}},[t._v("desination*")]),t._v(" "),l("input",{staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:"",value:"เชียงใหม่",type:"text",placeholder:"เชียงใหม่"}})])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex justify-center"},[l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500 form-label",attrs:{for:"formFile"}},[t._v("truck*")]),t._v(" "),l("div",{staticClass:"py-3 border border-gray-300 border-solid rounded "},[l("img",{staticClass:"object-contain w-5/6 h-24 mx-auto",attrs:{src:"https://pngimg.com/uploads/truck/truck_PNG16269.png",alt:"profile picture",loading:"lazy"}})])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full"},[l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500 whitespace-nowrap form-label",attrs:{for:"formFile"}},[t._v("car registration*")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:"",value:"3กจ 1589",type:"text",placeholder:"สมชาย เมืองสิง"}})]),t._v(" "),l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500 form-label",attrs:{for:"formFile"}},[t._v("wheels*")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:"",value:"4",type:"number",placeholder:"4"}})])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex justify-center"},[l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("container*")]),t._v(" "),l("div",{staticClass:"py-3 border border-gray-300 border-solid rounded"},[l("img",{staticClass:"object-contain w-5/6 h-24 mx-auto",attrs:{src:"https://packer.searates.com/images/main-container.png",alt:"profile picture",loading:"lazy"}})])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full"},[l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("ContainerID*")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:"",value:"CTN-0001",type:"text",placeholder:"CTN-0001"}})]),t._v(" "),l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500 whitespace-nowrap",attrs:{for:"formFile"}},[t._v("SIZE(feet unit)*")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:"",value:"20",type:"text",placeholder:"30"}})])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mt-6"},[l("button",{staticClass:"flex items-center justify-center w-full px-6 py-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none",attrs:{type:"submit"}},[l("span",{staticClass:"m-2 text-white"},[t._v("Add")])])])}],!1,null,null,null);e.default=component.exports},362:function(t,e,l){"use strict";l.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-5 bg-white rounded shadow-md md:col-span-4"},[r("div",{staticClass:"flex flex-wrap justify-center"},[r("h2",{staticClass:"w-full mb-5 text-xl"},[t._v("โปรไฟล์")]),t._v(" "),r("div",{staticClass:"flex justify-between w-full"},[r("div",{staticClass:"w-full mb-3 whitespace-nowrap"},[r("div",{staticClass:"flex justify-between"},[r("p",{staticClass:"w-full text-gray-500"},[t._v("ไอดีคนขับ :")]),t._v(" "),r("p",{staticClass:"w-full font-bold text-blue-700 hover:underline"},[t._v("DVT-0001")])]),t._v(" "),r("div",{staticClass:"flex"},[r("p",{staticClass:"w-full text-gray-500"},[t._v("ชื่อ :")]),t._v(" "),r("p",{staticClass:"w-full font-bold"},[t._v("มงคล ดวงดาว")])]),t._v(" "),r("div",{staticClass:"flex"},[r("p",{staticClass:"w-full text-gray-500"},[t._v("เบอร์โทร :")]),t._v(" "),r("p",{staticClass:"w-full font-bold"},[t._v("0972546647")])])])]),t._v(" "),r("div",{staticClass:"w-full mb-3"},[r("div",{staticClass:"border border-gray-300 border-solid rounded"},[r("img",{staticClass:"object-cover w-full h-full mx-auto",attrs:{src:l(335),alt:"profile picture",loading:"lazy"}})])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("thead",[l("tr",{staticClass:"text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-blue-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"},[l("th",{staticClass:"px-4 py-3"},[t._v("รหัส")]),t._v(" "),l("th",{staticClass:"px-4 py-3"},[t._v("ต้นทาง")]),t._v(" "),l("th",{staticClass:"px-4 py-3"},[t._v("ปลายทาง")]),t._v(" "),l("th",{staticClass:"px-4 py-3"},[t._v("สถานะ")]),t._v(" "),l("th",{staticClass:"hidden px-4 py-3 md:table-cell"},[t._v("วัน")]),t._v(" "),l("th",{staticClass:"hidden px-4 py-3 md:table-cell"},[t._v("เวลา")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"px-4 py-3"},[l("p",{staticClass:"text-sm font-semibold text-blue-500 md:text-md"},[t._v("JBI-0001")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"px-4 py-3"},[l("p",{staticClass:"text-sm md:text-md"},[t._v("กรุงเทพ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"px-4 py-3"},[l("p",{staticClass:"text-sm md:text-md"},[t._v("เชียงใหม่")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"px-4 py-3 "},[l("span",{staticClass:"px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full"},[t._v("\n                                        เสร็จ\n                                    ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"hidden px-4 py-3 md:table-cell"},[l("p",{staticClass:"text-md"},[t._v("21:26 น.")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("td",{staticClass:"hidden px-4 py-3 md:table-cell"},[l("p",{staticClass:"text-md"},[t._v("07/05/2565")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mb-3"},[l("h2",{staticClass:"text-2xl text-center"},[t._v("เพิ่มงานง่ายๆ ด้วย 3 ขั้นตอน")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mb-3"},[l("h2",{staticClass:"text-2xl text-center"},[t._v("เลือกเส้นทาง")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full"},[l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500 form-label",attrs:{for:"formFile"}},[t._v("ชื่อเส้นทาง*")]),t._v(" "),l("input",{staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:"",value:"ระยะทางใกล้ที่สุด",type:"text",placeholder:"ระยะทางใกล้ที่สุด"}})]),t._v(" "),l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500 form-label",attrs:{for:"formFile"}},[t._v("ต้นทาง*")]),t._v(" "),l("input",{staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:"",value:"กรุงเทพ",type:"text",placeholder:"กรุงเทพ"}})]),t._v(" "),l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500 form-label",attrs:{for:"formFile"}},[t._v("ปลายทาง*")]),t._v(" "),l("input",{staticClass:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:"",value:"เชียงใหม่",type:"text",placeholder:"เชียงใหม่"}})])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mb-3"},[l("h2",{staticClass:"text-2xl text-center"},[t._v("เลือกรถบรรทุก")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex justify-center"},[l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500 form-label",attrs:{for:"formFile"}},[t._v("รูปรถบรรทุก*")]),t._v(" "),l("div",{staticClass:"py-5 border border-gray-300 border-solid rounded "},[l("img",{staticClass:"object-contain w-5/6 h-64 mx-auto",attrs:{src:"https://pngimg.com/uploads/truck/truck_PNG16269.png",alt:"profile picture",loading:"lazy"}})])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full"},[l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500 form-label",attrs:{for:"formFile"}},[t._v("ทะเบียนรถ*")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:"",value:"3กจ 1589",type:"text",placeholder:"สมชาย เมืองสิง"}})]),t._v(" "),l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500 form-label",attrs:{for:"formFile"}},[t._v("จำนวนล้อ*")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:"",value:"4",type:"number",placeholder:"4"}})])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mb-3"},[l("h2",{staticClass:"text-2xl text-center"},[t._v("เลือกตู้คอนเทนเนอร์")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex justify-center"},[l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("รูปถ่ายคอนเทนเนอร์*")]),t._v(" "),l("div",{staticClass:"py-5 border border-gray-300 border-solid rounded"},[l("img",{staticClass:"object-contain w-5/6 h-64 mx-auto",attrs:{src:"https://packer.searates.com/images/main-container.png",alt:"profile picture",loading:"lazy"}})])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full"},[l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("หมายเลขตู้คอนเทนเนอร์*")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:"",value:"CTN-0001",type:"text",placeholder:"CTN-0001"}})]),t._v(" "),l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("ขนาด(ฟุต)*")]),t._v(" "),l("input",{staticClass:"block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:"",value:"20",type:"text",placeholder:"30"}})])])}],o={data:function(){return{showNewJobDriverModal:!1,routeId:"",containerId:"",truckId:"",stepper:1}},methods:{log:function(){console.log("click")}}},n=l(10),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mt-5 mb-10"},[l("NewJobDriverModal",{attrs:{show:t.showNewJobDriverModal},on:{close:function(e){t.showNewJobDriverModal=!1}}}),t._v(" "),l("div",{staticClass:"w-full mb-5"},[l("RealtimeAlert")],1),t._v(" "),l("div",{staticClass:"grid grid-cols-1 gap-3 my-4 md:grid-cols-12"},[t._m(0),t._v(" "),l("div",{staticClass:"p-5 bg-white rounded shadow-md md:col-span-8"},[l("h2",{staticClass:"mb-2 text-xl"},[t._v("งานล่าสุดของฉัน")]),t._v(" "),l("div",{staticClass:"w-full mb-8 overflow-hidden rounded-lg shadow-xs"},[l("div",{staticClass:"w-full"},[l("table",{staticClass:"w-full whitespace-no-wrap"},[t._m(1),t._v(" "),l("tbody",{staticClass:"bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"},t._l(5,(function(e){return l("tr",{key:e,staticClass:"text-gray-700 dark:text-gray-400"},[t._m(2,!0),t._v(" "),t._m(3,!0),t._v(" "),t._m(4,!0),t._v(" "),t._m(5,!0),t._v(" "),t._m(6,!0),t._v(" "),t._m(7,!0)])})),0)])])])]),t._v(" "),l("div",{staticClass:"relative p-5 bg-white rounded shadow-md md:col-span-12 "},[t._m(8),t._v(" "),l("div",{staticClass:"w-full py-6"},[l("div",{staticClass:"flex mb-5 md:mb-10"},[l("div",{staticClass:"w-1/3"},[l("div",{staticClass:"relative mb-2"},[l("div",{staticClass:"flex items-center w-10 h-10 mx-auto text-lg text-white bg-blue-500 rounded-full"},[l("span",{staticClass:"w-full text-center text-white"},[l("svg",{staticClass:"w-full fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[l("path",{staticClass:"heroicon-ui",attrs:{d:"M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}})])])])]),t._v(" "),l("div",{staticClass:"text-xs text-center md:text-base"},[t._v("1. เลือกเส้นทาง")])]),t._v(" "),l("div",{staticClass:"w-1/3"},[l("div",{staticClass:"relative mb-2"},[l("div",{staticClass:"absolute flex items-center content-center align-middle align-center",staticStyle:{width:"calc(100% - 2.5rem - 1rem)",top:"50%",transform:"translate(-50%, -50%)"}},[l("div",{staticClass:"items-center flex-1 w-full align-middle bg-gray-200 rounded align-center"},[l("div",{staticClass:"w-0 py-1 transition duration-1000 ease-in-out rounded",class:{"bg-blue-500":2===t.stepper||3===t.stepper},staticStyle:{width:"100%"}})])]),t._v(" "),l("div",{staticClass:"flex items-center w-10 h-10 mx-auto text-lg text-white transition duration-1000 ease-in-out bg-white border-2 border-gray-200 rounded-full",class:{"bg-blue-500 text-white":2===t.stepper||3===t.stepper}},[l("span",{staticClass:"w-full text-center text-gray-600"},[l("svg",{staticClass:"w-full fill-current",class:{"text-white":2===t.stepper||3===t.stepper},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[l("path",{staticClass:"heroicon-ui",attrs:{d:"M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}})])])])]),t._v(" "),l("div",{staticClass:"text-xs text-center md:text-base"},[t._v("2. เลือกรถ")])]),t._v(" "),l("div",{staticClass:"w-1/3"},[l("div",{staticClass:"relative mb-2"},[l("div",{staticClass:"absolute flex items-center content-center align-middle align-center",staticStyle:{width:"calc(100% - 2.5rem - 1rem)",top:"50%",transform:"translate(-50%, -50%)"}},[l("div",{staticClass:"items-center flex-1 w-full align-middle bg-gray-200 rounded align-center"},[l("div",{staticClass:"w-0 py-1 transition duration-1000 ease-in-out rounded",class:{"bg-blue-400":3===t.stepper},staticStyle:{width:"100%"}})])]),t._v(" "),l("div",{staticClass:"flex items-center w-10 h-10 mx-auto text-lg text-white transition duration-1000 ease-in-out bg-white border-2 border-gray-200 rounded-full",class:{"bg-blue-500":3===t.stepper}},[l("span",{staticClass:"w-full text-center text-gray-600"},[l("svg",{staticClass:"w-full fill-current",class:{"text-white":3===t.stepper},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[l("path",{staticClass:"heroicon-ui",attrs:{d:"M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}})])])])]),t._v(" "),l("div",{staticClass:"text-xs text-center md:text-base"},[t._v("3. เลือกตู้")])])]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:1===t.stepper,expression:"stepper === 1"}],staticClass:"mx-auto"},[t._m(9),t._v(" "),l("div",{staticClass:"flex mx-auto mb-20 space-x-1 md:w-96"},[l("select",{directives:[{name:"model",rawName:"v-model",value:t.routeId,expression:"routeId"}],staticClass:"form-select appearance-none w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{"aria-label":"Default select example"},on:{change:function(e){var l=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.routeId=e.target.multiple?l:l[0]}}},[l("option",{attrs:{value:"",selected:""}},[t._v("เลือก")]),t._v(" "),l("option",[t._v("RTI-0001")]),t._v(" "),l("option",[t._v("RTI-0002")]),t._v(" "),l("option",[t._v("RTI-0003")])]),t._v(" "),l("button",{staticClass:"block p-2 text-base font-normal text-gray-800 transition ease-in-out bg-white border border-gray-300 border-solid rounded bg-clip-padding hover:text-white hover:bg-gray-700"},[l("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"}})])])]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:t.routeId,expression:"routeId"}],staticClass:"grid grid-cols-1 gap-4 p-5 transition-all duration-500 border border-gray-300 rounded-md opacity-0 delay-2s mb-14 -mt-14 md:grid-cols-2",class:{"opacity-100":t.routeId}},[l("div",{staticClass:"flex justify-center"},[l("div",{staticClass:"w-full mb-3"},[l("label",{staticClass:"inline-block mb-2 text-gray-500",attrs:{for:"formFile"}},[t._v("แผนที่*")]),t._v(" "),l("div",{staticClass:"w-full h-64 mb-3"},[l("longdo-map",{attrs:{input:!1}})],1)])]),t._v(" "),t._m(10)]),t._v(" "),l("div",{staticClass:"absolute right-5 bottom-5 md:bottom-10 md:right-10 "},[l("div",{staticClass:"flex justify-center space-x-2"},[l("button",{staticClass:"inline-block px-6 py-2.5 bg-blue-500 text-white leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",class:{"opacity-60 cursor-not-allowed":!t.routeId},attrs:{disabled:!t.routeId,"data-mdb-ripple":"true","data-mdb-ripple-color":"light"},on:{click:function(e){t.stepper++}}},[t._v("ถัดไป")])])])]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:2===t.stepper,expression:"stepper === 2"}],staticClass:"mx-auto"},[t._m(11),t._v(" "),l("div",{staticClass:"flex mx-auto mb-20 space-x-1 md:w-96"},[l("select",{directives:[{name:"model",rawName:"v-model",value:t.truckId,expression:"truckId"}],staticClass:"form-select appearance-none w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{"aria-label":"Default select example"},on:{change:function(e){var l=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.truckId=e.target.multiple?l:l[0]}}},[l("option",{attrs:{value:"",selected:""}},[t._v("เลือก")]),t._v(" "),l("option",[t._v("TKI-0001")]),t._v(" "),l("option",[t._v("TKI-0002")]),t._v(" "),l("option",[t._v("TKI-0003")])]),t._v(" "),l("button",{staticClass:"block p-2 text-base font-normal text-gray-800 transition ease-in-out bg-white border border-gray-300 border-solid rounded bg-clip-padding hover:text-white hover:bg-gray-700"},[l("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"}})])])]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:t.truckId,expression:"truckId"}],staticClass:"grid grid-cols-1 gap-4 p-5 transition-all duration-500 border border-gray-300 rounded-md opacity-0 delay-2s mb-14 -mt-14 md:grid-cols-2",class:{"opacity-100":t.truckId}},[t._m(12),t._v(" "),t._m(13)]),t._v(" "),l("div",{staticClass:"absolute right-5 bottom-5 md:bottom-10 md:right-10 "},[l("div",{staticClass:"flex justify-center space-x-2"},[l("button",{staticClass:"inline-block px-6 py-2.5 bg-blue-500 text-white leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",class:{"opacity-60 cursor-not-allowed":!t.truckId},attrs:{disabled:!t.truckId,"data-mdb-ripple":"true","data-mdb-ripple-color":"light"},on:{click:function(e){t.stepper++}}},[t._v("ถัดไป")])])]),t._v(" "),l("div",{staticClass:"absolute left-5 bottom-5 md:bottom-10 md:left-10 "},[l("div",{staticClass:"flex justify-center space-x-2"},[l("button",{staticClass:"inline-block px-6 py-2.5 bg-gray-500 text-white leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-gray-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray- active:shadow-lg transition duration-150 ease-in-out",attrs:{"data-mdb-ripple":"true","data-mdb-ripple-color":"light"},on:{click:function(e){t.stepper--}}},[t._v("ย้อนกลับ")])])])]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:3===t.stepper,expression:"stepper === 3"}],staticClass:"mx-auto"},[t._m(14),t._v(" "),l("div",{staticClass:"flex mx-auto mb-20 space-x-1 md:w-96"},[l("select",{directives:[{name:"model",rawName:"v-model",value:t.containerId,expression:"containerId"}],staticClass:"form-select appearance-none w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{"aria-label":"Default select example"},on:{change:function(e){var l=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.containerId=e.target.multiple?l:l[0]}}},[l("option",{attrs:{value:"",selected:""}},[t._v("เลือก")]),t._v(" "),l("option",[t._v("CNI-0001")]),t._v(" "),l("option",[t._v("CNI-0002")]),t._v(" "),l("option",[t._v("CNI-0003")])]),t._v(" "),l("button",{staticClass:"block p-2 text-base font-normal text-gray-800 transition ease-in-out bg-white border border-gray-300 border-solid rounded bg-clip-padding hover:text-white hover:bg-gray-700"},[l("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"}})])])]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:t.containerId,expression:"containerId"}],staticClass:"grid grid-cols-1 gap-4 p-5 transition-all duration-500 border border-gray-300 rounded-md opacity-0 delay-2s mb-14 -mt-14 md:grid-cols-2",class:{"opacity-100":t.containerId}},[t._m(15),t._v(" "),t._m(16)]),t._v(" "),l("div",{staticClass:"absolute right-5 bottom-5 md:bottom-10 md:right-10 "},[l("div",{staticClass:"flex justify-center space-x-2"},[l("button",{staticClass:"inline-block px-6 py-2.5 bg-blue-500 text-white leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",class:{"opacity-60 cursor-not-allowed":!t.containerId},attrs:{disabled:!t.containerId,"data-mdb-ripple":"true","data-mdb-ripple-color":"light"},on:{click:function(e){t.showNewJobDriverModal=!0}}},[t._v("ถัดไป")])])]),t._v(" "),l("div",{staticClass:"absolute left-5 bottom-5 md:bottom-10 md:left-10 "},[l("div",{staticClass:"flex justify-center space-x-2"},[l("button",{staticClass:"inline-block px-6 py-2.5 bg-gray-500 text-white leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-gray-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray- active:shadow-lg transition duration-150 ease-in-out",attrs:{"data-mdb-ripple":"true","data-mdb-ripple-color":"light"},on:{click:function(e){t.stepper--}}},[t._v("ย้อนกลับ")])])])])])])])],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{NewJobDriverModal:l(344).default,RealtimeAlert:l(307).default})}}]);