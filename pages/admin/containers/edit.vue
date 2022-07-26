<template>
    <div class="mb-10 mt-5">

        <div class="w-full mb-5">
          <RealtimeAlert/>
        </div>

        <div class="mb-5 flex flex-wrap space-y-2 justify-between items-center">
            <!-- title -->
            <div class="w-full md:w-1/2">
                <h1 class="text-3xl text-center md:text-left font-blod">3กจ 1598</h1>
            </div>
            <!-- save new driver info button -->
            <div class="w-full md:block md:w-1/2">
                <button @click="toggleAddDriverModal()" class="w-full md:w-auto float-right rounded-3xl text-md px-2 py-1 text-white bg-blue-500 shadow-md border-2 border-blue-400">บันทึก</button>
            </div>
        </div>

        <!-- edit form -->
        <div class="grid grid-cols-1 p-8 bg-white border-2 shadow-md border-gray-200 md:grid-cols-2 gap-4">
            <!-- contianer name -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="inline-block mb-2 text-gray-500">หมายเลขตู้คอนเทนเนอร์*</label>
                    <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="CTN-0001">
                </div>
            </div>
            <!-- contianer size -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="inline-block mb-2 text-gray-500">ขนาด(ฟุต)*</label>
                    <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="30">
                </div>
            </div>
            <!-- contianer picture -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="inline-block mb-2 text-gray-500">รูปถ่ายคอนเทนเนอร์*</label>
                    <input class="block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile">
                </div>
            </div>
        </div>
                                                                                                                                                                                              <!--  -->
    </div>
</template>