<template>
    <div class="mt-5 mb-10">
        <!-- new job modal -->
        <NewJobDriverModal :show="showNewJobDriverModal"  @close="showNewJobDriverModal=false"></NewJobDriverModal>

        <!-- Realtime alert -->
        <div class="w-full mb-5">
            <RealtimeAlert />
        </div>
            
        <div class="grid grid-cols-1 gap-3 my-4 md:grid-cols-12">
            <!-- driver profile -->
            <div class="p-5 bg-white rounded shadow-md md:col-span-4">
                <div class="flex flex-wrap justify-center">
                    <h2 class="w-full mb-5 text-xl">โปรไฟล์</h2>
                    <div class="flex justify-between w-full">
                        <div class="w-full mb-3 whitespace-nowrap">
                            <div class="flex justify-between">
                                <p class="w-full text-gray-500">ไอดีคนขับ :</p>
                                <p class="w-full font-bold text-blue-700 hover:underline">DVT-0001</p>
                            </div>
                            <div class="flex">
                                <p class="w-full text-gray-500">ชื่อ :</p>
                                <p class="w-full font-bold">มงคล ดวงดาว</p>
                            </div>
                            <div class="flex">
                                <p class="w-full text-gray-500">เบอร์โทร :</p>
                                <p class="w-full font-bold">0972546647</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mb-3">
                        <div class="border border-gray-300 border-solid rounded">
                            <img 
                                class="object-cover w-full h-full mx-auto" 
                                src="~/assets/images/driver_license.jpg" 
                                alt="profile picture" 
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- jobs releast -->
            <div class="p-5 bg-white rounded shadow-md md:col-span-8">
                <h2 class="mb-2 text-xl">งานล่าสุดของฉัน</h2>
                <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                    <div class="w-full">
                        <table class="w-full whitespace-no-wrap">
                            <thead>
                                <tr class="text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-blue-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
                                    <th class="px-4 py-3">รหัส</th>
                                    <th class="px-4 py-3">ต้นทาง</th>
                                    <th class="px-4 py-3">ปลายทาง</th>
                                    <th class="px-4 py-3">สถานะ</th>
                                    <th class="hidden px-4 py-3 md:table-cell">วัน</th>
                                    <th class="hidden px-4 py-3 md:table-cell">เวลา</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                <tr v-for="(index) in 5" :key="index" class="text-gray-700 dark:text-gray-400">
                                    <td class="px-4 py-3">
                                        <p class="text-sm font-semibold text-blue-500 md:text-md">JBI-0001</p>
                                    </td>
                                    <td class="px-4 py-3">
                                        <p class="text-sm md:text-md">กรุงเทพ</p>
                                    </td>
                                    <td class="px-4 py-3">
                                        <p class="text-sm md:text-md">เชียงใหม่</p>
                                    </td>
                                    <td class="px-4 py-3 ">
                                        <span class="px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                                            เสร็จ
                                        </span>
                                    </td>
                                    <td class="hidden px-4 py-3 md:table-cell">
                                        <p class="text-md">21:26 น.</p>
                                    </td>
                                    <td class="hidden px-4 py-3 md:table-cell">
                                        <p class="text-md">07/05/2565</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- add job -->
            <div class="relative p-5 bg-white rounded shadow-md md:col-span-12 ">
                <div class="mb-3">
                    <h2 class="text-2xl text-center">เพิ่มงานง่ายๆ ด้วย 3 ขั้นตอน</h2>
                </div>
                
                <div class="w-full py-6">
                    <div class="flex mb-5 md:mb-10">

                        <div class="w-1/3">
                            <div class="relative mb-2">
                                <!-- icon1 -->
                                <div class="flex items-center w-10 h-10 mx-auto text-lg text-white bg-blue-500 rounded-full">
                                    <span class="w-full text-center text-white">
                                        <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path class="heroicon-ui" d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div class="text-xs text-center md:text-base">1. เลือกเส้นทาง</div>
                        </div>

                        <div class="w-1/3">
                            <div class="relative mb-2">
                                <!-- line -->
                                <div class="absolute flex items-center content-center align-middle align-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
                                    <div class="items-center flex-1 w-full align-middle bg-gray-200 rounded align-center">
                                        <div 
                                            :class="{'bg-blue-500': stepper===2 || stepper===3}"
                                            class="w-0 py-1 transition duration-1000 ease-in-out rounded" style="width: 100%;">
                                        </div>
                                    </div>
                                </div>
                                <!-- icon2 -->
                                <div
                                    :class="{'bg-blue-500 text-white': stepper===2 || stepper===3}"
                                    class="flex items-center w-10 h-10 mx-auto text-lg text-white transition duration-1000 ease-in-out bg-white border-2 border-gray-200 rounded-full"
                                >
                                    <span class="w-full text-center text-gray-600">
                                        <svg :class="{'text-white': stepper===2 || stepper===3}" class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path class="heroicon-ui" d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div class="text-xs text-center md:text-base">2. เลือกรถ</div>
                        </div>

                        <div class="w-1/3">
                            <div class="relative mb-2">
                                <!-- line -->
                                <div class="absolute flex items-center content-center align-middle align-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
                                    <div class="items-center flex-1 w-full align-middle bg-gray-200 rounded align-center">
                                        <div 
                                            :class="{'bg-blue-400': stepper===3}"
                                            class="w-0 py-1 transition duration-1000 ease-in-out rounded" style="width: 100%;">
                                        </div>
                                    </div>
                                </div>
                                <!-- icon3 -->
                                <div
                                    :class="{'bg-blue-500': stepper===3}"
                                    class="flex items-center w-10 h-10 mx-auto text-lg text-white transition duration-1000 ease-in-out bg-white border-2 border-gray-200 rounded-full"
                                >
                                    <span class="w-full text-center text-gray-600">
                                        <svg :class="{'text-white': stepper===3}" class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path class="heroicon-ui" d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div class="text-xs text-center md:text-base">3. เลือกตู้</div>
                        </div>
                    </div>
                    
                    <!-- add route -->
                    <div v-show="stepper === 1" class="mx-auto">
                        <div class="mb-3">
                            <h2 class="text-2xl text-center">เลือกเส้นทาง</h2>
                        </div>
                        <div class="flex mx-auto mb-20 space-x-1 md:w-96">
                            <select v-model="routeId" class="form-select appearance-none w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option value="" selected>เลือก</option>
                                <option>RTI-0001</option>
                                <option>RTI-0002</option>
                                <option>RTI-0003</option>
                            </select>
                            <button class="block p-2 text-base font-normal text-gray-800 transition ease-in-out bg-white border border-gray-300 border-solid rounded bg-clip-padding hover:text-white hover:bg-gray-700">   
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                </svg>
                            </button>
                        </div>

                        <div v-show="routeId" :class="{'opacity-100': routeId}" class="grid grid-cols-1 gap-4 p-5 transition-all duration-500 border border-gray-300 rounded-md opacity-0 delay-2s mb-14 -mt-14 md:grid-cols-2">
                            <!-- longdo map route -->
                            <div class="flex justify-center">
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500">แผนที่*</label>
                                    <div class="w-full h-64 mb-3">
                                        <longdo-map :input="false"></longdo-map>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full">
                                <!-- route name -->
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ชื่อเส้นทาง*</label>
                                    <input disabled value="ระยะทางใกล้ที่สุด" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="ระยะทางใกล้ที่สุด">
                                </div>
                                <!-- origin name -->
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ต้นทาง*</label>
                                    <input disabled value="กรุงเทพ" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="กรุงเทพ">
                                </div>
                                <!-- desination name -->
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ปลายทาง*</label>
                                    <input disabled value="เชียงใหม่" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="เชียงใหม่">
                                </div>
                            </div>
                        </div>

                        <div class="absolute right-5 bottom-5 md:bottom-10 md:right-10 ">
                            <div class="flex justify-center space-x-2">
                                <button
                                    @click="stepper++"
                                    :disabled="!routeId"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    :class="{'opacity-60 cursor-not-allowed': !routeId}"
                                    class="inline-block px-6 py-2.5 bg-blue-500 text-white leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >ถัดไป</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- add truck -->
                    <div v-show="stepper === 2" class="mx-auto">
                        <div class="mb-3">
                            <h2 class="text-2xl text-center">เลือกรถบรรทุก</h2>
                        </div>
                        <div class="flex mx-auto mb-20 space-x-1 md:w-96">
                            <select v-model="truckId" class="form-select appearance-none w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option value="" selected>เลือก</option>
                                <option>TKI-0001</option>
                                <option>TKI-0002</option>
                                <option>TKI-0003</option>
                            </select>
                            <button class="block p-2 text-base font-normal text-gray-800 transition ease-in-out bg-white border border-gray-300 border-solid rounded bg-clip-padding hover:text-white hover:bg-gray-700">   
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                </svg>
                            </button>
                        </div>

                        <div v-show="truckId" :class="{'opacity-100': truckId}" class="grid grid-cols-1 gap-4 p-5 transition-all duration-500 border border-gray-300 rounded-md opacity-0 delay-2s mb-14 -mt-14 md:grid-cols-2">
                            <!-- truck picture -->
                            <div class="flex justify-center">
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">รูปรถบรรทุก*</label>
                                    <div class="py-5 border border-gray-300 border-solid rounded ">
                                        <img 
                                        class="object-contain w-5/6 h-64 mx-auto" 
                                        src="https://pngimg.com/uploads/truck/truck_PNG16269.png" 
                                        alt="profile picture" 
                                        loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <!-- vehicle registration number -->
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ทะเบียนรถ*</label>
                                    <input disabled value="3กจ 1589" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="สมชาย เมืองสิง">
                                </div>
                                <!-- number of wheels -->
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">จำนวนล้อ*</label>
                                    <input disabled value="4" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="4">
                                </div>
                            </div>
                        </div>

                        <!--next btn -->
                        <div class="absolute right-5 bottom-5 md:bottom-10 md:right-10 ">
                            <div class="flex justify-center space-x-2">
                                <button
                                    @click="stepper++"
                                    :disabled="!truckId"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    :class="{'opacity-60 cursor-not-allowed': !truckId}"
                                    class="inline-block px-6 py-2.5 bg-blue-500 text-white leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >ถัดไป</button>
                            </div>
                            
                        </div>
                        <!--prev btn -->
                        <div class="absolute left-5 bottom-5 md:bottom-10 md:left-10 ">
                            <div class="flex justify-center space-x-2">
                                <button
                                    @click="stepper--"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    class="inline-block px-6 py-2.5 bg-gray-500 text-white leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-gray-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray- active:shadow-lg transition duration-150 ease-in-out"
                                >ย้อนกลับ</button>
                            </div>
                        </div>
                    </div>

                    <!-- add container -->
                    <div v-show="stepper === 3" class="mx-auto">
                        <div class="mb-3">
                            <h2 class="text-2xl text-center">เลือกตู้คอนเทนเนอร์</h2>
                        </div>
                        <div class="flex mx-auto mb-20 space-x-1 md:w-96">
                            <select v-model="containerId" class="form-select appearance-none w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option value="" selected>เลือก</option>
                                <option>CNI-0001</option>
                                <option>CNI-0002</option>
                                <option>CNI-0003</option>
                            </select>
                            <button class="block p-2 text-base font-normal text-gray-800 transition ease-in-out bg-white border border-gray-300 border-solid rounded bg-clip-padding hover:text-white hover:bg-gray-700">   
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                </svg>
                            </button>
                        </div>

                        <div v-show="containerId" :class="{'opacity-100': containerId}" class="grid grid-cols-1 gap-4 p-5 transition-all duration-500 border border-gray-300 rounded-md opacity-0 delay-2s mb-14 -mt-14 md:grid-cols-2">
                            <!-- contianer picture -->
                            <div class="flex justify-center">
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500">รูปถ่ายคอนเทนเนอร์*</label>
                                    <div class="py-5 border border-gray-300 border-solid rounded">
                                        <img 
                                        class="object-contain w-5/6 h-64 mx-auto" 
                                        src="https://packer.searates.com/images/main-container.png" 
                                        alt="profile picture" 
                                        loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <!-- contianer name -->
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500">หมายเลขตู้คอนเทนเนอร์*</label>
                                    <input disabled value="CTN-0001" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="CTN-0001">
                                </div>
                                <!-- contianer size -->
                                <div class="w-full mb-3">
                                    <label for="formFile" class="inline-block mb-2 text-gray-500">ขนาด(ฟุต)*</label>
                                    <input disabled value="20" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="30">
                                </div>
                            </div>
                        </div>

                        <!-- next btn -->
                        <div class="absolute right-5 bottom-5 md:bottom-10 md:right-10 ">
                            <div class="flex justify-center space-x-2">
                                <button
                                    @click="showNewJobDriverModal = true"
                                    :disabled="!containerId"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    :class="{'opacity-60 cursor-not-allowed': !containerId}"
                                    class="inline-block px-6 py-2.5 bg-blue-500 text-white leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >ถัดไป</button>
                            </div>
                        </div>
                        <!--prev btn -->
                        <div class="absolute left-5 bottom-5 md:bottom-10 md:left-10 ">
                            <div class="flex justify-center space-x-2">
                                <button
                                    @click="stepper--"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    class="inline-block px-6 py-2.5 bg-gray-500 text-white leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-gray-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray- active:shadow-lg transition duration-150 ease-in-out"
                                >ย้อนกลับ</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            showNewJobDriverModal: false,
            routeId : '',
            containerId : '',
            truckId: '',
            stepper: 1
        };
    },
    methods: {
        log() {
            console.log("click");
        },
    },
};
</script>
