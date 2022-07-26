<template>
    <div class="mt-5 mb-10">
        <!-- Realtime alert -->
        <div class="w-full mb-5">
            <RealtimeAlert />
        </div>

        <div class="flex flex-wrap items-center justify-between mb-5 space-y-2">
            <!-- title -->
            <div class="w-full md:w-1/2">
                <h1 class="text-3xl text-center md:text-left font-blod">งานของฉัน</h1>
            </div>
        </div>
            
        <div class="grid grid-cols-12 gap-3">
            <!-- start button -->
            <div class="col-span-12 p-5 bg-white rounded shadow-md md:hidden md:col-span-2">
                <input type="file" accept="image/*" capture="camera" />
                <div class="text-center">
                    <h2 class="mb-2 text-xl">กดเพื่อเริ่ม</h2>
                    <button class="w-20 h-20 mx-auto mb-3 text-white transition duration-300 bg-blue-500 border-4 border-gray-400 rounded-full hover:bg-green-500">
                        เริ่มงาน
                    </button>
                    <div class="flex justify-center">
                        <p class="text-gray-500">เวลาเริ่มต้น: </p><p class="font-semibold">{{jobStartAt}}</p>
                    </div>
                    <div class="flex justify-center">
                        <p class="text-gray-500">เวลาสิ้นสุด: </p><p class="font-semibold">{{jobFinishAt}}</p>
                    </div>
                    <div class="flex justify-center">
                        <p class="text-gray-500">ใช้เวลาไป: </p><p class="font-semibold">{{jobDulation}}</p>
                    </div>
                </div>
                
            </div>
            <!-- router -->
            <div class="col-span-12 p-5 bg-white rounded shadow-md md:col-span-9 lg:col-span-10">
                <h2 class="mb-2 text-xl">เส้นทาง</h2>
                <div class="grid grid-cols-1 gap-4 p-5 rounded-md md:grid-cols-12">
                    <!-- longdo map route -->
                    <div class="flex justify-center md:col-span-9">
                        <div class="w-full mb-3">
                            <label for="formFile" class="inline-block mb-2 text-gray-500">แผนที่*</label>
                            <div class="border border-gray-300 border-solid rounded ">
                                <div class="w-full h-64">
                                    <!-- <longdo-map :input="false"></longdo-map> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="w-full md:col-span-3">
                        <!-- route name -->
                        <div class="w-full mb-3">
                            <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ชื่อเส้นทาง*</label>
                            <input disabled value="ระยะทางใกล้ที่สุด" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="ระยะทางใกล้ที่สุด">
                        </div>
                        <div class="w-full mb-3 md:flex-wrap lg:flex-nowrap lg:space-x-2 md:flex">
                                <!-- origin name -->
                            <div class="w-full">
                                <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ต้นทาง*</label>
                                <input disabled value="กรุงเทพ" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="กรุงเทพ">
                            </div>
                                <!-- desination name -->
                            <div class="w-full">
                                <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ปลายทาง*</label>
                                <input disabled value="เชียงใหม่" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="เชียงใหม่">
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <!-- start button -->
            <div class="hidden col-span-12 p-5 bg-white rounded shadow-md md:block md:col-span-3 lg:col-span-2">
                <div class="mt-10 text-center">
                    <h2 class="mb-2 text-xl">กดเพื่อเริ่ม</h2>
                    <button class="w-20 h-20 mx-auto mb-3 text-white transition duration-300 bg-blue-500 border-4 border-gray-400 rounded-full hover:bg-green-500">
                        เริ่มงาน
                    </button>
                    <div class="flex justify-center">
                        <p class="text-gray-500">เวลาเริ่มต้น: </p><p class="font-semibold">{{jobStartAt}}</p>
                    </div>
                    <div class="flex justify-center">
                        <p class="text-gray-500">เวลาสิ้นสุด: </p><p class="font-semibold">{{jobFinishAt}}</p>
                    </div>
                    <div class="flex justify-center">
                        <p class="text-gray-500">ใช้เวลาไป: </p><p class="font-semibold">{{jobDulation}}</p>
                    </div>
                </div>
                
            </div>

            <!-- truck -->
            <div class="col-span-12 p-5 bg-white rounded shadow-md md:col-span-6">
                <h2 class="mb-2 text-xl">รถบรรทุก</h2>
                <div class="grid grid-cols-1 gap-4 p-5 rounded-md lg:grid-cols-12">
                    <!-- truck picture -->
                    <div class="flex justify-center lg:col-span-9">
                        <div class="w-full mb-3">
                            <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">รูปรถบรรทุก*</label>
                            <div class="py-3 border border-gray-300 border-solid rounded ">
                                <img 
                                class="object-contain w-5/6 h-64 mx-auto" 
                                src="https://pngimg.com/uploads/truck/truck_PNG16269.png" 
                                alt="profile picture" 
                                loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:col-span-3">
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
            </div>

            <div class="col-span-12 p-5 bg-white rounded shadow-md md:col-span-6">
                <h2 class="mb-2 text-xl">ตู้คอนเทนเนอร์</h2>
                <div class="grid grid-cols-1 gap-4 p-5 rounded-md lg:grid-cols-12">
                    <!-- contianer picture -->
                    <div class="flex justify-center lg:col-span-9">
                        <div class="w-full mb-3">
                            <label for="formFile" class="inline-block mb-2 text-gray-500">รูปถ่ายคอนเทนเนอร์*</label>
                            <div class="py-3 border border-gray-300 border-solid rounded">
                                <img 
                                class="object-contain w-5/6 h-64 mx-auto" 
                                src="https://packer.searates.com/images/main-container.png" 
                                alt="profile picture" 
                                loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:col-span-3">
                        <!-- contianer name -->
                        <div class="w-full mb-3">
                            <label for="formFile" class="inline-block mb-2 text-gray-500">รหัสตู้*</label>
                            <input disabled value="CTN-0001" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="CTN-0001">
                        </div>
                        <!-- contianer size -->
                        <div class="w-full mb-3">
                            <label for="formFile" class="inline-block mb-2 text-gray-500">ขนาด(ฟุต)*</label>
                            <input disabled value="20" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="30">
                        </div>
                        <!-- temperature -->
                        <div class="w-full mb-3">
                            <label for="formFile" class="inline-block mb-2 text-gray-500">อุณหภูมิ °C</label>
                            <input disabled value="35" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="CTN-0001">
                        </div>
                        <!-- moisture -->
                        <div class="w-full mb-3">
                            <label for="formFile" class="inline-block mb-2 text-gray-500">ความชื้น %</label>
                            <input disabled value="50" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="30">
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
            jobStartAt : '-',
            jobFinishAt : '-',
            jobDulation : '-',
            showModal: false,
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

<style>
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
