<template>
    <div class="mb-10 mt-5">

        <div class="w-full mb-5">
          <RealtimeAlert/>
        </div>

        <div class="mb-5 flex flex-wrap space-y-2 justify-between items-center">
            <!-- title -->
            <div class="w-full md:w-1/2">
                <h1 class="text-3xl text-center md:text-left font-blod">งาน JBI-0001</h1>
            </div>
        </div>

        <!-- Action -->
        <div class="flex mb-1">
            <NuxtLink to="/admin/jobs/edit" class="w-1/2 md:w-auto border-2 shadow-md border-gray-200">
                <button class="w-full p-2 bg-white">แก้ไข</button>
            </NuxtLink>
            <div class="w-1/2 md:w-auto border-2 shadow-md border-gray-200">
                <button class="w-full p-2 bg-white">ลบ</button>
            </div>
        </div>

        <div class="grid grid-cols-1 p-8 bg-white border-2 shadow-md border-gray-200 md:grid-cols-2 gap-4">
            <!-- status -->
            <div class="flex w-full md:col-span-2">
                <div class="flex justify-center items-center space-x-2 w-full">
                    <h1 class="text-2xl md:text-3xl text-center font-blod">สถานะ :</h1>
                    <span class="text-2xl md:text-2xl p-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                          เสร็จสิ้น
                    </span>
                </div>
            </div>

            <!-- title -->
            <div class="w-full md:col-span-2 border-2 my-5"></div>
            <div class="flex w-full md:col-span-2">
                <h1 class="w-full text-2xl md:text-3xl text-center md:text-right font-blod">คนขับรถ</h1>
            </div>
            <!-- profile picture -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">รูปโปรไฟล์*</label>
                    <div class="py-5 border border-solid border-gray-300 rounded">
                        <img 
                            class="w-5/6 object-contain h-64 mx-auto" 
                            src="~/assets/images/profile_picture.png" 
                            alt="profile picture" 
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <!-- first and lastname -->
            <div class="w-full">
                <div class="w-full mb-2">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">ชื่อ-สกุล*</label>
                    <input disabled value="สมชาย เมืองสิง" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="สมชาย เมืองสิง">
                </div>
                <div class="w-full mb-2">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">เลขใบขับขี่*</label>
                    <input disabled value="6003051613" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="0000000000">
                </div>
                <div class="w-full  mb-2">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">เบอร์โทรศัพท์*</label>
                    <input disabled value="0872546698" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="091239xxxx">
                </div>
            </div>

            <!-- title -->
            <div class="w-full md:col-span-2 border-2 my-5"></div>
            <div class="flex w-full md:col-span-2">
                <h1 class="w-full text-2xl md:text-3xl text-center md:text-right font-blod">ตู้คอนเทนเนอร์</h1>
            </div>
            <!-- contianer picture -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="inline-block mb-2 text-gray-500">รูปถ่ายคอนเทนเนอร์*</label>
                    <div class="py-5 border border-solid border-gray-300 rounded">
                        <img 
                        class="w-5/6 object-contain h-64 mx-auto" 
                        src="https://packer.searates.com/images/main-container.png" 
                        alt="profile picture" 
                        loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div class="w-full">
                <!-- contianer name -->
                <div class="mb-3 w-full">
                    <label for="formFile" class="inline-block mb-2 text-gray-500">หมายเลขตู้คอนเทนเนอร์*</label>
                    <input disabled value="CTN-0001" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="CTN-0001">
                </div>
                <!-- contianer size -->
                <div class="mb-3 w-full">
                    <label for="formFile" class="inline-block mb-2 text-gray-500">ขนาด(ฟุต)*</label>
                    <input disabled value="20" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="30">
                </div>
            </div>
            <!-- title -->
            <div class="w-full md:col-span-2 border-2 my-5"></div>
            <div class="flex w-full md:col-span-2">
                <h1 class="w-full text-2xl md:text-3xl text-center md:text-right font-blod">รถบรรทุก</h1>
            </div>
            <!-- truck picture -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-500">รูปรถบรรทุก*</label>
                    <div class="py-5 border border-solid border-gray-300 rounded ">
                        <img 
                        class="w-5/6 object-contain h-64 mx-auto" 
                        src="https://pngimg.com/uploads/truck/truck_PNG16269.png" 
                        alt="profile picture" 
                        loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div class="w-full">
                 <!-- vehicle registration number -->
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-500">ทะเบียนรถ*</label>
                    <input disabled value="3กจ 1589" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="สมชาย เมืองสิง">
                </div>
                <!-- number of wheels -->
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-500">จำนวนล้อ*</label>
                    <input disabled value="4" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="4">
                </div>
            </div>

            <!-- title -->
            <div class="w-full md:col-span-2 border-2 my-5"></div>
            <div class="flex w-full md:col-span-2">
                <h1 class="w-full text-2xl md:text-3xl text-center md:text-right font-blod">เส้นทาง</h1>
            </div>
            <!-- longdo map route -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="inline-block mb-2 text-gray-500">รูปถ่ายคอนเทนเนอร์*</label>
                    <div class="mb-3 h-72 lg:h-96 w-full">
                        <longdo-map :input="false"></longdo-map>
                    </div>
                </div>
            </div>

            <div class="w-full">
                <!-- route name -->
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-500">ชื่อเส้นทาง*</label>
                    <input disabled value="ระยะทางใกล้ที่สุด" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="ระยะทางใกล้ที่สุด">
                </div>
                <!-- origin name -->
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-500">ต้นทาง*</label>
                    <input disabled value="กรุงเทพ" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="กรุงเทพ">
                </div>
                <!-- desination name -->
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-500">ปลายทาง*</label>
                    <input disabled value="เชียงใหม่" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="เชียงใหม่">
                </div>
            </div>
            
        </div>

    </div>
</template>