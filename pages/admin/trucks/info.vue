<template>
    <div class="mb-10 mt-5">

        <div class="w-full mb-5">
          <RealtimeAlert/>
        </div>

        <div class="mb-5 flex flex-wrap space-y-2 justify-between items-center">
            <!-- title -->
            <div class="w-full md:w-1/2">
                <h1 class="text-3xl text-center md:text-left font-blod">3กจ 1589</h1>
            </div>
        </div>

        <!-- Action -->
        <div class="flex mb-1">
            <NuxtLink to="/admin/trucks/edit" class="w-1/2 md:w-auto border-2 shadow-md border-gray-200">
                <button class="w-full p-2 bg-white">แก้ไข</button>
            </NuxtLink>
            <div class="w-1/2 md:w-auto border-2 shadow-md border-gray-200">
                <button class="w-full p-2 bg-white">ลบ</button>
            </div>
        </div>

        <div class="grid grid-cols-1 p-8 bg-white border-2 shadow-md border-gray-200 md:grid-cols-2 gap-4">
            <!-- vehicle registration number -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-500">ทะเบียนรถ*</label>
                    <input disabled value="3กจ 1589" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="สมชาย เมืองสิง">
                </div>
            </div>
            <!-- number of wheels -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-500">จำนวนล้อ*</label>
                    <input disabled value="4" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="number" placeholder="4">
                </div>
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

            <!-- status -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-500">สถานะ*</label>
                    <input disabled value="ว่าง" class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text">
                </div>
            </div>
        </div>
                                                                                                                                                                                              <!--  -->
    </div>
</template>