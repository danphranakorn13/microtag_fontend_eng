<template>
    <div class="mt-5 mb-10">

        <div class="w-full mb-5">
          <RealtimeAlert/>
        </div>

        <div class="flex flex-wrap items-center justify-between mb-5 space-y-2">
            <!-- title -->
            <div class="w-full md:w-1/2">
                <h1 class="text-3xl text-center md:text-left font-blod">ALI-0001</h1>
            </div>
            <!-- save new driver info button -->
            <div class="w-full md:block md:w-1/2">
                <button @click="toggleAddDriverModal()" class="float-right w-full px-2 py-1 text-white bg-blue-500 border-2 border-blue-400 shadow-md md:w-auto rounded-3xl text-md">บันทึก</button>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 p-8 bg-white border-2 border-gray-200 shadow-md md:grid-cols-2">
            <!-- alarm name -->
            <div class="flex justify-center">
                <div class="w-full mb-3">
                    <label for="formFile" class="inline-block mb-2 text-gray-500">ชื่อการแจ้งเตือน*</label>
                    <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="ชื่อการแจ้งเตือน">
                </div>
            </div>
            <!-- level alarm -->
            <div class="flex justify-center">
                <div class="w-full mb-3">
                    <label for="formFile" class="inline-block mb-2 text-gray-500">ระดับ*</label>
                    <select v-model="alarmLevel" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option disabled value="">เลือก</option>
                        <option>แจ้งเตือน</option>
                        <option>อันตราย</option>
                    </select>
                </div>
            </div>
            <!-- condition alarm -->
            <div class="w-full">
                <div class="w-full mb-3">
                    <label for="formFile" class="inline-block mb-2 text-gray-500">เงื่อนไขการแจ้งเตือน*</label>
                </div>
                <!-- temperature -->
                <div>
                    <div class="flex items-center">
                        <div class="w-1/3 mb-3 mr-2 md:mr-4">
                            <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">อุณหภูมิ*</label>
                            <select v-model="alarmTempConType" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option disabled value="">เลือก</option>
                                <option>มากกว่า</option>
                                <option>น้อยกว่า</option>
                                <option>กำหนด</option>
                            </select>
                        </div>
                        <div v-show="alarmTempConType != 'กำหนด'" class="w-2/3 mb-3">
                            <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">องศา</label>
                            <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="30">
                        </div>
                    </div>
                    <div v-show="alarmTempConType == 'กำหนด'" class="flex items-center">
                        <div class="w-1/3 mb-3 mr-2 md:mr-4">
                            <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">เงื่อนไข*</label>
                            <input disabled value="มากกว่า" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                        <div class="w-2/3 mb-3">
                            <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">องศา*</label>
                            <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="30">
                        </div>
                    </div>

                    <div v-show="alarmTempConType == 'กำหนด'" class="flex items-center">
                        <div class="w-1/3 mb-3 mr-2 md:mr-4">
                            <input disabled value="น้อยกว่า" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                        <div class="w-2/3 mb-3">
                            <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="30">
                        </div>
                    </div>
                </div>

                <!-- moisture -->
                <div>
                    <div class="flex items-center">
                        <div class="w-1/3 mb-3 mr-2 md:mr-4">
                            <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">ความชื้น*</label>
                            <select v-model="alarmMoisConType" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option disabled value="">เลือก</option>
                                <option>มากกว่า</option>
                                <option>น้อยกว่า</option>
                                <option>กำหนด</option>
                            </select>
                        </div>
                        <div v-show="alarmMoisConType != 'กำหนด'" class="w-2/3 mb-3">
                            <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">เปอร์เซ็น</label>
                            <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="30">
                        </div>
                    </div>
                    <div v-show="alarmMoisConType == 'กำหนด'" class="flex items-center">
                        <div class="w-1/3 mb-3 mr-2 md:mr-4">
                            <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">เงื่อนไข*</label>
                            <input disabled value="มากกว่า" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                        <div class="w-2/3 mb-3">
                            <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">เปอร์เซ็น*</label>
                            <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="30">
                        </div>
                    </div>

                    <div v-show="alarmMoisConType == 'กำหนด'" class="flex items-center">
                        <div class="w-1/3 mb-3 mr-2 md:mr-4">
                            <input disabled value="น้อยกว่า" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                        <div class="w-2/3 mb-3">
                            <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="30">
                        </div>
                    </div>
                </div>
                                                
            </div>

            <!-- alarm form type -->
            <div class="w-full">
                <div class="w-full mb-3">
                    <label for="formFile" class="inline-block mb-2 text-gray-500">เตือนจาก*</label>
                </div>
                <div class="flex items-center">
                    <div class="w-1/2 mb-3 mr-2 md:mr-4">
                        <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">ประเภท*</label>
                        <select v-model="alarmFromType" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option disabled value="">เลือก</option>
                            <option>งาน</option>
                            <option>คอนเทอนเนอร์</option>
                        </select>
                    </div>
                    <div class="w-1/2 mb-3">
                        <label for="formFile" class="inline-block mb-2 text-sm text-gray-500">รหัส*</label>
                        <select :disabled="!alarmFromType" v-model="alarmFromId" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option disabled value="">เลือก</option>
                            <option>job 1</option>
                            <option>job 2</option>
                            <option>job 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
                                                                                                                                                                                              <!--  -->
    </div>
</template>