<template>
    <div class="mt-5 mb-10">

        <div class="w-full mb-5">
          <RealtimeAlert/>
        </div>

        <div class="flex flex-wrap items-center justify-between mb-5 space-y-2">
            <!-- title -->
            <div class="w-full md:w-1/2">
                <h1 class="text-3xl text-center md:text-left font-blod">เส้นไปทางเลี่ยงเมือง</h1>
            </div>
        </div>

        <!-- Action -->
        <div class="flex mb-1">
            <NuxtLink to="/admin/routes/edit" class="w-1/2 border-2 border-gray-200 shadow-md md:w-auto">
                <button class="w-full p-2 bg-white">แก้ไข</button>
            </NuxtLink>
            <div class="w-1/2 border-2 border-gray-200 shadow-md md:w-auto">
                <button class="w-full p-2 bg-white">ลบ</button>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 p-8 bg-white border-2 border-gray-200 shadow-md md:grid-cols-2">
           <!-- route name -->
            <div class="flex justify-center md:col-span-2">
                <div class="w-full mb-3">
                    <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ชื่อเส้นทาง*</label>
                    <input disabled value="ระยะทางใกล้ที่สุด" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="ระยะทางใกล้ที่สุด">
                </div>
            </div>
            <!-- origin name -->
            <div class="flex justify-center">
                <div class="w-full mb-3">
                    <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ต้นทาง*</label>
                    <input disabled value="กรุงเทพ" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="กรุงเทพ">
                </div>
            </div>
            <!-- desination name -->
            <div class="flex justify-center">
                <div class="w-full mb-3 -mt-4 md:mt-0">
                    <label for="formFile" class="inline-block mb-2 text-gray-500 form-label">ปลายทาง*</label>
                    <input disabled value="เชียงใหม่" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="เชียงใหม่">
                </div>
            </div>
            <!-- longdo map route -->
            <div class="flex justify-center md:col-span-2">
                <div class="w-full mb-3 -mt-4 h-72 lg:h-96">
                    <longdo-map :input="false"></longdo-map>
                </div>
            </div>
        </div>
                                                                                                                                                                                              <!--  -->
    </div>
</template>