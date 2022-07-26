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
                        Containers Graph ( 120 )
                    </h4>
                    <div class="flex items-center p-2 mb-4 border-2 border-gray-300 rounded-md shadow-md">
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
                            <LineChart :chart-data="chartData0" :height="70" />
                        </div>
                        <div class="w-1/6">
                            <h4 class="text-center text-md lg:text-xl font-bold leading-tight text-gray-800 mb-2.5">
                                35°F
                            </h4>
                        </div>
                    </div>
                    <div class="flex items-center p-2 mb-4 border-2 border-gray-300 rounded-md shadow-md">
                        <div class="w-1/6">
                            <div class="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <div class="text-center">
                                <button @click="showJobMonitorModal = true">
                                    <p class="text-sm font-semibold text-blue-500 :md:text-md hover:underline">JBI-0002</p>
                                </button>
                            </div>
                        </div>
                        <div class="w-4/6 px-2">
                            <LineChart :chart-data="chartData1" :height="70" />
                        </div>
                        <div class="w-1/6">
                            <h4 class="text-center text-md lg:text-xl font-bold leading-tight text-gray-800 mb-2.5">
                                90°F
                            </h4>
                        </div>
                    </div>
                    <div class="flex items-center p-2 mb-4 border-2 border-gray-300 rounded-md shadow-md">
                        <div class="w-1/6">
                            <div class="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <div class="text-center">
                                <button @click="showJobMonitorModal = true">
                                    <p class="text-sm font-semibold text-blue-500 :md:text-md hover:underline">JBI-0003</p>
                                </button>
                            </div>
                        </div>
                        <div class="w-4/6 px-2">
                            <LineChart :height="70" :chart-data="chartData2" />
                        </div>
                        <div class="w-1/6">
                            <h4 class="text-center text-md lg:text-xl font-bold leading-tight text-gray-800 mb-2.5">
                                60°F
                            </h4>
                        </div>
                    </div>
                    <div class="flex items-center p-2 mb-4 border-2 border-gray-300 rounded-md shadow-md">
                        <div class="w-1/6">
                            <div class="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <div class="text-center">
                                <button @click="showJobMonitorModal = true">
                                    <p class="text-sm font-semibold text-blue-500 :md:text-md hover:underline">JBI-0004</p>
                                </button>
                            </div>
                        </div>
                        <div class="w-4/6 px-2">
                            <LineChart :height="70" :chart-data="chartData3" />
                        </div>
                        <div class="w-1/6">
                            <h4 class="text-center text-md lg:text-xl font-bold leading-tight text-gray-800 mb-2.5">
                                42°F
                            </h4>
                        </div>
                    </div>
                    <div v-for="(index) in 10" :key="index" class="flex items-center p-2 mb-4 border-2 border-gray-300 rounded-md shadow-md">
                        <div class="w-1/6">
                            <div class="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <div class="text-center">
                                <button @click="showJobMonitorModal = true">
                                    <p class="text-sm font-semibold text-blue-500 :md:text-md hover:underline">JBI-000{{index+4}}</p>
                                </button>
                            </div>
                        </div>
                        <div class="w-4/6 px-2">
                            <LineChart :height="70" />
                        </div>
                        <div class="w-1/6">
                            <h4 class="text-center text-md lg:text-xl font-bold leading-tight text-gray-800 mb-2.5">
                                35°F
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
                                        <th class="hidden px-4 py-3 md:table-cell">NotificationID</th>
                                        <th class="px-4 py-3">desc</th>
                                        <th class="px-4 py-3">status</th>
                                        <th class="px-4 py-3">message</th>
                                        <th class="hidden px-4 py-3 md:table-cell">date time</th>
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
                                            <p class="font-semibold">ContainerID : JBI-0001 temperature more than 30°c</p>
                                        </td>
                                        <td class="px-4 py-3 ">
                                            <span class="px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                                Fixed
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
                                            <p class="">10:26 AM</p>
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
                    title: "my contaner 1",
                    detail: "Address: 80 se-na-ka-rin nong-bon pra-veat Bangkok 10250"
                },
                // 13.725318, 100.567476
                {
                    location: { lon: 100.567476, lat: 13.725318 },
                    title: "my contaner 2",
                    detail: "Address: 80 se-na-ka-rin nong-bon pra-veat Bangkok 10250"
                },
                // 13.773340, 100.431520
                {
                    location: { lon: 100.431520, lat: 13.773340 },
                    title: "my contaner 3",
                    detail: "Address: 80 se-na-ka-rin nong-bon pra-veat Bangkok 10250"
                },
                // 13.699969, 100.763856
                {
                    location: { lon: 100.763856, lat: 13.699969 },
                    title: "my contaner 4",
                    detail: "Address: 80 se-na-ka-rin nong-bon pra-veat Bangkok 10250"
                },
                // 13.658605, 100.489198
                {
                    location: { lon: 100.489198, lat: 13.658605 },
                    title: "my contaner 5",
                    detail: "Address: 80 se-na-ka-rin nong-bon pra-veat Bangkok 10250"
                },
                // 13.785344, 100.512544
                {
                    location: { lon: 100.512544, lat: 13.785344 },
                    title: "my contaner 6",
                    detail: "Address: 80 se-na-ka-rin nong-bon pra-veat Bangkok 10250"
                },
                // 13.743994, 100.354616
                {
                    location: { lon: 100.354616, lat: 13.743994 },
                    title: "my contaner 7",
                    detail: "Address: 80 se-na-ka-rin nong-bon pra-veat Bangkok 10250"
                },
                // 14.177129, 100.317537
                {
                    location: { lon: 100.317537, lat: 14.177129 },
                    title: "my contaner 8",
                    detail: "Address: 80 se-na-ka-rin nong-bon pra-veat Bangkok 10250"
                },
                // 14.091899, 100.158235
                {
                    location: { lon: 100.158235, lat: 14.091899 },
                    title: "my contaner 9",
                    detail: "Address: 80 se-na-ka-rin nong-bon pra-veat Bangkok 10250"
                },
                // 13.643925, 101.454622
                {
                    location: { lon: 101.454622, lat: 13.643925 },
                    title: "my contaner 10",
                    detail: "Address: 80 se-na-ka-rin nong-bon pra-veat Bangkok 10250"
                },
            ],
            chartData0: {
                labels: [
                    "0",
                    "10",
                    "20",
                    "30",
                    "40",
                    "50",
                    "60",
                    "0",
                    "10",
                    "20",
                    "30",
                    "40",
                    "50",
                    "60",
                ],
                datasets: [
                    {
                        borderColor: "#15803d",
                        backgroundColor: "#166534",
                        data: [40, 39, 10, 40, 39, 80, 35, 40, 39, 10, 40, 39, 80, 35],
                    },
                ],
            },
            chartData1: {
                labels: [
                    "0",
                    "10",
                    "20",
                    "30",
                    "40",
                    "50",
                    "60",
                    "0",
                    "10",
                    "20",
                    "30",
                    "40",
                    "50",
                    "60",
                ],
                datasets: [
                    {
                        borderColor: "#b91c1c",
                        backgroundColor: "#b91c1c",
                        data: [40, 39, 10, 40, 39,  10, 40, 39, 80, 35, 40, 39, 35, 90],
                    },
                ],
            },
            chartData2: {
                labels: [
                    "0",
                    "10",
                    "20",
                    "30",
                    "40",
                    "50",
                    "60",
                    "0",
                    "10",
                    "20",
                    "30",
                    "40",
                    "50",
                    "60",
                ],
                datasets: [
                    {
                        borderColor: "#b91c1c",
                        backgroundColor: "#b91c1c",
                        data: [0, 39, 10, 5, 39, 10, 35, 40, 39, 70, 40, 39, 80, 60],
                    },
                ],
            },
            chartData3: {
                labels: [
                    "0",
                    "10",
                    "20",
                    "30",
                    "40",
                    "50",
                    "60",
                    "0",
                    "10",
                    "20",
                    "30",
                    "40",
                    "50",
                    "60",
                ],
                datasets: [
                    {
                        borderColor: "#15803d",
                        backgroundColor: "#166534",
                        data: [80, 89, 10, 40, 50, 80, 25, 40, 80, 10, 80, 39, 80, 42],
                    },
                ],
            },
            chartOptions: {
                scales: {
                    x: {
                        display:false
                    },
                    y: {
                        display:false
                    }
                },
                plugins:{
                    legend: {
                        display: false
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
            },
        };
    },
};
</script>
