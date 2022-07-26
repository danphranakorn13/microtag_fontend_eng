<template>
    <div class="mt-5 mb-10 whitespace-nowrap">
        <!-- new task modal -->
        <NewJobModal :show="showModal"  @close="showModal=false"></NewJobModal>
        <!-- SendMessageModal -->
        <SendMessageModal :show="showSendMsgModal" @close="showSendMsgModal=false"></SendMessageModal>

        <!-- Realtime alert -->
        <div class="w-full mb-5">
            <RealtimeAlert />
        </div>

        <div class="flex flex-wrap items-center justify-between mb-5 space-y-2">
            <!-- title -->
            <div class="w-full md:w-1/2">
                <h1 class="text-3xl text-center md:text-left font-blod">Dashboard</h1>
            </div>
            <!-- Add driver button -->
            <div class="w-full md:block md:w-1/2">
                <button @click="toggleModal()" class="float-right w-full px-2 py-1 text-white bg-blue-500 border-2 border-blue-400 shadow-md md:w-auto rounded-3xl text-md">
                    + ADD JOB
                </button>
            </div>
        </div>
            
        <div class="grid grid-cols-12 gap-3 my-4">
            <div class="col-span-12 p-5 pb-20 bg-white rounded shadow-md h-96 md:h-full md:col-span-8">
                <h2 class="mb-2 text-xl">My Containers</h2>
                <longdo-map v-if="!showModal" class="w-full" :zoom="10" :lastView="false">         
                    <longdo-map-marker             
                        v-for="(item, i) in markers"             
                        :key="i"             
                        :location="item.location"
                        :title="item.title"             
                        :detail="item.detail"     
                    />     
                </longdo-map> 
            </div>
            <div class="col-span-12 p-5 bg-white rounded shadow-md md:col-span-4 whitespace-nowrap">
                <h2 class="mb-2 text-xl">Container Overview</h2>
                <div class="flex flex-wrap items-center justify-between mb-5">
                    <div class="order-2 w-full text-right lg:order-1 lg:w-1/2 lg:pr-8">   
                        <p class="text-gray-500">Container total</p>
                        <h2 class="text-xl font-bold">120</h2>
                    </div>
                    <div class="w-full bg-blue-100 lg:w-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                    </div>
                </div>
                <div class="lg:mt-20">
                    <div class="mb-5">
                        <div class="flex items-center justify-between ">
                            <h2 class="mb-2 text-lg">Available</h2>
                            <p>80</p>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 66%"></div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="flex items-center justify-between ">
                            <h2 class="mb-2 text-lg">Working</h2>
                            <p>20</p>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 16%"></div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="flex items-center justify-between ">
                            <h2 class="mb-2 text-lg">Repair</h2>
                            <p>20</p>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 16%"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-12 p-5 bg-white rounded shadow-md md:col-span-6">
                <h2 class="mb-2 text-xl">Currently job </h2>
                <table class="w-full border border-collapse rounded table-auto border-slate-400">
                    <thead class="bg-blue-100 border border-slate-300 ">
                        <tr>
                            <th class="py-5">favorite</th>
                            <th>ID</th>
                            <th>Route</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        <tr>
                            <td class="py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-auto text-red-500" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                            </td>
                            <td>JBI-0001</td>
                            <td>RTI-0002</td>
                            <td><p class="text-green-800">Avalible</p></td>
                        </tr>
                        <tr>
                            <td class="py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-auto text-red-500" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                            </td>
                            <td>JBI-0002</td>
                            <td>RTI-0002</td>
                            <td><p class="text-green-800">Avalible</p></td>
                        </tr>
                        <tr>
                            <td class="py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-auto text-red-500" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                            </td>
                            <td>JBI-0003</td>
                            <td>RTI-0005</td>
                            <td><p class="text-red-800">Working</p></td>
                        </tr>
                        <tr>
                            <td class="py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-auto text-red-500" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                </svg>
                            </td>
                            <td>JBI-0004</td>
                            <td>RTI-0006</td>
                            <td><p class="text-green-800">Avalible</p></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div class="col-span-12 p-5 bg-white rounded shadow-md md:col-span-6">
                <h2 class="mb-2 text-xl">Notification</h2>
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
                                        <p class="font-semibold text-blue-500">NTI-0001</p>
                                    </td>
                                    <td class="px-4 py-3">
                                        <p class="font-semibold">ContainerID: JBI-0001 temperature more than 30°c</p>
                                    </td>
                                    <td class="px-4 py-3 ">
                                        <span class="px-2 py-1 text-sm font-semibold leading-tight text-red-700 bg-red-100 rounded-full">
                                            Danger
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
</template>

<script>

export default {
    name: 'AdminDashboard',
    data() {
        return {
            showModal: false,
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
            ]
        };
    },
    methods: {
        showAlert() {
            this.$swal('Hello Vue world!!!');
        },
        toggleModal(){
            this.showModal = !this.showModal;
        }
    },
};
</script>
