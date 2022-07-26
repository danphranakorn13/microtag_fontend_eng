<template>
    <div class="mt-5 mb-10">

        <!-- SendMessageModal -->
        <JobMonitorModal :show="showJobMonitorModal" @close="showJobMonitorModal=false"></JobMonitorModal>
        <SendMessageModal :show="showSendMsgModal" @close="showSendMsgModal=false"></SendMessageModal>

        <!-- Realtime alert -->
        <div class="w-full mb-5">
            <RealtimeAlert />
        </div>
            
        <div class="grid grid-cols-1 gap-4 my-4 md:grid-cols-12">
            <div class="p-4 overflow-y-auto bg-white rounded-md shadow-md max-h-screen-80 md:col-span-4">
                <div class="w-full">
                    <h4 class="text-lg lg:text-xl font-bold leading-tight text-gray-800 mb-2.5">
                        Containers Graph (120)
                    </h4>
                    <div v-for="(index) in 10" :key="index" class="flex items-center p-2 mb-4 border-2 border-gray-300 rounded-md shadow-md">
                        <div class="w-1/6">
                            <div class="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <div class="text-center">
                                <button @click="showJobMonitorModal = true">
                                    <p class="text-sm font-semibold text-blue-500 :md:text-md hover:underline">JBI-0001</p>
                                </button>
                            </div>
                        </div>
                        <div class="w-4/6 px-2">
                            <LineChart :height="70" />
                        </div>
                        <div class="w-1/6">
                            <h4 class="text-center text-md lg:text-xl font-bold leading-tight text-gray-800 mb-2.5">
                                35°C
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-y-auto max-h-screen-80 md:col-span-8">
                <div class="w-full mb-4">
                    <div class="flex flex-wrap justify-between space-y-4 md:space-y-0 md:flex-nowrap md:space-x-4">
                        <div class="flex items-center justify-center w-full min-h-full bg-white rounded-md shadow-md">
                            <div class="w-1/3 bg-blue-50">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 m-auto md:w-10 md:h-10 md:my-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>
                            </div>
                            <div class="w-2/3 px-4">
                                <h6 class="text-gray-500">Available</h6>
                                <p class="text-xl font-bold">80</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center w-full min-h-full bg-white rounded-md shadow-md">
                            <div class="w-1/3 bg-green-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 m-auto md:w-10 md:h-10 md:my-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>
                            </div>
                            <div class="w-2/3 px-4">
                                <h6 class="text-gray-500">Working</h6>
                                <p class="text-xl font-bold">20</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center w-full min-h-full bg-white rounded-md shadow-md">
                            <div class="w-1/3 bg-yellow-50">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 m-auto md:w-10 md:h-10 md:my-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>
                            </div>
                            <div class="w-2/3 px-4">
                                <h6 class="text-gray-500">Repair</h6>
                                <p class="text-xl font-bold">20</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full p-5 mb-4 bg-white rounded-md shadow-md">
                    <h4 class="text-lg lg:text-xl font-bold leading-tight text-gray-800 mb-2.5">
                        My Containers Location
                    </h4>
                    <div class="h-96">
                        <longdo-map class="w-full" :zoom="10" :lastView="false">         
                            <longdo-map-marker             
                                v-for="(item, i) in markers"             
                                :key="i"             
                                :location="item.location"
                                :title="item.title"             
                                :detail="item.detail"     
                            />     
                        </longdo-map> 
                    </div>
                    
                </div>
                <div class="w-full p-5 bg-white rounded-md shadow-md">
                    <h4 class="text-lg lg:text-xl font-bold leading-tight text-gray-800 mb-2.5">
                        Alert Log
                    </h4>
                    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                        <div class="w-full overflow-x-auto">
                            <table class="w-full whitespace-no-wrap">
                                <thead>
                                    <tr class="text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-blue-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
                                        <th class="hidden px-4 py-3 md:table-cell">รหัสการแจ้งเตือน</th>
                                        <th class="px-4 py-3">รายละเอียด</th>
                                        <th class="px-4 py-3">สถานะ</th>
                                        <th class="px-4 py-3">ส่งข้อความ</th>
                                        <th class="hidden px-4 py-3 md:table-cell">วัน/เวลา</th>
                                    </tr>
                                </thead>
                                <tbody v-for="(index) in 3" :key="index" class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                    <tr class="text-gray-700 dark:text-gray-400">
                                        <td class="hidden px-4 py-3 md:table-cell">
                                            <NuxtLink to="/admin/jobs/info">
                                                <p class="font-semibold text-blue-500 hover:underline">NTI-0001</p>
                                            </NuxtLink>
                                        </td>
                                        <td class="px-4 py-3">
                                            <p class="font-semibold">ตู้ตอนเทนเนอร์ JBI-0001 อุณหภูมิเกิน 30°c</p>
                                        </td>
                                        <td class="px-4 py-3 ">
                                            <span class="px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                                แก้ไขแล้ว
                                            </span>
                                        </td>
                                        <td class="px-4 py-3">
                                            <button @click="showSendMsgModal = !showSendMsgModal" class="flex mx-auto text-xl text-white bg-blue-500 rounded-full hover:bg-blue-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                                </svg>
                                            </button>
                                        </td>
                                        <td class="hidden px-4 py-3 md:table-cell">
                                            <p class="">21:26 น.</p>
                                            <p class="">07/05/2565</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AdminDashboard',
    data() {
        return {
            showJobMonitorModal: false,
            showSendMsgModal: false,
            markers: [
                {
                    location: { lon: 100.64532478914055, lat: 13.692020193933924 },
                    title: "อาคารบีเอ็ม",
                    detail: "ที่อยู่: 80 ถนนศรีนครินทร์ แขวงหนองบอน เขตประเวศ กรุงเทพ 10250"
                }
            ]
        };
    },
};
</script>
