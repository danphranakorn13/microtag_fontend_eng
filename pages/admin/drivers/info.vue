<template>
    <div class="mb-10 mt-5">

        <div class="w-full mb-5">
          <RealtimeAlert/>
        </div>

        <div class="mb-5 flex flex-wrap space-y-2 justify-between items-center">
            <!-- title -->
            <div class="w-full md:w-1/2">
                <h1 class="text-3xl text-center md:text-left font-blod">Hans Burger</h1>
            </div>
            <!-- send message button -->
            <div class="w-full md:block md:w-1/2">
                <button @click="toggleAddDriverModal()" class="w-full md:w-auto float-right rounded-3xl text-md px-2 py-1 text-white bg-blue-500 shadow-md border-2 border-blue-400">ส่งข้อความ</button>
            </div>
        </div>

        <!-- Action -->
        <div class="flex mb-1">
            <div class="w-full md:w-auto border-2 shadow-md border-gray-200">
                <button class="w-full p-2 bg-white">เปิดใช้งานผู้ใช้</button>
            </div>
            <NuxtLink to="/admin/drivers/edit" class="w-1/2 md:w-auto border-2 shadow-md border-gray-200">
                <button class="w-full p-2 bg-white">แก้ไข</button>
            </NuxtLink>
            <div class="w-1/2 md:w-auto border-2 shadow-md border-gray-200">
                <button class="w-full p-2 bg-white">ลบ</button>
            </div>
        </div>

        <div class="grid grid-cols-1 p-8 bg-white border-2 shadow-md border-gray-200 md:grid-cols-2 gap-4">
            <!-- profile picture -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">รูปโปรไฟล์*</label>
                    <!-- <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"> -->
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
            <!-- driver license picture -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">รูปใบขับขี่*</label>
                    <!-- <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"> -->
                    <div class="py-5 border border-solid border-gray-300 rounded">
                        <img 
                            class="w-5/6 object-contain h-64 mx-auto" 
                            src="~/assets/images/driver_license.jpg" 
                            alt="profile picture" 
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <!-- first and lastname -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">ชื่อ-สกุล*</label>
                    <input disabled value="สมชาย เมืองสิง" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="สมชาย เมืองสิง">
                </div>
            </div>
            <!-- driver license number -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">เลขใบขับขี่*</label>
                    <input disabled value="6003051613" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="0000000000">
                </div>
            </div>
            <!-- birthday -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">วันเกิด*</label>
                    <input disabled value="13/05/2542" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="0000000000">
                </div>
            </div>
            <!-- phone number -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">เบอร์โทรศัพท์*</label>
                    <input disabled value="0872546698" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="091239xxxx">
                </div>
            </div>
            <!-- email -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">อีเมล*</label>
                    <input disabled value="example@domain.com" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="email" placeholder="example@gmail.com">
                </div>
            </div>
            <!-- description -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">คำอธิบายเพิ่มเติม</label>
                    <textarea disabled class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="4">พนักงานเอกชนในบบริษัทแห่งหนึ่ง</textarea>
                </div>
            </div>

            <!-- ที่อยู่ -->
            <div class="flex justify-center md:col-span-2">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">ที่อยู่</label>
                    <input disabled value="150/333 หมู่บ้านนิรันดร์วิลล์ 6 ถนนสุขุมไทย" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="150/xxx หมู่บ้านนิรันดร์วิลล์ 6 ถนนสุขุมไทย">
                </div>
            </div>
            <!-- จังหวัด -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">จังหวัด</label>
                    <input disabled value="กรุงเทพ" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="150/xxx หมู่บ้านนิรันดร์วิลล์ 6 ถนนสุขุมไทย">
                </div>
            </div>
            <!-- อำเภอ -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">เขต/อำเภอ</label>
                    <input disabled value="ลาดกระบัง" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="150/xxx หมู่บ้านนิรันดร์วิลล์ 6 ถนนสุขุมไทย">
                </div>
            </div>
            <!-- ตำบล -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">ตำบล</label>
                    <input disabled value="ลาดกระบัง" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" placeholder="150/xxx หมู่บ้านนิรันดร์วิลล์ 6 ถนนสุขุมไทย">
                </div>
            </div>
            <!-- รหัสไปรษณีย์ -->
            <div class="flex justify-center">
                <div class="mb-3 w-full">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-400">รหัสไปรษณีย์</label>
                    <input disabled value="10520" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-800 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text">
                </div>
            </div>
        </div>
                                                                                                                                                                                              <!--  -->
    </div>
</template>